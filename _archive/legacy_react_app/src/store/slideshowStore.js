import { create } from 'zustand';
import { projects } from '../data/projects';

export const useSlideshowStore = create((set) => ({
    // State
    activeProjectIndex: 0,
    isTransitioning: false,
    direction: 'next', // 'next' | 'prev'

    // Actions
    setTransitioning: (isTransitioning) => set({ isTransitioning }),

    initialProject: (index) => set({ activeProjectIndex: index }),

    nextProject: () => set((state) => {
        if (state.isTransitioning) return {};
        const nextIndex = (state.activeProjectIndex + 1) % projects.length;
        return {
            activeProjectIndex: nextIndex,
            direction: 'next',
            isTransitioning: true
        };
    }),

    prevProject: () => set((state) => {
        if (state.isTransitioning) return {};
        const prevIndex = (state.activeProjectIndex - 1 + projects.length) % projects.length;
        return {
            activeProjectIndex: prevIndex,
            direction: 'prev',
            isTransitioning: true
        };
    }),

    goToProject: (id) => set((state) => {
        if (state.isTransitioning) return {};
        const targetIndex = projects.findIndex(p => p.id === id);
        if (targetIndex === -1 || targetIndex === state.activeProjectIndex) return {};

        // Determine direction based on shortest path or simple linear
        const direction = targetIndex > state.activeProjectIndex ? 'next' : 'prev';

        return {
            activeProjectIndex: targetIndex,
            direction,
            isTransitioning: true
        };
    })
}));
