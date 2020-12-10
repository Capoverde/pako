import '../scss/app.scss'
// import Swiper JS
// import Swiper from 'swiper'
// import Swiper styles
// import 'swiper/swiper-bundle.css'
/* Demo JS */
import './demo.js'

/* Your JS Code goes here */
// var mySwiper = new Swiper('.swiper-container', {
// Optional parameters
// loop: true,

// // If we need pagination
// pagination: {
//   // el: '.swiper-pagination'
// },

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev'
// }

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar'
// }
// })

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination'
  }
})
