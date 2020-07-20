/*
 * Mobile
 */

function mobile() {
    const burger = document.getElementById('burger');
    const navbar = document.querySelector('.mobile');
    const nav = document.querySelector('.mobile nav');
    const ul = document.querySelector('.mobile nav ul');
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('open');
        ul.classList.toggle('show');
    });
}

function ready() {
    mobile();
}

document.addEventListener('DOMContentLoaded', ready, false);
