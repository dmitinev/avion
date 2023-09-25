import '../css/style.scss'

const burgerBtn = document.querySelector(".header__burger");
const navSection = document.querySelector(".header__navigation");

function burgerHandler() {
  navSection.classList.toggle("header__navigation--active");
  burgerBtn.classList.toggle("header__burger--active");
}

burgerBtn.addEventListener("click", burgerHandler)

