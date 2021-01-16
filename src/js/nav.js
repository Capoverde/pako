
const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.page__nav-list')
const contactBtn = document.querySelector('#contact-btn')
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
      ? myNav.style.padding = '12px 20%' : myNav.style.padding = '20px 20%'
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
      ? logo.setAttribute('style', 'height:25px; transition: height .45s') : logo.setAttribute('style', 'height:40px; transition: height .45s')
    if (window.screen.width <= 992 && window.screen.height <= 768) {
      logo.setAttribute('style', 'height:40px;')
    }
  })
}

const contactBtnChange = () => {
  window.addEventListener('scroll', e => {
    console.log('scrolling......')
    e.preventDefault();
    (document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 100)
      ? contactBtn.setAttribute('style', 'padding: 6px 24px; transition:padding .45s;') : contactBtn.setAttribute('style', 'padding: 8px 24px; transition:padding .45s;')
    // if (window.screen.width <= 992 && window.screen.height <= 768) {
    //   logo.setAttribute('style', 'height:40px;')
    // }
  })
}

// amoth scrool:

const links = document.querySelectorAll('.page__nav-list-item-link')



const clickHandler = e => {
  console.log('klik')
  document.querySelector('.page__nav-list').classList.remove('navOpen')
  document.querySelector('.menu-btn').classList.remove('open')

  e.preventDefault()
  const href = this.getAttribute('href')
  const offsetTop = document.querySelector(href).offsetTop - document.querySelector('.page__nav').clientHeight

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  })
}

for (const link of links) {
  link.addEventListener('click', clickHandler)
}

export { navChange, logoChange, contactBtnChange, clickHandler }
