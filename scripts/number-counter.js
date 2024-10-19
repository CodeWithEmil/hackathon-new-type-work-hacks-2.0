function incrementCounter(element, speed) {
   if (!element.classList.contains("completed")) {
      let startCount = parseInt(element.textContent, 10) || 0;
      let targetCount = parseInt(element.getAttribute("data-num"), 10);

      if (isNaN(targetCount)) {
         console.error("Invalid target count");
         return;
      }

      let count = startCount;
      let increment = (targetCount - startCount) / (speed / 16);

      function updateCounter() {
         count += increment;
         if (count < targetCount) {
            element.textContent = Math.floor(count)
               .toString()
               .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            requestAnimationFrame(updateCounter);
         } else {
            element.textContent = targetCount
               .toString()
               .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            element.classList.add("completed");
         }
      }

      requestAnimationFrame(updateCounter);
   }
}

function isElementInViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
         (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

document.addEventListener("DOMContentLoaded", function () {
   const targetElements = document.querySelectorAll(
      ".container-number-scroll .target"
   );

   function checkIfInView() {
      targetElements.forEach(function (targetElement) {
         if (isElementInViewport(targetElement)) {
            incrementCounter(targetElement, 2000);
         }
      });
   }

   // Check if the elements are already in the viewport on load
   checkIfInView();

   // Add scroll event listener
   window.addEventListener("scroll", checkIfInView);
});
