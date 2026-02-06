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

    // Layout Logic
    const isDualEdge = project.id === 'dual-edge';

    // Grid Classes Mapping
    // DualEdge: Clean 50/50 split (Rows 1-3 Top, Rows 4-6 Bottom)
    // Legacy/Default: Asymmetrical
    const gridClasses = {
        hero: isDualEdge
            ? "col-span-2 lg:col-span-4 row-span-4 lg:row-span-3 lg:col-start-3 lg:row-start-1" // Top Right (50% Height)
            : "col-span-2 lg:col-span-4 row-span-4 lg:row-span-3 lg:col-start-3 lg:row-start-1",

        sponge: isDualEdge
            ? "col-span-1 lg:col-span-2 row-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-1" // Top Left (50% Height)
            : "col-span-1 lg:col-span-2 row-span-6 lg:row-span-4 lg:col-start-1 lg:row-start-1 lg:row-start-5",

        accent: isDualEdge
            ? "col-span-1 lg:col-span-2 row-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-4" // Bottom Left (50% Height)
            : "col-span-1 lg:col-span-2 row-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-5 lg:row-start-11",

        nav: isDualEdge
            ? "col-span-1 lg:col-span-2 row-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-4" // Bottom Mid (50% Height)
            : "col-span-1 lg:col-span-2 row-span-4 lg:row-span-3 lg:col-start-3 lg:row-start-4 lg:row-start-9",

        blue: isDualEdge
            ? "col-span-1 lg:col-span-2 row-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4" // Bottom Right (50% Height)
            : "col-span-1 lg:col-span-2 row-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-4"
    };

    return (
        <div ref={containerRef} className="w-full h-full p-4 lg:p-6 bg-[#323232] absolute inset-0 text-white">
            <div className="grid grid-cols-2 grid-rows-12 lg:grid-cols-6 lg:grid-rows-6 gap-4 lg:gap-6 h-full min-h-[90vh]">

                {/* 1. Video / Hero Box */}
                <BentoItem
                    id={`hero-${project.id}`}
                    className={`relative ${gridClasses.hero}`}
                    colSpan=""
                    rowSpan=""
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
                    className={gridClasses.sponge}
                    colSpan=""
                    rowSpan=""
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
                    className={`opacity-50 ${gridClasses.blue}`}
                    colSpan=""
                    rowSpan=""
                    bgColor="bg-[#D6DCF5]"
                />

                {/* 4. Navigation Box (Case Study List) */}
                <BentoItem
                    id="nav-box"
                    className={`p-6 font-raleway flex flex-col justify-center ${gridClasses.nav}`}
                    colSpan=""
                    rowSpan=""
                    bgColor="bg-[#D6D6DA]" // Keep neutral for nav
                >
                    <ul className="text-[#1C1C1C] space-y-2">
                        {['DualEdge', 'VisualNoise', 'InvisibleValue', 'HardReset', 'NewHorizon'].map((item) => {
                            const itemId = item.toLowerCase().replace(' ', '-');
                            const targetId = item === 'DualEdge' ? 'dual-edge' :
                                item === 'VisualNoise' ? 'visual-noise' :
                                    item === 'InvisibleValue' ? 'invisible-value' :
                                        item === 'HardReset' ? 'hard-reset' : 'new-horizon';

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
                    className={gridClasses.accent}
                    colSpan=""
                    rowSpan=""
                    style={{ backgroundColor: project.theme.accent }}
                />

            </div>
        </div>
    );
};

export default BentoGrid;
