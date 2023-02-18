function firstSlider() {
  const blockContainer = document.getElementById('blockContainer')
  const blockWrapper = document.getElementById('blockWrapper')
  const blocks = document.querySelectorAll('.section-2__sub-section-1__block')
  const blocksArray = [...blocks]
  const screenWidth = window.innerWidth

  if ((screenWidth < 1440 && screenWidth >= 1024) || screenWidth <= 768) {
    blockContainer.classList.add(
      'swiper',
      'mySwiper',
      'swiper-initialized',
      'swiper-horizontal',
      'swiper-backface-hidden'
    )
    blockWrapper.classList.add('swiper-wrapper')
    blocksArray.forEach((block) =>
      block.classList.add('swiper-slide', 'swiper-slide-active')
    )
    if (screenWidth < 1440 && screenWidth >= 1024) {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
      })
    } else if (screenWidth <= 768) {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
      })
    }
  } else if (
    screenWidth >= 1440 ||
    (screenWidth < 1024 && screenWidth >= 768)
  ) {
    blockContainer.classList.remove(
      'swiper',
      'mySwiper',
      'swiper-initialized',
      'swiper-horizontal',
      'swiper-backface-hidden'
    )
    blockContainer.classList.remove('mySwiper')
    blockWrapper.classList.remove('swiper-wrapper')
    blocksArray.forEach((block) =>
      block.classList.remove('swiper-slide', 'swiper-slide-active')
    )

    swiper.destroy()
  }
}

window.addEventListener('resize', () => {
  firstSlider()
})

firstSlider()
