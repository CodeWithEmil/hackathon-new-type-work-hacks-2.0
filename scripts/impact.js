const impactItems = document.querySelectorAll(".impact-item");

impactItems.forEach((item) => {
   item.addEventListener("mouseenter", () => {
      impactItems.forEach((otherItem) => {
         if (otherItem !== item) {
            otherItem.querySelector(".caption").style.opacity = "0";
            otherItem.querySelector("h2").style.opacity = "0";
            otherItem.querySelector(".impact-icon-container").style.opacity = "0";

            //Show background image
            otherItem.querySelector(".impact-background-image").style.opacity = "1";
         }
      });
   });

   item.addEventListener("mouseleave", () => {
      impactItems.forEach((otherItem) => {
         otherItem.querySelector(".caption").style.opacity = "1"; // Fade in caption
         otherItem.querySelector("h2").style.opacity = "1"; // Fade in title
         otherItem.querySelector(".impact-icon-container").style.opacity = "1";

         //Hide background image
         otherItem.querySelector(".impact-background-image").style.opacity =
            "0"; 
      });
   });
});
