export function initDropdown() {
    const categoriesBtn = document.querySelector(
        '.header__nav-link--categorias',
    );
    const dropdownMenu = document.getElementById('categories-dropdown');

    if (!categoriesBtn || !dropdownMenu) return;

    categoriesBtn.addEventListener('click', (e) => {
        // Prevent click from immediately propagating to document
        e.stopPropagation();

        const isExpanded =
            categoriesBtn.getAttribute('aria-expanded') === 'true';

        // Toggle state
        categoriesBtn.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
            dropdownMenu.setAttribute('hidden', '');
        } else {
            dropdownMenu.removeAttribute('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (
            !categoriesBtn.contains(e.target) &&
            !dropdownMenu.contains(e.target)
        ) {
            categoriesBtn.setAttribute('aria-expanded', 'false');
            dropdownMenu.setAttribute('hidden', '');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'Escape' &&
            categoriesBtn.getAttribute('aria-expanded') === 'true'
        ) {
            categoriesBtn.setAttribute('aria-expanded', 'false');
            dropdownMenu.setAttribute('hidden', '');
            categoriesBtn.focus();
        }
    });
}
