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

function initializeShuffle() {
    const Shuffle = window.Shuffle;
    const workContainer = document.querySelector('.work__container');
    const workSizer = workContainer.querySelector('.work__sizer');
    const workShuffle = new Shuffle(workContainer, {
        itemSelector: '.work__item',
        sizer: workSizer,
    });

    class Filters {
        constructor() {}
    }
}

const Shuffle = window.Shuffle;

const WorkShuffle = function (element) {
    this.colors = Array.from(document.querySelectorAll('.js-work-filter-buttons button'));

    this.shuffle = new Shuffle(element, {
        easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)', // easeOutQuart
        sizer: '.the-sizer',
    });

    this.filters = {
        colors: [],
    };

    this._bindEventListeners();
};

/**
 * Bind event listeners for when the filters change.
 */
WorkShuffle.prototype._bindEventListeners = function () {
    this._onColorChange = this._handleColorChange.bind(this);

    this.colors.forEach(function (button) {
        button.addEventListener('click', this._onColorChange);
    }, this);
};

/**
 * Get the values of each `active` button.
 * @return {Array.<string>}
 */
WorkShuffle.prototype._getCurrentColorFilters = function () {
    return this.colors
        .filter(function (button) {
            return button.classList.contains('active');
        })
        .map(function (button) {
            return button.getAttribute('data-value');
        });
};

/**
 * A color button was clicked. Update filters and display.
 * @param {Event} evt Click event object.
 */
WorkShuffle.prototype._handleColorChange = function (evt) {
    var button = evt.currentTarget;

    // Treat these buttons like radio buttons where only 1 can be selected.
    if (button.classList.contains('active')) {
        button.classList.remove('active');
    } else {
        this.colors.forEach(function (btn) {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    }

    this.filters.colors = this._getCurrentColorFilters();
    this.filter();
};

/**
 * Filter shuffle based on the current state of filters.
 */
WorkShuffle.prototype.filter = function () {
    if (this.hasActiveFilters()) {
        this.shuffle.filter(this.itemPassesFilters.bind(this));
    } else {
        this.shuffle.filter(Shuffle.ALL_ITEMS);
    }
};

/**
 * If any of the arrays in the `filters` property have a length of more than zero,
 * that means there is an active filter.
 * @return {boolean}
 */
WorkShuffle.prototype.hasActiveFilters = function () {
    return Object.keys(this.filters).some(function (key) {
        return this.filters[key].length > 0;
    }, this);
};

/**
 * Determine whether an element passes the current filters.
 * @param {Element} element Element to test.
 * @return {boolean} Whether it satisfies all current filters.
 */
WorkShuffle.prototype.itemPassesFilters = function (element) {
    var colors = this.filters.colors;
    var color = element.getAttribute('data-color');

    // If there are active color filters and this color is not in that array.
    if (colors.length > 0 && !colors.includes(color)) {
        return false;
    }

    return true;
};

document.addEventListener('DOMContentLoaded', () => {
    mobile();
    initializeSwiper();
    new WorkShuffle(document.querySelector('.js-work-container'));
});

AOS.init();
