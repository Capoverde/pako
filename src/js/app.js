import '../scss/app.scss'
// import Swiper JS
// import Swiper from 'swiper'
// import Swiper styles
// import 'swiper/swiper-bundle.css'
/* Demo JS */
import '../../node_modules/waypoints/src/waypoint'
import $ from 'jquery'
// import 'aos'
// import '../../node_modules/aos/dist/aos.js'
import { navChange, logoChange, contactBtnChange } from './nav.js'

window.$ = $
navChange()
logoChange()
contactBtnChange()

/* Your JS Code goes here */

// ######### vanilla ########## //

// ---- swiper slider:

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  arrows: true,
  loop: true,
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

})

var swiper1 = new Swiper('.swiper-opinion-contianer', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})

// ---- counter-up:

const counters = document.querySelectorAll('.counter')
const speed = 6000

counters.forEach(counter => {
  const updCount = () => {
    const target = counter.getAttribute('data-target')
    const count = +counter.innerText

    const score = target / speed

    if (count < target) {
      counter.innerText = count + Math.ceil(score)
      setTimeout(updCount, 2)
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

  // smooth scroll to section:

  $('a').on('click', function (event) {
    $('.page__nav-list').removeClass('navOpen')
    $('.menu-btn').removeClass('open')

    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash
      })
    } // End if
  })

  console.log($('page__nav').height())
})
