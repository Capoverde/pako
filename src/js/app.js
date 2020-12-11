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
  // autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
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

  // let start = 0
  // let end = [$('.num1'), $('.num2'), $('.num3')].html()
  // let speed = 50

  // setInterval(function () {
  //   if (start < end) {
  //     start++
  //   }
  //   $('.num1').html(start)
  // }, speed)


  // smooth scroll to section:

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
