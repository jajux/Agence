const HamburgerMenu = document.querySelector('.btn-burger');
const Nav = document.querySelector('.nav-left');
const NavLinks = document.querySelector('.nav-menu-item');
const Line = document.querySelector('.cont-line');

HamburgerMenu.addEventListener('click', ()=> {
    Line.classList.toggle('line-active');
})