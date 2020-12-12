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
  spaceBetween: 20,
  arrows: true,
  loop: true,
  // autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

var swiper = new Swiper('.swiper-opinion-container', {
  slidesPerView: 2,
  spaceBetween: 20,
  arrows: true,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection())
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

  // Add smooth scrolling to all links
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
})
