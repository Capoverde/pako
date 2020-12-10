import '../scss/app.scss'
// import Swiper JS
// import Swiper from 'swiper'
// import Swiper styles
// import 'swiper/swiper-bundle.css'
/* Demo JS */
import './nav.js'

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
  slidesPerView: 3,
  spaceBetween: 30,
  arrows: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
