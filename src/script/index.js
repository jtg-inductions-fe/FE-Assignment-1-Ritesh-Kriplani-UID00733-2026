import { initDropdown } from './modules/navigation.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initLatestReleasesSlider } from './modules/latestreleasesslider.js';

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    initMobileMenu();
    initLatestReleasesSlider();
});
