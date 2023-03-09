const textEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

textEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
}