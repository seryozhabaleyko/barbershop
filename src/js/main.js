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

document.addEventListener('DOMContentLoaded', () => {
    mobile();
});
