
const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.page__nav-list')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    navList.classList.add('navOpen')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    navList.classList.remove('navOpen')
    menuOpen = false
  }
})

const myNav = document.querySelector('.page__nav')

const navChange = () => {
  window.addEventListener('scroll', e => {
    e.preventDefault();
    (document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 100)
      ? myNav.classList.add('nav-colored') : myNav.classList.remove('nav-colored')
  })
}

export { navChange }
