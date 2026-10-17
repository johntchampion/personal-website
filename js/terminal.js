const TERMINAL_SECTIONS = {
  posts: '#posts',
  about: '#about',
  contact: '#contact',
  home: '#about',
  '..': '#about',
}

const TERMINAL_RESPONSES = {
  help: () =>
    'whoami  ls  cd  pwd  projects  joke  quote  faith  coffee  sudo  hack  secret  clear  exit',
  whoami: () =>
    'John Champion — software developer, private pilot, lifelong learner.',
  ls: () => 'posts/  about/  contact/',
  pwd: () => '/home/johnchampion.dev',
  projects: () =>
    'daily-verses  verses.johnchampion.dev\ndaily-story   dailystory.page\nonetimechat   onetimechat.app\nchess         webchess.app',
  cd: changeSection,
  faith: () =>
    randomItem([
      '"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." — Romans 6:23',
      '"I can do all things through Christ who strengthens me." — Philippians 4:13',
      '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." — John 3:16',
      '"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths." — Proverbs 3:5-6',
    ]),
  sudo: () =>
    randomItem([
      "Nice try, but you're not root here.",
      "Permission denied. You're not in the sudoers file. This incident will be reported.",
      'With great power comes great responsibility. Access denied.',
    ]),
  coffee: () =>
    randomItem([
      'Compiling... just kidding, coffee is ready ☕',
      'Coffee.exe is running... Productivity level: Maximum',
      '☕ while (true) { drink(coffee); code(); }',
    ]),
  joke: () =>
    randomItem([
      'Why do programmers prefer dark mode? Because light attracts bugs.',
      "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
      'A SQL query walks into a bar, walks up to two tables and asks: "Can I join you?"',
      'Why do pilots and programmers get along? Both know the importance of avoiding crashes.',
      "There are 10 types of people: those who understand binary and those who don't.",
    ]),
  quote: () =>
    randomItem([
      '"The best way to predict the future is to invent it." — Alan Kay',
      '"First, solve the problem. Then, write the code." — John Johnson',
      '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
      '"A good landing is one you can walk away from. A great landing is one where you can use the plane again." — Aviation wisdom',
    ]),
  hack: () =>
    randomItem([
      "ACCESS DENIED\nJust kidding, I see what you're trying to do.",
      "Hacking in progress...\n[████████████] 100%\nJust kidding, this isn't Mr. Robot.",
      "Nice try, Neo. But this isn't the Matrix you're looking for.",
    ]),
  secret: () =>
    'You found the secret! Curious minds make great developers. Keep exploring.',
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

function changeSection(sectionName) {
  if (!sectionName) return 'usage: cd [posts|about|contact]'
  const target = TERMINAL_SECTIONS[sectionName.toLowerCase().replace(/\/$/, '')]
  if (!target) return `cd: no such section: ${sectionName}`
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' })
  return `navigating to ${sectionName}...`
}

function respondToCommand(command) {
  const [name, ...args] = command.split(/\s+/)
  const respond = TERMINAL_RESPONSES[name]
  return respond
    ? respond(args.join(' '))
    : `command not found: ${command} — try 'help'`
}

function createTerminalInputLine() {
  const { line, typed } = createTerminalCommandLine()
  line.classList.add('terminal-input-line')
  const input = document.createElement('input')
  input.className = 'terminal-input'
  input.type = 'text'
  input.autocomplete = 'off'
  input.spellcheck = false
  input.setAttribute('autocapitalize', 'off')
  input.setAttribute('aria-label', 'Terminal command')
  line.append(createTerminalCursor(), input)
  return { line, typed, input }
}

function initInteractiveTerminal(terminal) {
  const screen = terminal.querySelector('[data-terminal-screen]')
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const intro = createTerminalIntro(screen, { animate: !prefersReducedMotion })
  const inputLine = createTerminalInputLine()

  function appendBeforeInput(line) {
    screen.insertBefore(line, inputLine.line)
    screen.scrollTop = screen.scrollHeight
  }

  function echoCommand(command) {
    const { line, typed } = createTerminalCommandLine()
    typed.textContent = command
    appendBeforeInput(line)
  }

  function clearScreen() {
    ;[...screen.children]
      .filter((line) => line !== inputLine.line)
      .forEach((line) => line.remove())
  }

  function resetInput() {
    inputLine.input.value = ''
    inputLine.typed.textContent = ''
  }

  function run(rawCommand) {
    const command = rawCommand.trim()
    if (command === 'clear') return clearScreen()
    if (command === 'exit' || command === 'quit') return inputLine.input.blur()
    echoCommand(command)
    if (command) appendBeforeInput(createTerminalOutputLine(respondToCommand(command)))
  }

  async function activate() {
    intro.finishNow()
    await intro.finished
    terminal.scrollIntoView({ behavior: 'smooth', block: 'center' })
    inputLine.input.focus({ preventScroll: true })
  }

  inputLine.input.addEventListener('input', () => {
    inputLine.input.value = inputLine.input.value.replace(/[~`]/g, '')
    inputLine.typed.textContent = inputLine.input.value
  })

  inputLine.input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') inputLine.input.blur()
    if (event.key !== 'Enter') return
    run(inputLine.input.value)
    resetInput()
  })

  terminal.addEventListener('click', activate)
  document
    .querySelectorAll('[data-terminal-trigger]')
    .forEach((trigger) => trigger.addEventListener('click', activate))

  intro.finished.then(() => screen.append(inputLine.line))
  if (window.location.hash === '#open-terminal') activate()
}

document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.querySelector('[data-interactive-terminal]')
  if (terminal) initInteractiveTerminal(terminal)
})
