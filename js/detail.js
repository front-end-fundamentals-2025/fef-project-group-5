document.addEventListener("DOMContentLoaded", function () {
  const smallImages = document.querySelectorAll("#small-img");
  const overlay = document.getElementById("image-overlay");
  const overlayImg = document.getElementById("overlay-img");
  const closeBtn = document.querySelector(".close-btn");

  smallImages.forEach((img) => {
    img.addEventListener("click", function () {
      overlay.style.display = "flex";
      overlayImg.src = this.src;
    });
  });

  // Closes overlay when somebody clicks outside the image or close button
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target === closeBtn) {
      overlay.style.display = "none";
    }
  });
});
