const burgerMenu = document.getElementById('burger-menu');
const menuList = document.getElementById('menu-list');

burgerMenu.addEventListener('click', () => {
    menuList.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});