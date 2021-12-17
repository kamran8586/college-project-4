const menu = document.getElementById('menu');
const menu_items = document.getElementById('menu-items');
menu.addEventListener('click', (a) => {
    console.log(a);
    menu_items.classList.toggle('show-menu');
});