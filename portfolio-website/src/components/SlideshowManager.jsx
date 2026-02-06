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

    // When activeProjectIndex changes, we could trigger a specific "Transition" component
    // For now, we just hard-switch the data passed to BentoGrid
    // The BentoGrid internal useGSAP handles the "Enter" animation
    // The "Exit" animation is harder to coordinate without a TransitionGroup or similar

    // Ideal flow:
    // 1. Old Grid is present.
    // 2. State changes.
    // 3. Manager blocks render? No.
    // 4. We probably need two layers: Current Project and Next Project?

    // Simplest Antigravity MVP:
    // Just render the active project. BentoGrid handles its own "Mount" animation.
    // To make it smoother, we can use a key to force remount.

    useEffect(() => {
        if (isTransitioning) {
            // Mocking a transition delay if needed, 
            // but for now we let the component mount animation take over.
            // In a real FLIP scenario (Phase 5), we'd use Flip.getState here.

            const timer = setTimeout(() => {
                setTransitioning(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, setTransitioning]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Key is crucial to force React to unmount/remount the Grid, triggering the GSAP 'from' tween */}
            <BentoGrid key={activeProject.id} project={activeProject} />
        </div>
    );
};

export default SlideshowManager;
