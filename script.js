"Use strict";
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modalMenu = document.querySelector(".modal-menu");

hamburgerMenu.addEventListener("click", function () {
  modalMenu.classList.toggle("hidden");
});
