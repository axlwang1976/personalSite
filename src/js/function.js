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
window.addEventListener("scroll", function() {

    var top = this.scrollY;

    var verticalScroll = document.querySelector(".verticalScroll");

    console.log("Scroll X: " + top + "px");
});