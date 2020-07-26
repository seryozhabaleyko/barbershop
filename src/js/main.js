/*
 * Mobile
 */

function mobile() {
    document.getElementById('burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.mobile nav').classList.toggle('open');
        document.querySelector('.mobile nav ul').classList.toggle('show');
    });
}

function initializeSwiper() {
    const mySwiper = new Swiper('.testimonial__container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.testimonial__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mobile();
    initializeSwiper();
});

AOS.init();
