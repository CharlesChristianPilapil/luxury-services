var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
});


// contacct
const contactPupUp = document.querySelectorAll('.contact-popup')
const contactWrapper = document.querySelector('.contact-us-wrapper');
const contactUs = document.querySelector('.contact-us');
const closeContact = document.getElementById('close-contact');


// side nav
const hambuerger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side-nav');
const closeNav = document.querySelector('#close-nav');
const navOverlay = document.querySelector('.nav-overlay');

const navContact = document.querySelector('.nav-contact')


navContact.addEventListener('click', () => {
  openContactFrmNav();
})



const openContactFrmNav = () => {
  contactUs.classList.add('active');
  sideNav.classList.remove('active-nav');
  navOverlay.classList.remove('active');
}


// contact 

contactPupUp.forEach((el, index) => {
  el.addEventListener('click', () => {
    contactUs.classList.add('active');
    document.body.classList.toggle('no-scroll');
  })
});

closeContact.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
  contactUs.classList.remove('active');
});

document.addEventListener('click', (el) => {
  if(el.target == contactUs && contactUs.classList.contains('active')) {
    document.body.classList.toggle('no-scroll');
    contactUs.classList.remove('active');
  }
});


// side nav

hambuerger.addEventListener('click', () => {
  sideNav.classList.add('active-nav');
  navOverlay.classList.add('active');
  document.body.classList.toggle('no-scroll');
});

closeNav.addEventListener('click', () => {
  sideNav.classList.remove('active-nav');
  navOverlay.classList.remove('active');
  document.body.classList.toggle('no-scroll');
})

document.addEventListener('click', (el) => {
  if(el.target == navOverlay && sideNav.classList.contains('active-nav')) {
    document.body.classList.toggle('no-scroll');
    navOverlay.classList.remove('active');
    sideNav.classList.remove('active-nav');
  }
});