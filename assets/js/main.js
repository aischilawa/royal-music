/**
* Template Name: Mentor - v4.9.1
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()




const menu = document.querySelector('#mobile-menu') 
 const menuLinks = document.querySelector('.navbar__menu') 
 const navLogo = document.querySelector('#navbar__logo')  
  
 // Display Mobile Menu 
 const mobileMenu = () => { 
     menu.classList.toggle('is-active'); 
     menuLinks.classList.toggle('active'); 
 }; 
  
 menu.addEventListener('click', mobileMenu); 
  
 // Show active menu when scrolling 
 const highlightMenu = () => { 
     const elem = document.querySelector('.highlight') 
     const homeMenu = document.querySelector('#home-page') 
     const aboutMenu = document.querySelector('#about-page') 
     const servicesMenu = document.querySelector('#services-page') 
     let scrollpos = window.scrollY; 
     // console.log(scrollpos); 
  
     // adds 'highlight' class to my menu items 
     if(window.innerWidth > 960 && scrollpos < 600) { 
         homeMenu.classList.add('highligth') 
         aboutMenu.classList.remove('highlight') 
         return 
     } else if (window.innerWidth > 960 && scrollpos < 1400) { 
         aboutMenu.classList.add('highligth'); 
         homeMenu.classList.remove('highligth'); 
         servicesMenu.classList.remove('highligth'); 
         return 
     } 
  
     else if (window.innerWidth > 960 && scrollpos < 2345) { 
         servicesMenu.classList.add('highligth') 
         aboutMenu.classList.remove('highligth') 
         return 
     } 
  
     if((elem && window.innerWidth < 960 && scrollpos <600) || elem) { 
         elem.classList.remove('highlight') 
     } 
 }; 
  
 window.addEventListener('scroll', highlightMenu) 
 window.addEventListener('click', highlightMenu) 
  
 // Close mobile Menu when clicking on a menu item 
 const hideMobileMenu = () => { 
     const menuBars = document.querySelector('.is-active') 
     if(window.innerWidth <= 768 && menuBars) { 
         menu.classList.toggle('is-active') 
         menuLinks.classList.remove('active') 
     } 
 } 
  
 menuLinks.addEventListener('click', hideMobileMenu); 
 navLogo.addEventListener('click', hideMobileMenu);