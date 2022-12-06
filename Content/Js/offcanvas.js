const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');
const offcanvasMenu = document.getElementById('menu');

openbtn.addEventListener('click', function showOffcanvas() {
    offcanvasMenu.classList.add('offcanvas-menu-active');
});
closebtn.addEventListener('click', function hideOffcanvas() {
    offcanvasMenu.classList.remove('offcanvas-menu-active');
});