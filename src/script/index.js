import '../styles/main.scss';
import { initDropdown } from './modules/navigation.js';
import { initMobileMenu } from './modules/MoblieMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    initDropdown();
    initMobileMenu();
});
