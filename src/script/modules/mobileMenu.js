/* This initializes the mobile menu and handles toggle , outside click and escape instruction */

export function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const menuIcon = menuToggle?.querySelector('.header__icon');
    const dropdown = document.getElementById('headerDropdown');

    const Menu = '/assets/icons/menu.svg';
    const Frame = '/assets/icons/frame.svg';

    if (!menuToggle || !dropdown) return;

    function closeDropdown() {
        dropdown.hidden = true;
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.src = Menu;
    }

    function openDropdown() {
        dropdown.hidden = false;
        menuToggle.classList.add('is-active');
        menuToggle.setAttribute('aria-expanded', 'true');
        if (menuIcon) menuIcon.src = Frame;
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
}
