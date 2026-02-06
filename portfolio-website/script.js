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

    // Capture state
    const state1 = Flip.getState(allBoxes, { props: "min-height, margin, padding" });

    // 1. Modify Layout for Stage 1

    // LEFT COL: Quote expands UP
    // We explicitly set transform origin to BOTTOM to anchor it there.
    quoteBox.style.transformOrigin = "bottom center";

    // Quote becomes full left col
    quoteBox.classList.remove("lg:row-start-5", "lg:row-span-2");
    quoteBox.classList.add("lg:row-start-1", "lg:row-span-6");
    quoteBox.style.zIndex = "20"; // Priority

    // Sponge shrinks to zero (visual removal without breaking Flip flow instantly)
    spongeBox.style.height = "0px";
    spongeBox.style.minHeight = "0px";
    spongeBox.style.opacity = "0";
    spongeBox.style.margin = "0px";
    spongeBox.style.padding = "0px";
    spongeBox.style.overflow = "hidden";

    // RIGHT COL: Hero expands DOWN
    // Hero is at top, grows down. Origin top.
    heroBox.style.transformOrigin = "top center";
    heroBox.classList.remove("lg:row-span-3");
    heroBox.classList.add("lg:row-span-6");
    heroBox.style.zIndex = "20";

    // Others shrink
    [multigripBox, navBox].forEach(box => {
        box.style.height = "0px";
        box.style.minHeight = "0px";
        box.style.opacity = "0";
        box.style.margin = "0px";
        box.style.padding = "0px";
        box.style.overflow = "hidden";
    });

    // Animate to Stage 1
    Flip.from(state1, {
        duration: 0.8,
        ease: "power2.inOut",
        absolute: true,
        scale: true, // Try scale true? Sometimes fixes jitter. But usually layout changes need scale: false? 
        // Actually, for "accordion" effect, scale: true might be better if content allows.
        // Let's stick to default (scale: false implicitly for layout changes usually, but Flip defaults to true??)
        // Default relative: false, prune: false...
        // Let's try explicit targets
        onComplete: () => {
            triggerStage2(targetId);
        }
    });
}

function triggerStage2(targetId) {
    // --- STAGE 2: Horizontal Wipe ---

    const state2 = Flip.getState(allBoxes);

    // Modify Layout for Stage 2
    // Hero expands LEFT
    heroBox.classList.remove("lg:col-start-3", "lg:col-span-4");
    heroBox.classList.add("lg:col-start-1", "lg:col-span-6"); // Full Width
    heroBox.style.zIndex = "50"; // Topmost

    // Quote gets crushed
    quoteBox.style.width = "0px";
    quoteBox.style.minWidth = "0px"; // Ensure it crushes
    quoteBox.style.opacity = "0";
    quoteBox.style.margin = "0px";
    quoteBox.style.padding = "0px";
    quoteBox.style.overflow = "hidden";

    Flip.from(state2, {
        duration: 0.8,
        ease: "power2.inOut",
        absolute: true,
        onComplete: () => {
            console.log(`Animation complete. Redirecting to ${targetId}...`);
            window.location.hash = targetId;
            window.location.reload();
        }
    });
}
