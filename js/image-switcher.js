function padToTwoDigits(number) {
  return String(number).padStart(2, '0')
}

function renderSwitcherCaption(captionElement, option) {
  captionElement.replaceChildren()
  const { captionTitle, caption } = option.dataset
  if (captionTitle) {
    const title = document.createElement('strong')
    title.textContent = `${captionTitle}: `
    captionElement.append(title)
  }
  captionElement.append(caption || '')
}

function showSwitcherOption(switcher, options, selectedIndex) {
  const selected = options[selectedIndex]
  const image = switcher.querySelector('[data-switcher-image]')
  const caption = switcher.querySelector('[data-switcher-caption]')
  const counter = switcher.querySelector('[data-switcher-counter]')
  const address = switcher.querySelector('[data-switcher-address]')

  image.src = selected.dataset.image
  image.alt = selected.dataset.alt || ''
  if (caption) renderSwitcherCaption(caption, selected)
  if (address && selected.dataset.address) address.textContent = selected.dataset.address
  if (counter) {
    counter.textContent = `${padToTwoDigits(selectedIndex + 1)} / ${padToTwoDigits(options.length)}`
  }
  options.forEach((option, index) =>
    option.setAttribute('aria-pressed', String(index === selectedIndex)),
  )
}

function initImageSwitcher(switcher) {
  const options = [...switcher.querySelectorAll('[data-switcher-option]')]
  options.forEach((option, index) =>
    option.addEventListener('click', () =>
      showSwitcherOption(switcher, options, index),
    ),
  )
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-image-switcher]').forEach(initImageSwitcher)
})
