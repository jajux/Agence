const hamburgerMenu = document.querySelector('.btn-burger');
const nav = document.querySelector('.nav-left');
const navLinks = document.querySelector('.nav-menu-item');
const line = document.querySelector('.cont-burger');

hamburgerMenu.addEventListener('click', ()=> {
    
    line.classList.toggle('line-active');
    nav.classList.toggle('menu-visible');
})

if (window.matchMedia('(max-width:1300px)')) {

    navLinks.forEach(item => {

        item.addEventListener('click', ()=> {
            
            nav.classList.toggle('menu-visible');
            line.classList.toggle('line-active');
        })
    })
}
    