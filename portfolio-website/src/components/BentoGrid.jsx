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
                    bgColor="bg-[#1C1C1C]"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4" style={{ color: project.theme.primary }}>
                            {project.title}
                        </h2>
                        <p className="text-xl text-gray-400">{project.tagline}</p>
                    </div>
                </BentoItem>

                {/* 2. Sponge / Description Box */}
                <BentoItem
                    id={`sponge-${project.id}`}
                    colSpan="col-span-1 lg:col-start-1 lg:col-span-2"
                    rowSpan="row-span-6 row-start-5 lg:row-start-1 lg:row-span-4"
                    bgColor="bg-[#989FAC]"
                >
                    <div className="p-6 h-full flex items-end">
                        <p className="text-sm lg:text-base font-medium text-black">
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
                />

                {/* 4. Navigation Box (Case Study List) */}
                <BentoItem
                    id="nav-box"
                    colSpan="col-span-1 row-start-9 lg:col-start-3 lg:col-span-2 lg:row-start-4 lg:row-span-3"
                    rowSpan="row-span-4"
                    bgColor="bg-[#D6D6DA]"
                    className="p-6 font-raleway flex flex-col justify-center"
                >
                    <ul className="text-[#1C1C1C] space-y-2">
                        {['DualEdge', 'VisualNoise', 'InvisibleValue', 'HardReset', 'NewHorizon'].map((item) => {
                            const itemId = item.toLowerCase().replace(' ', '-'); // simple slug
                            // Map readable names to IDs if needed, assuming match for now
                            const targetId = item === 'DualEdge' ? 'dual-edge' :
                                item === 'VisualNoise' ? 'visual-noise' :
                                    item === 'InvisibleValue' ? 'invisible-value' :
                                        item === 'HardReset' ? 'hard-reset' : 'new-horizon';

                            return (
                                <li
                                    key={item}
                                    onClick={() => goToProject(targetId)}
                                    className={`cursor-pointer transition-colors text-xl font-bold flex items-center group ${project.id === targetId ? 'text-[#D5424B]' : 'hover:text-[#D5424B]'}`}
                                >
                                    <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2">
                                        →
                                    </span>
                                    {item}
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
                    bgColor="bg-[#D5424B]" // Could be project.theme.primary
                    style={{ backgroundColor: project.theme.primary }}
                />

            </div>
        </div>
    );
};

export default BentoGrid;
