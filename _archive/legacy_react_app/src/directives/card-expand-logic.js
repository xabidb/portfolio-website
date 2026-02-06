/* 
  ANTIGRAVITY: Card Expand Logic (Draft)
  Technique: FLIP (First, Last, Invert, Play) via GSAP Flip Plugin
  
  Scenario: User clicks a "Case Study" text item or Box.
  Goal: The clicked element becomes the viewport "Hero", other elements "explode" away or fade out.
*/

// 1. STATE DEFINITION
const state = {
    isGrid: true,
    activeCase: null // 'dual-edge' | 'visual-noise' | etc.
};

// 2. THE TRIGGER
function onCardClick(cardId, element) {
    // A. Capture State (First)
    const state = Flip.getState(".bento-box, .bento-text");

    // B. Change Layout (Last)
    // Toggle classes to switch from "Grid Mode" to "Hero Mode"
    container.classList.add("mode-hero");
    container.setAttribute("data-active", cardId);

    // - active box becomes full width/height (absolute positioning)
    // - other boxes gain classes to push them off-screen (Z-axis or X/Y translate)

    // C. Animate (Invert > Play)
    Flip.from(state, {
        duration: 1.2, // Slow, weighty feel
        ease: "power3.inOut", // Antigravity ease
        absolute: true, // Crucial for FLIP
        zIndex: 50, // Active card pops to front

        // Antigravity Twist: stagger the "exit" of other elements
        onStart: () => {
            gsap.to(".bento-box:not(.active)", {
                scale: 0.8,
                opacity: 0,
                y: 100, // Drop down like gravity took over
                stagger: 0.05
            });
        },

        // Cleanup
        onComplete: () => {
            // Mount the detailed Case Study content here
            showCaseStudyContent(cardId);
        }
    });
}

// 3. REVERSE (Back to Grid)
function backToGrid() {
    const state = Flip.getState(".bento-box, .bento-text");

    // Reset DOM
    container.classList.remove("mode-hero");
    container.removeAttribute("data-active");

    // Re-animate
    Flip.from(state, {
        duration: 0.8,
        ease: "power2.out", // Faster return
        absolute: true,
        onStart: () => {
            gsap.to(".bento-box:not(.active)", {
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.03
            });
        }
    });
}
