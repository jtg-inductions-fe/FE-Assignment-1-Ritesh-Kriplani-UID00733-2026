import '../styles/main.scss';

/**
 * Toggles the mobile category dropdown menu when the hamburger icon is clicked.
 * Manages aria-expanded for accessibility and closes on outside click / Escape key.
 */ const menuToggle = document.querySelector('.header__menu-toggle');
const menuIcon = menuToggle.querySelector('.header__icon');
const dropdown = document.getElementById('headerDropdown');

const ICON_CLOSED = '/assets/icons/menu.svg';
const ICON_OPEN = '/assets/icons/menu-aberto.svg';

function closeDropdown() {
    dropdown.hidden = true;
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuIcon.src = ICON_CLOSED;
}

function openDropdown() {
    dropdown.hidden = false;
    menuToggle.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuIcon.src = ICON_OPEN;
}

menuToggle.setAttribute('aria-expanded', 'false');

menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdown.hidden ? openDropdown() : closeDropdown();
});

document.addEventListener('click', (event) => {
    if (!dropdown.hidden && !dropdown.contains(event.target)) {
        closeDropdown();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dropdown.hidden) {
        closeDropdown();
        menuToggle.focus();
    }
});
