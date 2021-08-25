var openSearch = document.querySelector('.open-search');
var closeSearch = document.querySelector('.header__search-close');
var headerSearch = document.querySelector('.header__search');
openSearch.onclick = function () {
    headerSearch.style.transform = 'translateY(0)';
};
closeSearch.onclick = function () {
    headerSearch.style.transform = 'translateY(-100%)';
};

// nav-mobi
// fas fa-times
var openNavMobi = document.querySelector('.open-bar-mobi');
var navbarMobi = document.querySelector('.navbar');
var iconNav = document.querySelector('.icon-nav');

openNavMobi.onclick = function (e) {
    navbarMobi.classList.toggle('open-clip-path');
    iconNav.classList.toggle('fa-times');
};

var sectionContainer = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.navbar__links');

window.onscroll = function () {
    navbarMobi.classList.remove('open-clip-path');
    iconNav.classList.remove('fa-times');
    sectionContainer.forEach((section) => {
        var topWindow = window.scrollY;
        var heightSection = section.offsetHeight;
        var topSection = section.offsetTop - 120;
        var id = section.getAttribute('id');
        if (topWindow >= topSection && topWindow < topSection + heightSection) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// slider
var swiper = new Swiper('.box-slider', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,
});

// slider-review
var swiper = new Swiper('.slider-review', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});

window.onload = () => {
    setInterval(() => {
        document.querySelector('.load-window').classList.add('fade-out');
    }, 2000);
};
