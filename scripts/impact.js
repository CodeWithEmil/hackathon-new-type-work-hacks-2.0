// Select all impact items
const impactItems = document.querySelectorAll(".impact-item");

// Images for the corresponding sections
/*const imageFiles = {
   impact4them: [
      "../images/4impact/4them/IMG_2833.JPG",
      "../images/4impact/4them/IMG_3594.JPG",
      "../images/4impact/4them/IMG_3697.JPG"
   ],
   impact4her: [
      "../images/4impact/4her/IMG_3975.JPG",
      "../images/4impact/4her/IMG_4331.JPG",
      "../images/4impact/4her/IMG_4653.JPG",
   ],
   impact4all: [
      "../images/4impact/4all/IMG_7371.JPG",
      "../images/4impact/4all/IMG_7371.JPG",
      "../images/4impact/4all/IMG_7371.JPG",
   ],
   impact4us: [
      "../images/4impact/4them/IMG_3884.JPG",
      "../images/4impact/4them/IMG_4152.JPG",
   ],
};*/

impactItems.forEach((item) => {
   item.addEventListener('mouseenter', () => {
      const relatedImages = item.querySelectorAll('.replacement-image');

      // Hide all other images
      impactItems.forEach((otherItem) => {
         if (otherItem !== item) {
            otherItem.querySelector('.impact-replacement-images').style.display = 'flex'; // Show replacement images
            const otherImages = otherItem.querySelectorAll('.replacement-image');
            otherImages.forEach(image => {
               image.style.opacity = '0'; // Fade out other images
            });
         }
      });

      // Show related images
      relatedImages.forEach(image => {
         image.style.opacity = '1'; // Fade in related images
      });
   });

   item.addEventListener('mouseleave', () => {
      // Reset other images
      impactItems.forEach((otherItem) => {
         const otherImages = otherItem.querySelectorAll('.replacement-image');
         otherImages.forEach(image => {
            image.style.opacity = '0'; // Fade out other images
         });
      });
   });
});
