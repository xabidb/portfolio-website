# InvisibleValue (Irizar Light) Design Tokens

Design tokens for the Irizar Light Mode case study, optimized for Shadcn UI integration.

## Aesthetic: Premium Minimalist
Focused on clarity, accessibility, and high-value service. A clean, airy aesthetic for sustainable travel interfaces.

## CSS Variables

```css
@layer base {
  :root {
    --background: 189 31% 93%; /* #E6F2F4 */
    --foreground: 200 6% 15%; /* #252728 */
    
    --card: 0 0% 100% / 0.4; /* White with transparency */
    --card-foreground: 200 6% 15%; /* #252728 */
    
    --popover: 0 0% 100% / 0.8;
    --popover-foreground: 200 6% 15%;
    
    --primary: 190 38% 39%; /* #3E7F8B */
    --primary-foreground: 189 31% 93%;
    
    --secondary: 190 38% 39% / 0.2;
    --secondary-foreground: 200 6% 15%;
    
    --muted: 200 6% 15% / 0.1;
    --muted-foreground: 200 6% 15% / 0.7;
    
    --accent: 190 38% 39% / 0.1;
    --accent-foreground: 190 38% 39%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 190 38% 39% / 0.5; /* #3e7f8b80 */
    --input: 190 38% 39% / 0.2;
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
- **Main Text:** `#252728` (Charcoal)
- **Background:** `#E6F2F4` (Off-White)

## Text Tokens
- **Main Text:** `--foreground` (#252728) - Deep charcoal for maximum legibility.
- **Secondary Text:** `--muted-foreground` (#252728 at 70% opacity).
- **Brand Emphasis:** `--primary` (#3E7F8B).

## Opacity & Transparency
- **Card Backgrounds:** 40% opacity white (`--card`).
- **Input Borders:** 20-50% opacity green (`--border`).
