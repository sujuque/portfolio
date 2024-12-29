import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("animationVideo");

  if (video) {
    video.addEventListener("loadeddata", () => {
      setInterval(() => {
        video.currentTime = 0;
        video.play();
      }, 5000); // Loop every 5 seconds
    });
  } else {
    console.error("Video element not found.");
  }

  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("video") || event.target.closest("img")) {
        event.preventDefault();
    }
});

});


