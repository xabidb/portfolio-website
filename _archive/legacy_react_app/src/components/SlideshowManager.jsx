import React, { useEffect, useRef } from 'react';
import { useSlideshowStore } from '../store/slideshowStore';
import { projects } from '../data/projects';
import BentoGrid from './BentoGrid';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SlideshowManager = () => {
    const {
        activeProjectIndex,
        isTransitioning,
        setTransitioning,
        direction,
        nextProject,
        prevProject
    } = useSlideshowStore();

    // Current active project
    const activeProject = projects[activeProjectIndex];

    // Ref for the container to scope GSAP
    const containerRef = useRef(null);

    const [renderIndex, setRenderIndex] = React.useState(activeProjectIndex);

    // Navigation Event Listeners
    // Navigation Event Listeners Removed per user request
    // Navigation is now controlled solely by clicking on the Bento Grid items.


    useEffect(() => {
        // If store index changes, triggers the transition sequence
        if (activeProjectIndex !== renderIndex) {
            const ctx = gsap.context(() => {
                // 1. EXIT ANIMATION
                // Determine exit Y value based on direction
                // If going 'next', current should go UP (-100)
                // If going 'prev', current should go DOWN (100)
                const exitY = direction === 'next' ? -100 : 100;

                gsap.to(".bento-box", {
                    duration: 0.6,
                    y: exitY,
                    opacity: 0,
                    scale: 0.9,
                    stagger: {
                        amount: 0.2,
                        from: "random"
                    },
                    ease: "power2.in",
                    onComplete: () => {
                        // 2. UPDATE STATE (Mount new grid)
                        setRenderIndex(activeProjectIndex);
                        setTransitioning(false);
                    }
                });
            }, containerRef);

            return () => ctx.revert();
        }
    }, [activeProjectIndex, renderIndex, setTransitioning, direction]);

    // The 'key' ensures a full remount when renderIndex changes.
    // We pass 'direction' to BentoGrid so it knows where to enter FROM.
    // If we are going 'next', new grid enters from BOTTOM (100).
    // If we are going 'prev', new grid enters from TOP (-100).

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
            <BentoGrid
                key={projects[renderIndex].id}
                project={projects[renderIndex]}
                direction={direction}
            />
        </div>
    );
};

export default SlideshowManager;
