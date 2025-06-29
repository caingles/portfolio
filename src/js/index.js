window.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    const mobileNavigationMenu = document.querySelector('#mobile-navigation-menu');

    if (mobileNavigationMenu && mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileNavigationMenu.classList.toggle('-active');
            mobileMenu.classList.toggle('-close');
        });
    }
})