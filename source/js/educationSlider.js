document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const upButton = document.getElementById("upButton");
  const downButton = document.getElementById("downButton");
  const sliderItems = document.querySelectorAll(".slider-item");

  let currentIndex = 0;
  downButton.hidden = true;
  upButton.hidden = false;
  upButton.addEventListener("click", function () {
    if (currentIndex < sliderItems.length - 1) {
      currentIndex++;
      updateSliderTransform();
      setTimeout(() => {
        downButton.hidden = false;
        upButton.hidden = true;
      }, 500);
    }
  });

  downButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderTransform();
      setTimeout(() => {
        downButton.hidden = true;
        upButton.hidden = false;
      }, 500);
    }
  });

  function updateSliderTransform() {
    const translateYValue = -currentIndex * 50 + "%";
    slider.style.transform = `translateY(${translateYValue})`;
    sliderItems.forEach((item, index) => {
      const isVisible = index === currentIndex;
      item.style.opacity = isVisible ? 1 : 0;
      item.style.pointerEvents = isVisible ? "auto" : "none";
      item.style.transition = isVisible ? "opacity 0.5s ease-in-out" : "";
    });
  }
});
