import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    // Open modal with clicked image
    window.openModal = function (image) {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");
      modal.style.display = "flex";
      modalImg.src = image.src;
    };
  
    // Close modal
    window.closeModal = function () {
      const modal = document.getElementById("imageModal");
      modal.style.display = "none";
    };
  });
  
