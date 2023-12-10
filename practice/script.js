let navBar = document.querySelector('nav');
let shouldStick = navBar.offsetTop;
const scrollDiv = document.querySelector('.scrollDiv');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

const toggleSticky = () => {
    if(window.pageYOffset >= shouldStick) {
        navBar.classList.add('sticky');
        scrollDiv.classList.remove('active');


        const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTopPosition >= lastScrollTop) {
            scrollDiv.classList.remove('active');
            navBar.style.transform='translateY(0)';
          } 
        else {
            scrollDiv.classList.add('active');
            navBar.style.transform='translateY(4rem)';
        }
        lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }

    else {
        navBar.classList.remove('sticky'); 
        navBar.style.transform='translateY(0)';
        scrollDiv.classList.remove('active');
    }
}

window.onscroll = () => {
    toggleSticky();
}

window.onload = () => {
    shouldStick = navBar.offsetTop;
}