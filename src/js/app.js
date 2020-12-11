import '../scss/app.scss'
// import Swiper JS
// import Swiper from 'swiper'
// import Swiper styles
// import 'swiper/swiper-bundle.css'
/* Demo JS */
import '../../node_modules/waypoints/src/waypoint'
import $ from 'jquery'
import { navChange } from './nav.js'

window.$ = $
navChange()

/* Your JS Code goes here */

// ######### vanilla ########## //

// ---- slider:

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

// ---- counter-up:

const counters = document.querySelectorAll('.counter')
const speed = 2000

counters.forEach(counter => {
  const updCount = () => {
    const target = counter.getAttribute('data-target')
    const count = +counter.innerText

    const score = target / speed

    if (count < target) {
      counter.innerText = count + score
      setTimeout(updCount, 1)
    } else {
      counter.innerText = target
    }
  }
  updCount()
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

  // let start = 0
  // let end = [$('.num1'), $('.num2'), $('.num3')].html()
  // let speed = 50

  // setInterval(function () {
  //   if (start < end) {
  //     start++
  //   }
  //   $('.num1').html(start)
  // }, speed)
})
