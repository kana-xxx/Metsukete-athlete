const hamburgerMenu = document.querySelector('.menu.on');
const hamburgerList = document.querySelector('.subList');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    hamburgerList.classList.toggle('active');
});