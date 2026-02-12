# Portfolio Structure Blueprint 📐

## 1. The Grid (Home)
The idea is to have as many bento grids as projects, and each whole screen bento grid belongs to one case study.

There are 5 projects in total:
1. DualEdge
    - This is a project about trowels, specifically a dual project with a company called Bellota Herramientas.
    - The requirement was to design an innovative handle for a trowel from one side, and develop an interchangeable blade system from the other side.
    - The case study will be about the process of designing the handle and the blade system, how I prioritized and managed my time (not very wisely--prioritizing fancy but unprovable handle ideas over accountable and easy to implement blade system ideas), the results, the impact it had on the company, and the lessons learned.
2. VisualNoise
    - This is a project about a fleet management system for a company called Irizar.
    - The requirement was to redesign the user interface of the fleet management system to be more user-friendly and efficient.
    - The case study will be about how I redesigned some parts of the system to be more user-friendly and scannable for users who need to monitor the fleet. And two designers worked together for the first time trying to keep the same design language.
3. InvisibleValue
    - This is a project about a fleet management system for a company called Irizar.
    - The requirement was to redesign the user interface of the fleet management system to be more user-friendly and efficient.
    - The case study will be about the decision of making a UI kit to stay consistent with the design language and how we the kit grew with the project. The Kit was made in Figma and it was a shared file between the two designers working on the project.
4. HardReset
    - This is the "About Me" page. I don't want this to be a regular "About Me" page. I want it to tell my story and my product design philosophy. From being laid-off from Irizar when COVID-19 hit, to moving to Ireland, to upskilling to a Full Stack Builder completing a Higher Diploma in Computing in AI/ML in NCI.
5. NewHorizon
    - This is a project about a new job proposal for a company called Explorium.
    - The case study will be about how I approached the challenge of designing a new interface for the company, and how I managed to create a solution that was both innovative and practical using bridging AI tools with product design principles.

* The number of projects could be mutable and some could be replaced by others, the layouts can be different for each project, always keeping a balanced bento grid.*

- **Mobile Layout**: [e.g., 6x6 grid, totally adjustable to needs]
- **Desktop Layout**: [e.g., 6x6 grid, totally adjustable to needs]
- **Key Elements**: [All grids are made of these elements, but the position and size of the elements can change and the content will be different for each project]
    - [ ] Video Box (Where an animation is played)
    - [ ] Case Study List (Keep the card dimensions the same, but change position)
    - [ ] Product Image Box 1
    - [ ] Product Image Box 2
    - [ ] Case Study Quote Box

## 2. The User Flow (Navigation)

- **Home Navigation**: The home page is 5 pages/sections in one. The idea is each project is a page/section, and the user can navigate between them using the Case Study List Card. Every time the user clicks on a Case Study List Link, a multiscreen slideshow animation will be triggered.

Each project has a specific in/out animation. E.g. user is in NewHorizon screen. clicks on DualEdge link. Boxes from NewHorizon screen move out changing their size and positions till the last Box (NewHorizon) is the only one left taking all the screen space. Then the DualEdge boxes animate in moving the NewHorizon box out. And the DualEdge in animation begins untill all DualEdge boxes are in the screen.

- **Home Cards Hover Animations**: To be explored.

- **Case Study Animations**: To be explored.

*Describe exactly what happens when a user interaction occurs.*

- **Trigger**: Clicking on a Case Study List Link.
- **Transition**: Multiscreen Slideshow Animation. Research if needed.

## 3. Case Study Blueprint (The Deep Dive)
*What does a single Project Page look like? Good quetion to be researched, I am open to any suggestions.*

- **Header/Hero**: [e.g., Big Title + Fullscreen Video]
- **Core Sections**:
    - [ ] Role / Timeline / Tech Stack
    - [ ] The Challenge (Text)
    - [ ] The Gallery (Images/Grid?)
    - [ ] The Outcome (Data/Results)
- **Footer**: [Next Project? Back to Grid?]

## 4. Design Logic (Generative Rules)
*How does the site "generate" unique layouts?*

- **Input Data**:
    - Project Color (e.g., `#D5424B`)
    - Project Type (e.g., "Motion Design" vs "Dev")
- **Output Rules**:
    - If "Motion", then [Use Video Hero?]
    - If "Dev", then [Show Github Stats?]
    - [Define your rules here...]
