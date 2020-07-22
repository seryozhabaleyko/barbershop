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
    const mySwiper = new Swiper('.quotes-container', {
        pagination: {
            el: '.quotes__pagination',
            clickable: true,
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mobile();
    initializeSwiper();
});

AOS.init();
