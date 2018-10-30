import animateScrollTo from 'animated-scroll-to';

// nav
const navBtns = document.querySelectorAll('.header__nav-link');

navBtns[0].addEventListener('click', () => {
    animateScrollTo(document.getElementById('section-about'));
});

navBtns[1].addEventListener('click', () => {
    animateScrollTo(document.getElementById('section-skill'));
});

navBtns[2].addEventListener('click', () => {
    animateScrollTo(document.getElementById('section-work'));
});

navBtns[3].addEventListener('click', () => {
    animateScrollTo(document.getElementById('section-contact'));
});

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