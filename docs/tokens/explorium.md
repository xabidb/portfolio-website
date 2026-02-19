# NewHorizon (Explorium) Design Tokens

Design tokens for the Explorium case study, optimized for Shadcn UI integration.

## Aesthetic: Scientific Discovery
An immersive journey through science, technology, and sport. Where curiosity leads and innovation follows. Vibrantly professional.

## CSS Variables

```css
@layer base {
  .dark {
    --background: 0 0% 11%; /* #1C1C1C */
    --foreground: 45 62% 95%; /* #F8F4EA */
    
    --card: 45 62% 95% / 0.05; /* #f8f4ea0d */
    --card-foreground: 45 62% 95%; /* #F8F4EA */
    
    --popover: 0 0% 11%;
    --popover-foreground: 45 62% 95%;
    
    --primary: 41 78% 57%; /* #E6B33C */
    --primary-foreground: 0 0% 11%;
    
    --secondary: 260 34% 40%; /* #5A4389 */
    --secondary-foreground: 45 62% 95%;
    
    --muted: 0 0% 11%;
    --muted-foreground: 45 62% 95% / 0.6;
    
    --accent: 338 69% 44%; /* #BE235C */
    --accent-foreground: 45 62% 95%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 45 62% 95% / 0.4;
    --input: 45 62% 95% / 0.2;
    --ring: 41 78% 57%;
    
    --radius: 0.25rem;
  }
}
```

## Typography

| Level | Font Family | Weight | Size | Letter Spacing |
|-------|-------------|--------|------|----------------|
| Display | Plus Jakarta Sans | 800 | 96px | -2px |
| Heading 1 | Plus Jakarta Sans | 700 | 48px | - |
| Heading 2 | Plus Jakarta Sans | 600 | 32px | - |
| Body | JetBrains Mono | 400 | 18px | - |

## Key Assets
- **Primary Color:** `#E6B33C` (Explorium Yellow)
- **Purple Accent:** `#5A4389`
- **Pink Accent:** `#BE235C`
- **Background:** `#1C1C1C` (Explorium Black)
- **Off-White:** `#F8F4EA` (Bright Cream)

## Text Tokens
- **Main Text:** `--foreground` (#F8F4EA) - High contrast for readability.
- **Secondary Text:** `--muted-foreground` (#F8F4EA at 60% opacity).
- **Brand Highlights:** `--primary` (#E6B33C).

## Opacity & Transparency
- **Card Context:** 5% opacity background (`--card`).
- **Accent UI:** Vivid pops of Color with full opacity.
