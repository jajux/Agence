// hamburgerMenu activation
const hamburgerMenu = document.querySelector('.btn-burger');
const nav = document.querySelector('.nav-left');
const navLinks = document.querySelectorAll('.nav-menu-item');
const line = document.querySelector('.cont-burger');

hamburgerMenu.addEventListener('click', () => {

    line.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

// Toggle menu media under 1300px
if (window.matchMedia('(max-width: 1300px)')) {

    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            line.classList.toggle('active');
        })
    })

}


