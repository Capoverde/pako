
const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.page__nav-list')
const logo = document.querySelector('page__nav-logo');
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
      ? myNav.style.padding = '10px 20%' : myNav.style.padding = '20px 20%'
    // logo.classList.add('changeLogo') : logo.classList.add('changeLogo');
  })
}

export { navChange }
