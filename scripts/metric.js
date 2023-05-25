const burgerTrigger = document.querySelector('.burger__trigger');
const burgerMenu = document.querySelector('.burger');

const delay = () => {setTimeout(showBurgerMenu, 500)}

burgerTrigger.addEventListener('click', showBurgerMenu);
burgerMenu.addEventListener('click', delay);

function showBurgerMenu() {
    burgerMenu.classList.toggle('active')
}

AOS.init();
