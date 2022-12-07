const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');
const offcanvasMenu = document.getElementById('menu');
const menuLink = document.getElementsByClassName('menu-link');
const background = document.getElementById('background');

openbtn.addEventListener('click', function showOffcanvas(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('offcanvas-menu-active');
    background.classList.add('black-bg');
});
closebtn.addEventListener('click', function hideOffcanvas(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('offcanvas-menu-active');
    background.classList.remove('black-bg');
});
function hideOffcanvas() {
    offcanvasMenu.classList.remove('offcanvas-menu-active');
    background.classList.remove('black-bg');
};
