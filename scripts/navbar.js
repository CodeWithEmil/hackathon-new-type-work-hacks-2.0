window.addEventListener("scroll", function () {
   var divisor = document.querySelector(".divisor");
   var title = divisor.querySelector(".legend");
   var navLinks = divisor.querySelector(".nav-links");

   // Get the position of the divisor section relative to the viewport
   var divisorPosition = divisor.getBoundingClientRect().top;

   // Check if the divisor has reached the top of the viewport
   if (divisorPosition <= 0) {
      // Add sticky navbar class to transform into the navbar
      divisor.classList.add("sticky-nav");
      navLinks.style.display = "flex"; // Show the navbar links
      title.style.fontSize = "0"; // Hide the title text
      title.style.visibility = "hidden"; // Hide the title text
   } else if (window.scrollY <= divisor.offsetTop) {
      // Remove sticky navbar class when scrolling back to the original section
      divisor.classList.remove("sticky-nav");
      navLinks.style.display = "none"; // Hide the navbar links
      title.style.fontSize = "2rem"; // Show the title text
      title.style.visibility = "visible"; // Ensure title is visible again
   }
});
