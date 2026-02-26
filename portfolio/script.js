const layouts = {
    "dual-edge": {
        "box-1": { span: "lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-4", color: "bg-[#282525]" },
        "box-2": { span: "lg:col-start-1 lg:col-span-12 lg:row-start-5 lg:row-span-4", color: "bg-[#181616]" },
        "box-3": { span: "lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-4", color: "bg-[#d4dcfc33]" },
        "box-4": { span: "lg:col-start-5 lg:col-span-4 lg:row-start-9 lg:row-span-4", color: "bg-[#282525]" },
        "box-5": { span: "lg:col-start-9 lg:col-span-4 lg:row-start-9 lg:row-span-4", color: "bg-[#d5424b]" },
        "nav": { box: "box-6", span: "lg:col-start-1 lg:col-span-4 lg:row-start-9 lg:row-span-4", color: "bg-[#d6d6da]" }
    },
    "visual-noise": {
        "box-1": { span: "lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-12", color: "bg-[#161818]" },
        "box-2": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-4", color: "bg-[#3e7f8b]" },
        "box-3": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-5 lg:row-span-8", color: "bg-[#252728]" },
        "box-4": { span: "lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-7", color: "bg-[#252728]" },
        "nav": { box: "box-6", span: "lg:col-start-9 lg:col-span-4 lg:row-start-8 lg:row-span-5", color: "bg-[#e6f2f4]" },
        "box-5": { span: "hidden", color: "transparent" }
    },
    "invisible-value": {
        "box-1": { span: "lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-12", color: "bg-[#e6f2f4]" },
        "box-2": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-12", color: "bg-[#fefefe]" },
        "box-3": { span: "lg:col-start-5 lg:col-span-4 lg:row-start-5 lg:row-span-8", color: "bg-[#b7dde4]" },
        "nav": { box: "box-6", span: "lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-4", color: "bg-[#252728]" },
        "box-4": { span: "hidden", color: "transparent" },
        "box-5": { span: "hidden", color: "transparent" }
    },
    "hard-reset": {
        "box-1": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-8", color: "bg-[#1c2127]" },
        "box-2": { span: "lg:col-start-5 lg:col-span-8 lg:row-start-1 lg:row-span-7", color: "bg-[#161718]" },
        "box-3": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-9 lg:row-span-4", color: "bg-[#e3a830]" },
        "box-4": { span: "lg:col-start-9 lg:col-span-4 lg:row-start-8 lg:row-span-5", color: "bg-[#1e1e1e]" },
        "nav": { box: "box-6", span: "lg:col-start-5 lg:col-span-4 lg:row-start-8 lg:row-span-5", color: "bg-[#d0e1f1]" },
        "box-5": { span: "hidden", color: "transparent" }
    },
    "new-horizon": {
        "box-1": { span: "lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-4", color: "bg-[#5a4389]" },
        "box-2": { span: "lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-4", color: "bg-[#272725]" },
        "box-3": { span: "lg:col-start-1 lg:col-span-12 lg:row-start-5 lg:row-span-2", color: "bg-[#e6b33c]" },
        "box-4": { span: "lg:col-start-1 lg:col-span-12 lg:row-start-7 lg:row-span-6", color: "bg-[#1c1c1c]" },
        "nav": { box: "box-6", span: "lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-4", color: "bg-[#f8f4ea]" },
        "box-5": { span: "hidden", color: "transparent" }
    }
};

let currentProjectId = "dual-edge";

function applyLayout(projectId) {
    console.log(`Applying layout for: ${projectId}`);
    const layout = layouts[projectId];
    
    // Reset all boxes first
    for (let i = 1; i <= 6; i++) {
        const box = document.getElementById(`box-${i}`);
        box.className = "rounded-2xl transition-all duration-700 overflow-hidden";
        box.style.backgroundColor = "";
    }

    // Apply specific project layout
    Object.keys(layout).forEach(key => {
        let box;
        if (key === 'nav') {
            box = document.getElementById(layout.nav.box);
            box.className = `rounded-2xl transition-all duration-700 p-6 font-raleway overflow-hidden ${layout.nav.span} ${layout.nav.color}`;
        } else {
            box = document.getElementById(key);
            box.className = `rounded-2xl transition-all duration-700 overflow-hidden ${layout[key].span} ${layout[key].color}`;
        }
    });

    currentProjectId = projectId;

    // Update nav active state
    document.querySelectorAll('.case-item').forEach(item => {
        item.classList.remove('opacity-100', 'scale-110');
        item.classList.add('opacity-40');
        if (item.id === projectId) {
            item.classList.add('opacity-100', 'scale-105');
            item.classList.remove('opacity-40');
        }
    });
}

function handleNavigation(event, targetId) {
    if (event) event.preventDefault();
    if (targetId === currentProjectId) return;

    // Optional: Add simple fade out before switching
    const grid = document.getElementById('grid-container');
    gsap.to(grid, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            applyLayout(targetId);
            gsap.to(grid, { opacity: 1, duration: 0.5 });
            window.location.hash = targetId;
        }
    });
}

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && layouts[hash]) {
        applyLayout(hash);
    } else {
        applyLayout('dual-edge');
    }
});
