const btn = document.querySelector('.header__button');
const nav = document.querySelector('.header__inner');
const headerNav = document.querySelector('.header__nav');

btn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});
btn.addEventListener('click', () => {
    nav.classList.toggle('button-open');
});
