import React, { useEffect, useRef } from 'react';
import { useSlideshowStore } from '../store/slideshowStore';
import { projects } from '../data/projects';
import BentoGrid from './BentoGrid';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SlideshowManager = () => {
    const { activeProjectIndex, isTransitioning, setTransitioning } = useSlideshowStore();

    // Current active project
    const activeProject = projects[activeProjectIndex];

    // Ref for the container to scope GSAP
    const containerRef = useRef(null);

    // We need to track the "previous" project to handle the exit animation manually if needed,
    // or simple rely on the fact that 'activeProject' changes.
    // But to do "Exit then Update", we need local state or a different flow.
    // A pattern: Use local state for "render project" and sync with store after exit animation.

    const [renderIndex, setRenderIndex] = React.useState(activeProjectIndex);

    useEffect(() => {
        // If store index changes, triggers the transition sequence
        if (activeProjectIndex !== renderIndex) {
            const ctx = gsap.context(() => {
                // 1. EXIT ANIMATION
                // Select all current bento boxes
                gsap.to(".bento-box", {
                    duration: 0.6,
                    y: -100, // Fly up (Antigravity)
                    opacity: 0,
                    scale: 0.9,
                    stagger: {
                        amount: 0.2,
                        from: "random" // Scatter feel
                    },
                    ease: "power2.in",
                    onComplete: () => {
                        // 2. UPDATE STATE (Mount new grid)
                        setRenderIndex(activeProjectIndex);
                        setTransitioning(false); // Enable clicks again (optional early release)
                    }
                });
            }, containerRef);

            return () => ctx.revert();
        }
    }, [activeProjectIndex, renderIndex, setTransitioning]);

    // The 'key' ensures a full remount when renderIndex changes,
    // triggering the BentoGrid's internal 'useGSAP' Enter animation.
    // We double-check that the Enter animation in BentoGrid is configured to 'from' values.

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
            <BentoGrid key={projects[renderIndex].id} project={projects[renderIndex]} />
        </div>
    );
};

export default SlideshowManager;
