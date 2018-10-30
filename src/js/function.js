const scrollToElement = require('scroll-to-element');

// nav
const navBtns = document.querySelectorAll('.header__nav-link');

navBtns[0].addEventListener('click', () => {
    scrollToElement('.about');
})
navBtns[0].addEventListener('touchstart', () => {
    scrollToElement('.about');
})

navBtns[1].addEventListener('click', () => {
    scrollToElement('.skill');
})
navBtns[1].addEventListener('touchstart', () => {
    scrollToElement('.skill');
})

navBtns[2].addEventListener('click', () => {
    scrollToElement('.work');
})
navBtns[2].addEventListener('touchstart', () => {
    scrollToElement('.work');
})

navBtns[3].addEventListener('click', () => {
    scrollToElement('.contact');
})
navBtns[3].addEventListener('touchstart', () => {
    scrollToElement('.contact');
})



// header
window.addEventListener('scroll', function() {
    const top = this.pageYOffset;
    const header = document.querySelector('.header__nav');

    if (top > 80) {
        header.classList.add('header__nav-fixed');
    } else if (top === 0) {
        header.classList.remove('header__nav-fixed');
    }
});