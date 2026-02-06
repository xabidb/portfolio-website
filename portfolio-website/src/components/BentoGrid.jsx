import React, { useRef } from 'react';
import BentoItem from './BentoItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useSlideshowStore } from '../store/slideshowStore';

const BentoGrid = ({ project, direction = 'next' }) => {
    const containerRef = useRef(null);
    const { goToProject } = useSlideshowStore();

    useGSAP(() => {
        // Entrance animation for the new grid
        // If 'next', enters from bottom (100)
        // If 'prev', enters from top (-100)
        const enterY = direction === 'next' ? 100 : -100;

        gsap.from(".bento-box", {
            y: enterY,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out"
        });
    }, { scope: containerRef, dependencies: [project.id] });

    return (
        <div ref={containerRef} className="w-full h-full p-4 lg:p-6 bg-[#323232] absolute inset-0 text-white">
            <div className="grid grid-cols-2 grid-rows-12 lg:grid-cols-6 lg:grid-rows-6 gap-4 lg:gap-6 h-full min-h-[90vh]">

                {/* 1. Video / Hero Box */}
                <BentoItem
                    id={`hero-${project.id}`}
                    colSpan="col-span-2 lg:col-start-3 lg:col-span-4"
                    rowSpan="row-span-4 lg:row-start-1 lg:row-span-3"
                    className="relative"
                    style={{ backgroundColor: project.theme.tertiary }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4" style={{ color: project.theme.primary }}>
                            {project.title}
                        </h2>
                        <p className="text-xl" style={{ color: project.theme.accent }}>{project.tagline}</p>
                    </div>
                </BentoItem>

                {/* 2. Sponge / Description Box */}
                <BentoItem
                    id={`sponge-${project.id}`}
                    colSpan="col-span-1 lg:col-start-1 lg:col-span-2"
                    rowSpan="row-span-6 row-start-5 lg:row-start-1 lg:row-span-4"
                    style={{ backgroundColor: project.theme.primary }}
                >
                    <div className="p-6 h-full flex items-end">
                        <p className="text-sm lg:text-base font-medium" style={{ color: project.theme.secondary }}>
                            {project.description}
                        </p>
                    </div>
                </BentoItem>

                {/* 3. Blue / Stats Box (Placeholder) */}
                <BentoItem
                    id={`blue-${project.id}`}
                    colSpan="col-span-1 lg:col-start-5 lg:col-span-2"
                    rowSpan="row-span-4 lg:row-start-4 lg:row-span-3"
                    bgColor="bg-[#D6DCF5]"
                    className="opacity-50"
                />

                {/* 4. Navigation Box (Case Study List) */}
                <BentoItem
                    id="nav-box"
                    colSpan="col-span-1 row-start-9 lg:col-start-3 lg:col-span-2 lg:row-start-4 lg:row-span-3"
                    rowSpan="row-span-4"
                    bgColor="bg-[#D6D6DA]" // Keep neutral for nav
                    className="p-6 font-raleway flex flex-col justify-center"
                >
                    <ul className="text-[#1C1C1C] space-y-2">
                        {['DualEdge', 'VisualNoise', 'InvisibleValue', 'HardReset', 'NewHorizon'].map((item) => {
                            const itemId = item.toLowerCase().replace(' ', '-');
                            const targetId = item === 'DualEdge' ? 'dual-edge' :
                                item === 'VisualNoise' ? 'visual-noise' :
                                    item === 'InvisibleValue' ? 'invisible-value' :
                                        item === 'HardReset' ? 'hard-reset' : 'new-horizon';

                            // Highlight active project using theme primary color
                            const isActive = project.id === targetId;

                            return (
                                <li
                                    key={item}
                                    onClick={() => goToProject(targetId)}
                                    className={`cursor-pointer transition-colors text-xl font-bold flex items-center group`}
                                    style={{ color: isActive ? project.theme.primary : '#1C1C1C' }}
                                >
                                    <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2">
                                        →
                                    </span>
                                    <span className={!isActive ? "group-hover:text-gray-600" : ""}>{item}</span>
                                </li>
                            )
                        })}
                    </ul>
                </BentoItem>

                {/* 5. Accent Box */}
                <BentoItem
                    id={`accent-${project.id}`}
                    colSpan="col-span-1 lg:col-start-1 lg:col-span-2"
                    rowSpan="row-span-2 row-start-11 lg:row-start-5 lg:row-span-2"
                    style={{ backgroundColor: project.theme.accent }}
                />

            </div>
        </div>
    );
};

export default BentoGrid;
