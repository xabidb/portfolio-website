# DualEdge (Bellota) Design Tokens

Design tokens for the Bellota case study, optimized for Shadcn UI integration.

## Aesthetic: Industrial Utilitarian
Rugged, precise, and built for performance. Combining heritage engineering with modern interface design.

## CSS Variables

```css
@layer base {
  :root {
    --background: 0 0% 9%; /* #181616 */
    --foreground: 240 4% 85%; /* #D6D6DA */
    
    --card: 0 3% 15%; /* #282525 */
    --card-foreground: 240 4% 85%; /* #D6D6DA */
    
    --popover: 0 3% 15%; /* #282525 */
    --popover-foreground: 240 4% 85%; /* #D6D6DA */
    
    --primary: 357 65% 55%; /* #D5424B */
    --primary-foreground: 0 0% 100%;
    
    --secondary: 228 87% 91%; /* #D4DCFC - Sky Reflect */
    --secondary-foreground: 0 3% 15%;
    
    --muted: 228 87% 91% / 0.6; /* Sky Reflect with opacity */
    --muted-foreground: 228 87% 91% / 0.8;
    
    --accent: 357 65% 55%;
    --accent-foreground: 0 0% 100%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 240 4% 85% / 0.4;
    --input: 240 4% 85% / 0.4;
    --ring: 357 65% 55%;
    
    --radius: 0.25rem;
  }
}
```

## Typography

| Level | Font Family | Weight | Size | Letter Spacing |
|-------|-------------|--------|------|----------------|
| Display | Inter | 900 | 96px | -2px |
| Heading 1 | Inter | 800 | 48px | -0.02em |
| Heading 2 | Inter | 700 | 32px | - |
| Body | JetBrains Mono | 400 | 18px | - |

## Key Assets
- **Primary Color:** `#D5424B` (Bellota Red)
- **Neutral:** `#282525` (Deep Charcoal)
- **Off-White:** `#D6D6DA` (Refined Grey-White)
- **Highlight:** `#D4DCFC` (Sky Reflect)

## Text Tokens
- **Main Text:** `--foreground` (#D6D6DA) - High contrast for readability.
- **Secondary Text:** `--muted-foreground` (#D4DCFC at 80% opacity) - For descriptions and labels.
- **Contrast Text:** `--primary-foreground` (#FFFFFF) - Used on primary brand buttons/badges.

## Opacity & Transparency
- **Muted Elements:** 60% opacity (`--muted`)
- **Overlay/Borders:** 40% opacity (`--border`)
