import "./image-slider.js";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
         behavior: "smooth",
      });
   });
});

// Reveal content on scroll
window.addEventListener("scroll", function () {
   const reveals = document.querySelectorAll(".reveal");

   reveals.forEach((reveal) => {
      if (isInViewport(reveal)) {
         reveal.classList.add("active");
      }
   });
});

function isInViewport(element) {
   const rect = element.getBoundingClientRect();
   return rect.top < window.innerHeight && rect.bottom >= 0;
}
