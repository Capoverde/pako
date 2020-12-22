
const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.page__nav-list')
const logo = document.querySelector('#Group_3')
console.log(logo)
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
const mediaQuery = window.matchMedia('(max-width: 992px)')

const navChange = () => {
  window.addEventListener('scroll', e => {
    e.preventDefault();
    (document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 100)
      ? myNav.style.padding = '10px 20%' : myNav.style.padding = '20px 20%'
    if (window.screen.width <= 992 && window.screen.height <= 768) {
      myNav.style.padding = '20px 10%'
    }
  })
}

const logoChange = () => {
  window.addEventListener('scroll', e => {
    console.log('scrolling......')
    e.preventDefault();
    (document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 100)
      ? logo.style.height = '25px' : logo.style.height = '40px'
  })
}
export { navChange, logoChange }
