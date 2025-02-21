const heroSection = document.querySelector(".hero");
const discoverBtn = document.querySelector(".discover-btn");
const images = ["../img/hero1.jpg", "../img/hero2.jpg", "../img/hero3.jpeg"];
let index = 0;

discoverBtn.addEventListener("mouseenter", () => {
  index = (index + 1) % images.length;
  heroSection.style.backgroundImage = `url(${images[index]})`;
});
