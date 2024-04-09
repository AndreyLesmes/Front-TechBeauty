document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.close-menu');

    // Abre el menú al hacer clic en el botón de hamburguesa
    menuToggle.addEventListener('click', function() {
        menu.classList.add('show-menu');
    });

    // Cierra el menú al hacer clic en el botón de cierre
    closeMenu.addEventListener('click', function() {
        menu.classList.remove('show-menu');
    });
});
