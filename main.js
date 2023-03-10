const textEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.shopping-cart-icon');
const productDetailAside = document.querySelector('.product-detail');

textEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMenuMobile);
shoppingCartIcon.addEventListener('click', toggleProductDetailAside);

function toggleDesktopMenu(){
    menuDesktop.classList.toggle('inactive');
    productDetailAside.classList.add('inactive');
}

function toggleMenuMobile(){
    menuMobile.classList.toggle('oculto');
    productDetailAside.classList.add('inactive');
}

function toggleProductDetailAside (){ 
    menuDesktop.classList.add('inactive');
    productDetailAside.classList.toggle('inactive');
    menuMobile.classList.add('oculto');
}