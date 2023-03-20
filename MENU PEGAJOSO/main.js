const menu = document.getElementById('main-menu');
const offsetTop = menu.offsetTop;

addEventListener('scroll', () => {
    // console.log(pageYOffset)
    console.log(menu.offsetTop)
    console.log(scrollY)
    if (scrollY > offsetTop) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});