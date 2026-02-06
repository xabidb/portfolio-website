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

    // Explicitly set transform origins BEFORE capturing state
    // This ensures Flip utilizes the correct anchor points for scaling
    quoteBox.style.transformOrigin = "bottom center"; // Expands UP from bottom
    spongeBox.style.transformOrigin = "top center";    // Shrinks UP to top
    heroBox.style.transformOrigin = "top center";      // Expands DOWN from top
    multigripBox.style.transformOrigin = "bottom center";
    navBox.style.transformOrigin = "bottom center";

    // Capture state
    // We capture props involved in "disappearing" to zero height
    const state1 = Flip.getState(allBoxes, {
        props: "min-height, height, margin, padding, opacity"
    });

    // 1. Modify Layout for Stage 1

    // LEFT COL: Quote expands UP
    quoteBox.classList.remove("lg:row-start-5", "lg:row-span-2");
    quoteBox.classList.add("lg:row-start-1", "lg:row-span-6");
    quoteBox.style.zIndex = "20";

    // Sponge shrinks to zero
    spongeBox.style.height = "0px";
    spongeBox.style.minHeight = "0px";
    spongeBox.style.opacity = "0";
    spongeBox.style.margin = "0px";
    spongeBox.style.overflow = "hidden";

    // RIGHT COL: Hero expands DOWN
    heroBox.classList.remove("lg:row-span-3");
    heroBox.classList.add("lg:row-span-6");
    heroBox.style.zIndex = "20";

    // Others shrink
    [multigripBox, navBox].forEach(box => {
        box.style.height = "0px";
        box.style.minHeight = "0px";
        box.style.opacity = "0";
        box.style.margin = "0px";
        box.style.overflow = "hidden";
    });

    // Animate to Stage 1
    Flip.from(state1, {
        duration: 0.8,
        ease: "power2.inOut",
        absolute: true,
        scale: true, // TRIGGER: Use transforms (scaleY) instead of layout reflow
        simple: true, // Optimization for simple transforms
        onComplete: () => {
            triggerStage2(targetId);
        }
    });
}

function triggerStage2(targetId) {
    // --- STAGE 2: Horizontal Wipe ---

    // Reset origins for horizontal expanding if needed? 
    // Hero expands Left. Origin Right?
    // Start: Right Col. End: Full Width.
    // It grows Left. Origin should be Right.
    heroBox.style.transformOrigin = "right center";

    const state2 = Flip.getState(allBoxes);

    // Modify Layout for Stage 2
    // Hero expands LEFT
    heroBox.classList.remove("lg:col-start-3", "lg:col-span-4");
    heroBox.classList.add("lg:col-start-1", "lg:col-span-6"); // Full Width
    heroBox.style.zIndex = "50";

    // Quote gets crushed
    // It's on the left. It gets crushed by Hero coming from right?
    // Or it just shrinks?
    // If Hero is on top (z-50), Hero essentially covers it.
    // But we want to animate the push? 
    // Let's just shrink Quote width to 0. Anchor Left?
    quoteBox.style.transformOrigin = "left center";
    quoteBox.style.width = "0px";
    quoteBox.style.minWidth = "0px";
    quoteBox.style.opacity = "0";
    quoteBox.style.margin = "0px";
    quoteBox.style.overflow = "hidden";

    Flip.from(state2, {
        duration: 0.8,
        ease: "power2.inOut",
        absolute: true,
        scale: true, // Continue using scale for smooth performance
        simple: true,
        onComplete: () => {
            console.log(`Animation complete. Redirecting to ${targetId}...`);
            window.location.hash = targetId;
            window.location.reload();
        }
    });
}
