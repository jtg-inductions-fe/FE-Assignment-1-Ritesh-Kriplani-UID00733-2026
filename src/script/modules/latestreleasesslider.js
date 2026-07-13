import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// initilizes the latest release slider with navigation , pagination and breakpoint
export function initLatestReleasesSlider() {
    const sliderEl = document.querySelector('.latest-releases__slider');

    if (!sliderEl) return;

    new Swiper(sliderEl, {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 24,
        initialSlide: 1,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
            },
        },
    });
}
