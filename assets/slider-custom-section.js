document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");

  let index = 0;

  const firstSlideClone = slides[0].cloneNode(true);
  slider.appendChild(firstSlideClone);

  function moveSlide() {
    index++;

    slider.style.transition = "transform 0.8s ease";
    slider.style.transform = "translateX(-" + index * 100 + "%)";

    if (index === slides.length) {
      setTimeout(function () {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0%)";
        index = 0;
      }, 800);
    }
  }

  setInterval(moveSlide, 3000);
});
