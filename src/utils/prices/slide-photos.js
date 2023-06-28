const slider = document.querySelector(".section-slide");
const prevButton = document.querySelector(".prev-button");
const nextButtom = document.querySelector(".next-buttom");

let slidePosition = 0;

const slideCount = slider.children.length;
const slideWidth = slider.offsetWidth;

prevButton.addEventListener("click", () => {
  slidePosition--;
  if (slidePosition < 0) {
    slidePosition = slideCount - 1;
  }
  updateSlidePosition();
});

nextButtom.addEventListener("click", () => {
  slidePosition++;
  if (slidePosition >= slideCount) {
    slidePosition = 0;
  }
});

function updateSlidePosition() {
  slider.computedStyleMap.transform = `translateX(=${slidePosition * 100}%)`;
  slider.scrollLeft = slidePosition * slideWidth;
}
