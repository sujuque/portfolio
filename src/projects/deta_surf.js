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
  });
  