import '../style.css';

document.addEventListener("DOMContentLoaded", function () {
    // Lightbox Functionality
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

    // Comic Book Page Turn Functionality
    const comicContainer = document.querySelector(".comic-container");

    if (comicContainer) {
        const pages = document.querySelectorAll(".comic-page");
        let currentPageIndex = 0;

        function showPage(index) {
            pages.forEach((page, i) => {
                page.classList.remove("active");
                if (i === index) {
                    page.classList.add("active");
                }
            });
        }

        const leftArrowComic = document.createElement("div");
        leftArrowComic.classList.add("nav-arrow", "nav-arrow-left");
        comicContainer.appendChild(leftArrowComic);

        const rightArrowComic = document.createElement("div");
        rightArrowComic.classList.add("nav-arrow", "nav-arrow-right");
        comicContainer.appendChild(rightArrowComic);

        rightArrowComic.addEventListener("click", function () {
            currentPageIndex = (currentPageIndex + 1) % pages.length;
            showPage(currentPageIndex);
        });

        leftArrowComic.addEventListener("click", function () {
            currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
            showPage(currentPageIndex);
        });

        showPage(currentPageIndex);
    }

        // Slideshow Functionality
        const slides = document.querySelectorAll(".master-slideshow video, .master-slideshow img");
        const leftArrow = document.querySelector(".arrow.left");
        const rightArrow = document.querySelector(".arrow.right");

        let currentSlideIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }

        // Event listeners for arrows
        rightArrow.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });

        leftArrow.addEventListener("click", function () {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });

        // Initialize by showing the first slide
        showSlide(currentSlideIndex);

});

  