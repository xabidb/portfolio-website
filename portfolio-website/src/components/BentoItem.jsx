import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BentoItem = ({
    children,
    className = '',
    colSpan = 'col-span-1',
    rowSpan = 'row-span-1',
    bgColor = 'bg-[#1C1C1C]', // Default from legacy "Video Box"
    id
}) => {
    const itemRef = useRef(null);

    // Basic Antigravity Hover Effect
    useGSAP(() => {
        const el = itemRef.current;

        // Advanced Antigravity Hover Effect
        const onMouseEnter = () => {
            gsap.to(el, {
                y: -10,
                scale: 1.02,
                zIndex: 50,
                boxShadow: "0px 20px 40px -10px rgba(0,0,0,0.6)",
                rotationX: 2, // Tilt up
                rotationY: -2, // Tilt left
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const onMouseLeave = () => {
            gsap.to(el, {
                y: 0,
                scale: 1,
                zIndex: 1,
                boxShadow: "none",
                rotationX: 0,
                rotationY: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mouseleave', onMouseLeave);
        };

    }, { scope: itemRef });

    return (
        <div
            ref={itemRef}
            id={id}
            className={`bento-box rounded-2xl relative overflow-hidden ${colSpan} ${rowSpan} ${bgColor} ${className}`}
        >
            {children}
        </div>
    );
};

export default BentoItem;
