const textEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

textEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMenuMobile);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}

function toggleMenuMobile(){
    menuMobile.classList.toggle('oculto');
}