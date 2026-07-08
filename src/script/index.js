import { initDropdown } from './modules/navigation.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initLatestReleasesSlider } from './modules/latestreleasesslider.js';

// ==========================================
// SWIPER CAROUSEL INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
   
    initDropdown();
    initMobileMenu();
    initLatestReleasesSlider();
});
