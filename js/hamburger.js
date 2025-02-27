const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navigation-links");
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
