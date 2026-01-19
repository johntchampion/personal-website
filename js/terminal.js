// Interactive terminal input
const terminalWindow = document.querySelector('.terminal-window')
const terminalContent = document.querySelector('.terminal-content')
const terminalInputLine = document.querySelector('.terminal-input-line')
const terminalUserInput = document.querySelector('.terminal-user-input')
const terminalCursor = document.querySelector('.terminal-cursor')
let userInputText = ''

// Function to update cursor position
function updateCursorPosition() {
  const inputWidth = terminalUserInput.offsetWidth
  terminalCursor.style.left = inputWidth + 'px'
}

// Make terminal focusable
terminalWindow.setAttribute('tabindex', '0')

// Focus terminal when clicked
terminalWindow.addEventListener('click', () => {
  terminalWindow.focus()
})

// Helper function to scroll to page section
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return true
  }
  return false
}

// Helper function to get random item from array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to execute command
function executeCommand(command) {
  const trimmedCommand = command.trim()
  const [cmd, ...args] = trimmedCommand.split(' ')
  const fullArgs = args.join(' ')

  // Create a line showing the command that was entered
  const commandLine = document.createElement('div')
  commandLine.className = 'terminal-line'
  commandLine.innerHTML = `<span class="terminal-prompt">$</span> <span class="terminal-command">${trimmedCommand}</span>`
  terminalInputLine.parentNode.insertBefore(commandLine, terminalInputLine)

  // Handle clear command specially
  if (cmd === 'clear') {
    // Remove all lines except the input line
    const allLines = terminalContent.querySelectorAll(
      '.terminal-line:not(.terminal-input-line)',
    )
    allLines.forEach((line) => line.remove())
    userInputText = ''
    terminalUserInput.textContent = ''
    return
  }

  // Create response line
  const responseLine = document.createElement('div')
  responseLine.className = 'terminal-line'

  // Command responses
  let response = ''

  switch (cmd) {
    // Existing commands
    case 'whoami':
      response = 'John Champion'
      break

    case 'faith':
      const gospelResponses = [
        '"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." - Romans 6:23',
        '"I can do all things through Christ who strengthens me." - Philippians 4:13',
        '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." - John 3:16',
        '"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths." - Proverbs 3:5-6',
      ]
      response = randomItem(gospelResponses)
      break

    // Navigation commands
    case 'ls':
      response = `<span style="color: var(--color-secondary);">about/</span>  <span style="color: var(--color-secondary);">work/</span>  <span style="color: var(--color-secondary);">interests/</span>  <span style="color: var(--color-secondary);">contact/</span>`
      break

    case 'cd':
      const validSections = {
        about: '#about',
        work: '#work',
        interests: '#interests',
        contact: '#contact',
        '..': '#top',
      }
      if (!fullArgs) {
        response =
          'usage: cd [section]<br>available: about, work, interests, contact'
      } else if (validSections[fullArgs.toLowerCase()]) {
        if (scrollToSection(validSections[fullArgs.toLowerCase()])) {
          response = `navigating to ${fullArgs}...`
        } else {
          response = `cd: ${fullArgs}: No such section`
        }
      } else {
        response = `cd: ${fullArgs}: No such section`
      }
      break

    case 'pwd':
      response = '/home/johnchampion.dev'
      break

    // Help command
    case 'help':
      response = `Available commands:<br>
        <table style="width: 100%; border-spacing: 0; margin-left: 16px;">
          <tr><td style="padding: 2px 8px;">whoami</td><td style="padding: 2px 8px;">sudo</td><td style="padding: 2px 8px;">quote</td></tr>
          <tr><td style="padding: 2px 8px;">faith</td><td style="padding: 2px 8px;">exit</td><td style="padding: 2px 8px;">secret</td></tr>
          <tr><td style="padding: 2px 8px;">ls</td><td style="padding: 2px 8px;">quit</td><td style="padding: 2px 8px;">konami</td></tr>
          <tr><td style="padding: 2px 8px;">cd</td><td style="padding: 2px 8px;">coffee</td><td style="padding: 2px 8px;">hack</td></tr>
          <tr><td style="padding: 2px 8px;">pwd</td><td style="padding: 2px 8px;">joke</td><td style="padding: 2px 8px;">matrix</td></tr>
          <tr><td style="padding: 2px 8px;">contact</td><td style="padding: 2px 8px;">stackoverflow</td><td style="padding: 2px 8px;">clear</td></tr>
          <tr><td style="padding: 2px 8px;">help</td><td></td><td></td></tr>
        </table>`
      break

    // Fun/Easter egg commands
    case 'sudo':
      const sudoResponses = [
        "Nice try, but you're not root here.",
        "Permission denied. You're not in the sudoers file. This incident will be reported.",
        '[sudo] password for visitor: <br>Sorry, try again.',
        'With great power comes great responsibility. Access denied.',
      ]
      response = randomItem(sudoResponses)
      break

    case 'exit':
    case 'quit':
      response =
        'There is no escape. But you can <a href="#contact" style="color: var(--color-secondary);">reach out</a> if you\'d like.'
      break

    case 'coffee':
      const coffeeResponses = [
        'Compiling... just kidding, coffee is ready ☕',
        '☕ Brewing a fresh pot... Error: Too much coffee is never an error.',
        'Coffee.exe is running... Productivity level: Maximum',
        '☕ while(true) { drink(coffee); code(); }',
      ]
      response = randomItem(coffeeResponses)
      break

    case 'joke':
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs.',
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        'A SQL query walks into a bar, walks up to two tables and asks: "Can I join you?"',
        'Why do pilots and programmers get along? Both know the importance of avoiding crashes.',
        "There are 10 types of people: those who understand binary and those who don't.",
      ]
      response = randomItem(jokes)
      break

    case 'quote':
      const quotes = [
        '"The best way to predict the future is to invent it." - Alan Kay',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"A good landing is one you can walk away from. A great landing is one where you can use the plane again." - Aviation Wisdom',
        '"The only way to do great work is to love what you do." - Steve Jobs',
      ]
      response = randomItem(quotes)
      break

    case 'secret':
      response =
        '🎉 You found the secret! Curious minds make great developers. Keep exploring.'
      break

    case 'konami':
      response =
        '↑ ↑ ↓ ↓ ← → ← → B A [START]<br>Achievement unlocked: Konami Code Master 🎮'
      break

    case 'hack':
      const hackResponses = [
        "ACCESS DENIED<br>Just kidding, I see what you're trying to do... 😏",
        "Hacking in progress...<br>[████████████] 100%<br>Just kidding, this isn't Mr. Robot.",
        "Nice try, Neo. But this isn't the Matrix you're looking for.",
      ]
      response = randomItem(hackResponses)
      break

    // Default: command not found
    default:
      if (trimmedCommand !== '') {
        response = `bash: command not found: ${trimmedCommand}<br>Type 'help' for available commands.`
      }
  }

  if (response) {
    responseLine.innerHTML = `<span class="terminal-output">${response}</span>`
    terminalInputLine.parentNode.insertBefore(responseLine, terminalInputLine)
  }

  // Clear input
  userInputText = ''
  terminalUserInput.textContent = ''

  // Scroll to bottom
  terminalContent.scrollTop = terminalContent.scrollHeight
}

// Handle keyboard input
terminalWindow.addEventListener('keydown', (e) => {
  // Prevent default behavior for most keys
  if (e.key !== 'Tab') {
    e.preventDefault()
  }

  if (e.key === 'Backspace') {
    // Remove last character
    userInputText = userInputText.slice(0, -1)
  } else if (e.key === 'Enter') {
    // Execute command
    executeCommand(userInputText)
  } else if (e.key.length === 1) {
    // Add printable characters
    userInputText += e.key
  }

  // Update display
  terminalUserInput.textContent = userInputText
  updateCursorPosition()
})
