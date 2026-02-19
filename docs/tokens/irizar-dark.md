# VisualNoise (Irizar Dark) Design Tokens

Design tokens for the Irizar Dark Mode case study, optimized for Shadcn UI integration.

## Aesthetic: Stealth Modernism
A high-performance aesthetic for Irizar's long-distance and sustainable travel systems. Stealthy, modern, and efficient.

## CSS Variables

```css
@layer base {
  .dark {
    --background: 180 6% 9%; /* #161818 */
    --foreground: 189 31% 93%; /* #E6F2F4 */
    
    --card: 200 6% 15%; /* #252728 */
    --card-foreground: 189 31% 93%; /* #E6F2F4 */
    
    --popover: 200 6% 15%; /* #252728 */
    --popover-foreground: 189 31% 93%; /* #E6F2F4 */
    
    --primary: 190 38% 39%; /* #3E7F8B */
    --primary-foreground: 189 31% 93%;
    
    --secondary: 189 31% 93% / 0.6; /* Off-White with Opacity */
    --secondary-foreground: 180 6% 9%;
    
    --muted: 180 6% 9%;
    --muted-foreground: 189 31% 93% / 0.6;
    
    --accent: 190 38% 39%;
    --accent-foreground: 189 31% 93%;
    
    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 189 31% 93% / 0.1;
    --input: 189 31% 93% / 0.1;
    --ring: 190 38% 39%;
    
    --radius: 0.5rem;
  }
}
```

## Typography

| Level | Font Family | Weight | Size | Letter Spacing |
|-------|-------------|--------|------|----------------|
| Display | Encode Sans | 800 | 96px | - |
| Heading 1 | Encode Sans | 700 | 48px | - |
| Heading 2 | Encode Sans | 600 | 32px | - |
| Body | JetBrains Mono | 400 | 18px | - |

## Key Assets
- **Primary Color:** `#3E7F8B` (Irizar Green)
- **Neutral:** `#252728` (Charcoal)
- **Background:** `#161818` (Matte Black)

## Text Tokens
- **Main Text:** `--foreground` (#E6F2F4) - High contrast against dark background.
- **Secondary Text:** `--muted-foreground` (#E6F2F4 at 60% opacity).
- **Interactive:** `--primary` (#3E7F8B) - For links and key emphasis.

## Opacity & Transparency
- **Glass/Overlays:** 10% opacity on borders (`--border`) and backgrounds.
- **Muted States:** 60% opacity on secondary content.
