console.log("Antigravity Script Loaded 🚀");

gsap.registerPlugin(Flip);

// Select DOM elements
const gridContainer = document.querySelector(".grid");
const heroBox = document.getElementById("hero-box");
const quoteBox = document.getElementById("quote-box");
const spongeBox = document.getElementById("sponge-box");
const multigripBox = document.getElementById("multigrip-box");
const navBox = document.getElementById("nav-box");

// Group for easy state capture
const allBoxes = [heroBox, quoteBox, spongeBox, multigripBox, navBox];

function handleNavigation(event, targetId) {
    event.preventDefault(); // Stop immediate navigation

    // If clicking the current project (DualEdge), do nothing
    if (targetId === 'dual-edge') {
        console.log("Already on DualEdge.");
        return;
    }

    console.log(`Exiting DualEdge -> Going to ${targetId}... triggering OUT animation.`);

    // --- STAGE 1: Vertical Wipe ---
    // Quote expands UP, Hero expands DOWN.
    // Others shrink/disappear.

    // Capture state BEFORE changes
    const state1 = Flip.getState(allBoxes);

    // 1. Modify Layout for Stage 1
    // Left Col: Quote takes over logic
    quoteBox.classList.remove("lg:row-start-5", "lg:row-span-2");
    quoteBox.classList.add("lg:row-start-1", "lg:row-span-6"); // Fills Left Col

    // Right Col: Hero takes over logic
    heroBox.classList.remove("lg:row-span-3");
    heroBox.classList.add("lg:row-span-6"); // Fills Right Col

    // Hide others nicely
    spongeBox.style.display = "none";
    multigripBox.style.display = "none";
    navBox.style.display = "none";

    // Animate to Stage 1
    Flip.from(state1, {
        duration: 0.6,
        ease: "power3.inOut",
        absolute: true, // Crucial for grid re-layout animations
        onComplete: () => {
            // Pass targetId to Stage 2
            triggerStage2(targetId);
        }
    });
}

function triggerStage2(targetId) {
    // --- STAGE 2: Horizontal Wipe ---
    // Hero expands LEFT to fill screen.
    // Quote gets crushed.

    const state2 = Flip.getState(allBoxes);

    // Modify Layout for Stage 2
    heroBox.classList.remove("lg:col-start-3", "lg:col-span-4");
    heroBox.classList.add("lg:col-start-1", "lg:col-span-6"); // Full Width
    heroBox.classList.add("z-50"); // Ensure on top

    quoteBox.style.display = "none"; // Crushed

    Flip.from(state2, {
        duration: 0.6,
        ease: "power3.inOut",
        absolute: true,
        onComplete: () => {
            console.log(`Animation complete. Redirecting to ${targetId}...`);
            // Update URL hash
            window.location.hash = targetId;
            // Reload to simulate landing on the new project (resets grid)
            window.location.reload();
        }
    });
}
