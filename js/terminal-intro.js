const TERMINAL_INTRO_SCRIPT = [
  { command: 'whoami' },
  { output: 'john champion — full-stack engineer' },
  { command: 'cat traits.txt' },
  { output: 'builds  ·  curious  ·  ships', accent: true },
  { command: 'ls posts/ --latest' },
  { output: 'daily-story.md\nflying-from-the-ground-up.md\nonetimechat.md' },
]

const INTRO_KEYSTROKE_MS = 55
const INTRO_LINE_PAUSE_MS = 330
const INTRO_START_DELAY_MS = 840

function createTerminalCursor() {
  const cursor = document.createElement('span')
  cursor.className = 'terminal-cursor'
  cursor.setAttribute('aria-hidden', 'true')
  return cursor
}

function createTerminalCommandLine() {
  const line = document.createElement('div')
  line.className = 'terminal-command-line'
  const prompt = document.createElement('span')
  prompt.className = 'terminal-prompt-symbol'
  prompt.textContent = '$ '
  const typed = document.createElement('span')
  line.append(prompt, typed)
  return { line, typed }
}

function createTerminalOutputLine(text, { accent = false } = {}) {
  const line = document.createElement('div')
  line.className = accent
    ? 'terminal-output-line terminal-output-accent'
    : 'terminal-output-line'
  line.textContent = text
  return line
}

/** Types the intro script into `screen`; `finishNow()` skips the remaining animation. */
function createTerminalIntro(screen, { animate }) {
  let isSkipping = !animate
  let endCurrentPause = () => {}

  function pause(milliseconds) {
    if (isSkipping) return Promise.resolve()
    return new Promise((resolve) => {
      const timer = setTimeout(resolve, milliseconds)
      endCurrentPause = () => {
        clearTimeout(timer)
        resolve()
      }
    })
  }

  async function typeCommand(command, cursor) {
    const { line, typed } = createTerminalCommandLine()
    line.append(cursor)
    screen.append(line)
    for (const character of command) {
      typed.textContent += character
      await pause(INTRO_KEYSTROKE_MS)
    }
  }

  async function play() {
    const cursor = createTerminalCursor()
    await pause(INTRO_START_DELAY_MS)
    for (const step of TERMINAL_INTRO_SCRIPT) {
      if (step.command) await typeCommand(step.command, cursor)
      else screen.append(createTerminalOutputLine(step.output, step))
      await pause(INTRO_LINE_PAUSE_MS)
    }
    cursor.remove()
  }

  return {
    finished: play(),
    finishNow() {
      isSkipping = true
      endCurrentPause()
    },
  }
}
