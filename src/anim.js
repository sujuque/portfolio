import './style.css'

document.addEventListener("DOMContentLoaded", () => {

    // Handle showreel looping
    const showreelVideo = document.getElementById("showreelVideo");

    if (showreelVideo) {
        showreelVideo.muted = true; 
        showreelVideo.loop = true;  
        showreelVideo.play();       
    } else {
        console.error("Showreel video element not found.");
    }

    // Handle Unhomely video
    const unhomelyVideo = document.getElementById("animationClipUnhomely");
    const unhomelyButton = document.getElementById("playButtonUnhomely");

    unhomelyButton.addEventListener("click", () => {
        if (unhomelyVideo.paused) {
            unhomelyVideo.play();
            unhomelyButton.classList.add("hidden");
        }
    });

    unhomelyVideo.addEventListener("pause", () => {
        unhomelyButton.classList.remove("hidden");
    });

    // Handle Moonlit video
    const moonlitVideo = document.getElementById("animationClipMoonlit");
    const moonlitButton = document.getElementById("playButtonMoonlit");

    moonlitButton.addEventListener("click", () => {
        if (moonlitVideo.paused) {
            moonlitVideo.play();
            moonlitButton.classList.add("hidden");
        }
    });

    moonlitVideo.addEventListener("pause", () => {
        moonlitButton.classList.remove("hidden");
    });

    // Handle Slot Machine video
    const slotVideo = document.getElementById("animationClipSlot");
    const slotButton = document.getElementById("playButtonSlot");

    slotButton.addEventListener("click", () => {
        if (slotVideo.paused) {
            slotVideo.play();
            slotButton.classList.add("hidden");
        }
    });

    slotVideo.addEventListener("pause", () => {
        slotButton.classList.remove("hidden");
    });
});
