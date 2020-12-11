import '../scss/app.scss'
// import Swiper JS
// import Swiper from 'swiper'
// import Swiper styles
// import 'swiper/swiper-bundle.css'
/* Demo JS */
import $ from 'jquery'
import { navChange } from './nav.js'

window.$ = $
navChange()

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
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// ######### jQuery ########## //

$(function () {
  //  totop button scrolling

  if ($('#totop').length) {
    var scrollTrigger = 300 // px
    var backToTop = function () {
      var scrollTop = $(window).scrollTop()
      if (scrollTop > scrollTrigger) {
        $('#totop').addClass('showTop')
      } else {
        $('#totop').removeClass('showTop')
      }
    }
    backToTop()
    $(window).on('scroll', function () {
      backToTop()
    })
    $('#totop').on('click', function (e) {
      e.preventDefault()
      $('html,body').animate({
        scrollTop: 0
      }, 700)
    })
  }

  // counters:

  let start = 0;
  let end = $('.num').html();
  let speed = 50;

  setInterval(function () {
    if (start < end) {
      start++
    }
    $('.num').html(start);
  }, speed);
})
