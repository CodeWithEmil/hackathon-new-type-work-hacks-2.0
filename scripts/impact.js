// Get all impact items and overlay elements
const impactItems = document.querySelectorAll(".impact-item");
const overlay = document.querySelector(".impact-overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayDescription = document.getElementById("overlay-description");

// Add event listener for clicking on grid items
impactItems.forEach((item) => {
   item.addEventListener("click", () => {
      // Get data attributes from the clicked item
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");
      const background = item.getAttribute("data-background");

      // Update the overlay content
      overlay.style.backgroundImage = background;
      overlayTitle.textContent = title;
      overlayDescription.textContent = description;

      // Show the overlay by adding the active class
      overlay.classList.add("active");
   });
});

// Add event listener for clicking on the overlay background to go back
overlay.addEventListener("click", (e) => {
   // Check if the clicked element is the overlay itself, not the text content
   if (e.target === overlay) {
      // Hide the overlay by removing the active class
      overlay.classList.remove("active");
   }
});
