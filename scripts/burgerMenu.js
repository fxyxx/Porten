const burgerBtn = document
  .getElementById('burger-btn')
  .addEventListener('click', () => {
    document.querySelector('.nav-bar__nav-menu').classList.toggle('open')
  })
