import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Configure GSAP defaults for "Antigravity" feel
gsap.defaults({
    duration: 0.6,
    ease: 'power3.out',
});

// Export for use if needed, though side-effects are main purpose
export default gsap;
