function initPhotoGallery(galleryId) {
  const gallery = document.getElementById(galleryId)
  if (!gallery) return
  const mainImg = gallery.querySelector('.photo-gallery-main-img')
  const thumbs = gallery.querySelectorAll('.photo-gallery-thumb')
  const caption = gallery.querySelector('.photo-gallery-caption')
  let current = 0
  let timer

  function show(index) {
    mainImg.classList.add('fading')
    setTimeout(() => {
      mainImg.src = thumbs[index].src
      mainImg.alt = thumbs[index].alt
      mainImg.classList.remove('fading')
    }, 400)
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index))
    if (caption) {
      caption.textContent = thumbs[index].dataset.caption || ''
    }
    current = index
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      clearInterval(timer)
      show(i)
    })
  })

  timer = setInterval(() => {
    show((current + 1) % thumbs.length)
  }, 7500)
}
