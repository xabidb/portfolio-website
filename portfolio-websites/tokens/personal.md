# HardReset (Personal) Design Tokens

Design tokens for the Personal Portfolio case study, optimized for Shadcn UI integration.

## Aesthetic: Twilight Minimalist
A personal exploration of minimal interfaces and emotional resonance. A calm, atmospheric aesthetic balancing deep blues with warm highlights.

## CSS Variables

```css
@layer base {
  :root {
    --background: 210 7% 9%; /* #161718 */
    --foreground: 210 65% 88%; /* #D0E1F1 */
    
    --card: 217 37% 48% / 0.15; /* #4d71aa26 */
    --card-foreground: 210 65% 88%; /* #D0E1F1 */
    
    --popover: 210 7% 9%;
    --popover-foreground: 210 65% 88%;
    
    --primary: 39 77% 54%; /* #E3A830 */
    --primary-foreground: 210 7% 9%;
    
    --secondary: 217 37% 48%; /* #4D71AA */
    --secondary-foreground: 210 65% 88%;
    
    --muted: 217 37% 48% / 0.2;
    --muted-foreground: 210 65% 88% / 0.6;
    
    --accent: 39 77% 54% / 0.2;
    --accent-foreground: 39 77% 54%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 210 65% 88% / 0.4;
    --input: 210 65% 88% / 0.2;
    --ring: 39 77% 54%;
    
    --radius: 0.25rem;
  }
}
```

## Typography

| Level | Font Family | Weight | Size | Letter Spacing |
|-------|-------------|--------|------|----------------|
| Display | Outfit | 700 | 96px | -2px |
| Heading 1 | Outfit | 600 | 48px | - |
| Heading 2 | Outfit | 500 | 32px | - |
| Body | JetBrains Mono | 400 | 18px | - |

## Key Assets
- **Primary Color:** `#E3A830` (Sunset Yellow)
- **Secondary Color:** `#4D71AA` (Twilight Slate)
- **Background:** `#161718` (Midnight Blue)
- **Text:** `#D0E1F1` (Cloud Slated)

## Text Tokens
- **Main Text:** `--foreground` (#D0E1F1) - Atmospheric blue-white for reading.
- **Secondary Text:** `--muted-foreground` (#D0E1F1 at 60% opacity).
- **Golden Accents:** `--primary` (#E3A830) - For calls to action.

## Opacity & Transparency
- **Glass Cards:** 15% opacity twilight slate (`--card`).
- **Muted UI:** 20% opacity transitions (`--muted`).
