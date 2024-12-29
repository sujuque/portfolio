import '../style.css';

// Lightbox Functionality
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
  
    const closeButton = document.createElement("span");
    closeButton.classList.add("lightbox-close");
    closeButton.innerHTML = "&times;";
    lightbox.appendChild(closeButton);
  
    const content = document.createElement("div");
    content.classList.add("lightbox-content");
    lightbox.appendChild(content);
  
    const items = document.querySelectorAll("[data-lightbox]");
  
    items.forEach(item => {
      item.addEventListener("click", () => {
        lightbox.classList.add("active");
  
        if (item.tagName === "IMG") {
          const img = document.createElement("img");
          img.src = item.src;
          content.innerHTML = "";
          content.appendChild(img);
        } else if (item.tagName === "VIDEO") {
          const video = document.createElement("video");
          video.src = item.querySelector("source").src;
          video.controls = true;
          video.autoplay = true;
          content.innerHTML = "";
          content.appendChild(video);
        }
      });
    });
  
    closeButton.addEventListener("click", () => {
      lightbox.classList.remove("active");
      content.innerHTML = "";
    });
  
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
        content.innerHTML = "";
      }
    });

    // Prevent right-click on images and videos
    document.addEventListener("contextmenu", (event) => {
      if (event.target.tagName === "IMG" || event.target.tagName === "VIDEO") {
          event.preventDefault();
      }
    });

    // Comic Book page turn
      const pages = document.querySelectorAll(".comic-page");
      let currentPageIndex = 0;
    
      // Function to show the current page
      function showPage(index) {
        pages.forEach((page, i) => {
          page.classList.remove("active");
          if (i === index) {
            page.classList.add("active");
          }
        });
      }
    
      // Set up left and right navigation arrows
      const leftArrow = document.createElement("div");
      leftArrow.classList.add("nav-arrow", "nav-arrow-left");
      document.querySelector(".comic-container").appendChild(leftArrow);
    
      const rightArrow = document.createElement("div");
      rightArrow.classList.add("nav-arrow", "nav-arrow-right");
      document.querySelector(".comic-container").appendChild(rightArrow);
    
      // Event listener for right arrow (next page)
      rightArrow.addEventListener("click", function () {
        currentPageIndex = (currentPageIndex + 1) % pages.length; // Loop back to the first page
        showPage(currentPageIndex);
      });
    
      // Event listener for left arrow (previous page)
      leftArrow.addEventListener("click", function () {
        currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length; // Loop back to the last page
        showPage(currentPageIndex);
      });
    
      // Initially show the first page
      showPage(currentPageIndex);
    
  });
  