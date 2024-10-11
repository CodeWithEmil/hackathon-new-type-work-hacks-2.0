//HTML elements
const slides = document.querySelector(".js-image-slider-slides");
const prevEl = document.querySelector(".js-image-slider-prev");
const nextEl = document.querySelector(".js-image-slider-next");

//Event listeners
prevEl.addEventListener("click", () => {
   moveSlides(-1);
});

nextEl.addEventListener("click", () => {
   moveSlides(1);
});

//Code
let currentSliderIndex = 0;

function moveSlides(direction) {
   const totalSlides = slides.children.length;
   currentSliderIndex += direction;

   if (currentSliderIndex >= totalSlides) {
      currentSliderIndex = 0;
   } else if (currentSliderIndex < 0) {
      currentSliderIndex = totalSlides - 1;
   }

   slides.style.transform = `translateX(-${currentSliderIndex * 100}%)`;
}