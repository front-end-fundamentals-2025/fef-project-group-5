/*chat gpt used for guidance on how to write this code https://chatgpt.com/share/67bc794d-49a8-8003-9426-78d726121a28 along with https://www.reddit.com/r/learnjavascript/comments/me9kz9/checking_the_index_of_element_in_images_array/  */

const heroSection = document.querySelector(".hero");
const discoverBtn = document.querySelector(".discover-btn");
const images = ["../img/hero2.jpg", "../img/hero1.jpg", "../img/hero3.jpeg"];
let index = 0;

discoverBtn.addEventListener("mouseenter", () => {
  index = (index + 1) % images.length;
  heroSection.style.backgroundImage = `url(${images[index]})`;
});
