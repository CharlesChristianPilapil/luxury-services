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

// benefits

const benefitNav = document.querySelector('.benefits-nav');
const closeBenefits = document.querySelector('#close-benefits');
const openBenefits = document.querySelector('.benefits-lg');

openBenefits.addEventListener('click', () => {
  benefitNav.classList.add('active');
  document.body.classList.toggle('no-scroll');
});

closeBenefits.addEventListener('click', () => {
  benefitNav.classList.remove('active');
  document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', (el) => {
  if(el.target == benefitNav && benefitNav.classList.contains('active')) {
    document.body.classList.toggle('no-scroll');
    benefitNav.classList.remove('active');
  }
});



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





// const header = document.querySelector('header');
// const bottomNav = document.querySelector('.bottom-nav');

// const stickyNav = (e) => {
//   const [el] = e;

//   if(!el.isIntersecting) {
//     bottomNav.style.position='fixed';
//     bottomNav.style.top='0';
//     bottomNav.style.bottom='auto';
//     console.log(`check`);
//   }

//   else {
//     bottomNav.style.position='absolute';
//     bottomNav.style.top='auto';
//     bottomNav.style.bottom='0';
//   }
// }

// const headerObserver = new IntersectionObserver
//   (stickyNav, {
//     root: null,
//     threshold: 0,
//     rootMargin: '-60px',
//   }
// );

// headerObserver.observe(header);



const header = document.querySelector('header');
const bottomNav = document.querySelector('.bottom-nav');
const topNav = document.querySelector('.top-nav-head');


let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
let isNavSticky = false;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    stickNavs();
  } else {
    returnNav();
  }
};

const stickNavs = () => {
  bottomNav.style.position = 'fixed';
  bottomNav.style.top = '0';
  bottomNav.style.bottom = 'auto';

  topNav.style.position = 'fixed';
  topNav.style.top = '0';
  topNav.style.backgroundColor = 'var(--dark)';
  topNav.style.height = '80px';
  isNavSticky = true;
}

const returnNav = () => {
  bottomNav.style.position = 'absolute';
  bottomNav.style.top = 'auto';
  bottomNav.style.bottom = '0';
  bottomNav.style.transform = 'translateY(0)';

  topNav.style.backgroundColor = 'transparent';
  topNav.style.height = '70px';
  topNav.style.position = 'relative';
  isNavSticky = false;
}


const handleScroll = () => {
  if (isNavSticky) {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

    if(scrollDirection === 'up') {
      bottomNav.style.transform = 'translateY(80px)';
      topNav.style.transform = 'translateY(0)';
    }

    else {
      bottomNav.style.transform = 'translateY(0)';
      topNav.style.transform = 'translateY(-70px)';
    }

    lastScrollTop = currentScrollTop;
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-60px',
});

headerObserver.observe(header);

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);



// animation on scroll 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if(entry.isIntersecting) {
      entry.target.classList.add('animate');
    }

    else {
      entry.target.classList.remove('animate');
    }

  });
});

const lazyLoad = document.querySelectorAll('.lazy-load');
lazyLoad.forEach(el => observer.observe(el))