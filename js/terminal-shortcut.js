function isTypingInField(element) {
  return (
    element.tagName === 'INPUT' ||
    element.tagName === 'TEXTAREA' ||
    element.isContentEditable
  )
}

function isTerminalShortcutKey(event) {
  return event.key === '~' || event.key === '`'
}

document.addEventListener('keydown', (event) => {
  if (!isTerminalShortcutKey(event) || isTypingInField(event.target)) return
  const trigger = document.querySelector('[data-terminal-trigger]')
  if (!trigger) return
  event.preventDefault()
  trigger.click()
})
