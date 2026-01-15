# BitLingo Design Guidance

This document outlines the design system, visual style, and mascot behavior specifications for BitLingo products.

---

## 🎨 Design System

### Color Palette

#### Primary Colors (Dark Theme - Default)
```css
--color-bg-primary: #0a1628;      /* Deep navy background */
--color-bg-secondary: #0f1e36;    /* Slightly lighter navy */
--color-bg-tertiary: #152847;     /* Card backgrounds */
--color-bg-card: #1a3055;         /* Elevated cards */

--color-text-primary: #f0f4f8;    /* Main text - off-white */
--color-text-secondary: #94a3b8;  /* Secondary text - muted */
--color-text-muted: #64748b;      /* Tertiary text */
```

#### Accent Colors
```css
--color-gold: #ffd700;            /* Primary accent - gold */
--color-gold-dark: #b8860b;       /* Gold shadow/border */
--color-accent-green: #22c55e;    /* Success states */
--color-accent-red: #ef4444;      /* Error/danger states */
--color-accent-blue: #3b82f6;     /* Info/links */
--color-accent-purple: #8b5cf6;   /* Special/premium */
```

#### Gradients
```css
/* Gold gradient for CTAs */
--gradient-gold: linear-gradient(180deg, #ffd700 0%, #f0b800 100%);
--gradient-gold-shine: linear-gradient(180deg, #ffe44d 0%, #ffd700 50%, #f0b800 100%);

/* Button gradients */
--gradient-button-orange: linear-gradient(180deg, #ff8c00 0%, #ff6600 100%);
--gradient-button-green: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
--gradient-button-blue: linear-gradient(180deg, #1e5a8a 0%, #153d5e 100%);
--gradient-button-red: linear-gradient(180deg, #dc2626 0%, #b91c1c 100%);
```

### Typography

```css
--font-primary: 'Nunito', system-ui, sans-serif;
--font-display: 'Nunito', system-ui, sans-serif;
--font-title: 'Nunito', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

#### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

### Shadows

```css
/* 3D button effect (Clash Royale inspired) */
--shadow-3d: 0 4px 0 rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2);
--shadow-3d-sm: 0 2px 0 rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2);

/* Card shadows */
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 20px rgba(255, 215, 0, 0.3);
```

---

## 🎮 UI Style Guidelines

### Overall Aesthetic
- **Inspired by**: Clash Royale / Mobile Gaming
- **Feel**: Fun, engaging, rewarding, game-like
- **Key elements**: 
  - 3D button effects with bottom borders
  - Gold accents for important elements
  - Glowing effects for interactive elements
  - Card-based layouts

### Buttons

#### Primary Button (CTA)
```css
.btn-primary {
  background: var(--gradient-button-orange);
  border: 3px solid #ffd700;
  border-bottom: 6px solid #b35900;
  border-radius: var(--radius-lg);
  color: white;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  box-shadow: 
    0 6px 0 #8a4500,
    0 10px 25px rgba(0, 0, 0, 0.5),
    inset 0 2px 0 rgba(255, 255, 255, 0.4);
}

.btn-primary:active {
  transform: translateY(5px);
  border-bottom-width: 1px;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--gradient-button-blue);
  border-bottom: 4px solid #153d5e;
  box-shadow: 0 4px 0 #102d47;
}
```

### Cards

```css
.card {
  background: linear-gradient(180deg, #1a4a6e 0%, #0f3555 100%);
  border: 2px solid rgba(255, 215, 0, 0.4);
  border-radius: var(--radius-lg);
  box-shadow: 
    inset 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.15),
    0 3px 0 rgba(0, 0, 0, 0.4);
}
```

### Interactive Elements
- Buttons should have a "pressed" state (translateY + reduced shadow)
- Gold glow animation on hover for important elements
- Smooth transitions (0.2s ease)

---

## 🤖 Pixel the Robot - Mascot Specification

### Character Overview
**Name**: Pixel  
**Type**: Friendly robot companion  
**Role**: Learning encourager, progress celebrator, user guide

### Visual Design

#### Structure (CSS-based, no images)
```
        [●]          ← Antenna ball (blinking LED)
         |           ← Antenna stem
    ┌─────────┐
  ◯ │  ●   ●  │ ◯    ← Headphones + Eyes (LED style)
    │    ‿    │      ← Mouth (changes with mood)
    └─────────┘
       │ ❤️ │        ← Body with heart screen
       │○  ○│        ← Buttons
       └────┘
       ┌┐  ┌┐        ← Legs
```

#### Color Scheme
```css
/* Robot body */
--robot-body: linear-gradient(135deg, #5a5a6e 0%, #3d3d4d 100%);
--robot-border: #6b6b80;

/* Screen face */
--screen-bg: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%);
--screen-glow: #00ff88;  /* LED green for eyes/mouth */

/* Headphones */
--headphone-color: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);

/* Antenna LED */
--antenna-red: #ff4444;
--antenna-green: #44ff44;
```

#### Dimensions
```css
.pixel-robot {
  width: 80px;
  height: 110px;
}

.robot-head {
  width: 60px;
  height: 50px;
}

.eye {
  width: 10px;
  height: 10px;
}
```

### Mood States & Expressions

| Mood | Eye Style | Mouth Style | Animation | Trigger |
|------|-----------|-------------|-----------|---------|
| `idle` | Normal circles | Neutral line | Subtle idle | Default state |
| `happy` | Curved up (happy eyes) | Smile curve | None | Word learned |
| `excited` | Sparkle animation | Open "O" | Bouncing | High quiz score |
| `celebrating` | Sparkle animation | Open "O" + Wide | Bouncing + particles | Achievement/Level up |
| `thinking` | Looking up animation | Small "o" to side | Tilting | Processing |
| `sleeping` | Closed (lines) | Small line | Gentle bob | Idle 5+ mins |
| `encouraging` | Determined (squished) | Determined line | None | Poor quiz score |
| `proud` | Happy curves | Big smile | None | Milestone reached |
| `wave` | Normal | Smile | Arm waving | Page load greeting |

### Eye Animations

```css
/* Normal eye */
.eye {
  width: 10px;
  height: 10px;
  background: #00ff88;
  border-radius: 50%;
  box-shadow: 0 0 6px #00ff88;
}

/* Happy eye (curved) */
.eye-happy {
  height: 6px;
  border-radius: 6px 6px 0 0;
}

/* Closed eye (sleeping) */
.eye-closed {
  height: 3px;
  border-radius: 3px;
}

/* Sparkle eye (excited/celebrating) */
.eye-sparkle {
  animation: sparkle 0.5s ease infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

### Mouth Animations

```css
/* Neutral mouth */
.mouth-neutral {
  width: 16px;
  height: 3px;
  border-radius: 2px;
}

/* Smile */
.mouth-smile {
  height: 6px;
  border-radius: 0 0 8px 8px;
}

/* Big smile */
.mouth-smile-big {
  height: 8px;
  width: 20px;
  border-radius: 0 0 10px 10px;
}

/* Open (excited) */
.mouth-open {
  height: 10px;
  width: 14px;
  border-radius: 50%;
  animation: mouth-wow 0.5s ease infinite;
}
```

### Body Animations

```css
/* Bouncing (excited/celebrating) */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Sleeping bob */
@keyframes sleep-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

/* Thinking tilt */
@keyframes think-tilt {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
}

/* Arm wave */
@keyframes wave {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(-40deg); }
}
```

### Antenna LED Behavior

```css
.antenna-ball {
  width: 8px;
  height: 8px;
  background: #ff4444;  /* Red when idle */
  border-radius: 50%;
  box-shadow: 0 0 6px #ff4444;
}

/* Pulsing when active */
@keyframes antenna-pulse {
  0%, 100% { 
    background: #ff4444;
    box-shadow: 0 0 6px #ff4444;
  }
  50% { 
    background: #44ff44;
    box-shadow: 0 0 10px #44ff44;
  }
}
```

### Speech Bubbles

```css
.speech-bubble {
  background: var(--color-bg-card);
  border: 2px solid var(--color-accent-primary);
  border-radius: 16px;
  padding: 8px 14px;
  position: absolute;
  bottom: 100%;
  /* Tail pointing down */
}

.speech-bubble::after {
  content: '';
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--color-accent-primary);
}
```

### Behavior Logic

#### Greeting Messages (by time)
```javascript
const greetings = {
  night: "Night owl learning! 🦉",      // 00:00-05:59
  morning: "Good morning! ☀️",           // 06:00-11:59
  afternoon: "Good afternoon! 🌤️",       // 12:00-16:59
  evening: "Good evening! 🌙",           // 17:00-20:59
  lateNight: "Late night study! 📚"      // 21:00-23:59
}
```

#### Reaction Messages
```javascript
const reactions = {
  happy: ["Great job!", "You're doing amazing!", "Keep it up!", "Wonderful!"],
  excited: ["WOW! Amazing!", "You're on fire! 🔥", "Incredible!", "Superstar!"],
  celebrating: ["🎉 CONGRATULATIONS!", "You did it!", "Achievement unlocked!", "Level up!"],
  encouraging: ["You can do it!", "Don't give up!", "Almost there!", "I believe in you!"],
  proud: ["I'm so proud of you!", "Look at you go!", "You're the best!"],
  sleeping: ["Zzz...", "💤", "Recharging...", "*beep boop*"],
}
```

#### Auto-behaviors
1. **Sleep after inactivity**: Falls asleep after 5 minutes of no user interaction
2. **Wake on click**: Clicking Pixel wakes them up
3. **Auto-return to happy**: Excited/celebrating states return to happy after 3 seconds
4. **Message auto-hide**: Speech bubbles hide after 4 seconds

### Integration Points

Pixel should react to:
1. **Quiz completion** → Score-based reaction (perfect: celebrating, >80%: excited, >50%: happy, <50%: encouraging)
2. **Achievement unlock** → Celebrating mood + achievement name in bubble
3. **Level up** → Celebrating mood + level number
4. **Word learned** → Random happy/excited/proud reaction
5. **Page load** → Wave + time-based greeting
6. **Idle timeout** → Sleeping mood

---

## 🎨 Theme Variants

### Ocean Theme
```css
.theme-ocean {
  --color-bg-primary: #0a1929;
  --color-bg-secondary: #0d2137;
  --color-accent-primary: #29b6f6;
}
```

### Forest Theme
```css
.theme-forest {
  --color-bg-primary: #0d1f0d;
  --color-bg-secondary: #132613;
  --color-accent-primary: #4caf50;
}
```

### Sunset Theme
```css
.theme-sunset {
  --color-bg-primary: #1a0a0a;
  --color-bg-secondary: #2d1515;
  --color-accent-primary: #ff7043;
}
```

### Neon Theme
```css
.theme-neon {
  --color-bg-primary: #0a0a1a;
  --color-bg-secondary: #12122a;
  --color-accent-primary: #e040fb;
}
```

### Midnight Theme
```css
.theme-midnight {
  --color-bg-primary: #000000;
  --color-bg-secondary: #0a0a0a;
  --color-accent-primary: #90caf9;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 480px) { /* Small phones */ }
@media (min-width: 640px) { /* Large phones */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

---

## ✨ Animation Guidelines

### Timing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.4, 0, 0.6, 1);
```

### Duration
- **Micro-interactions**: 150-200ms
- **Page transitions**: 300-400ms
- **Celebration animations**: 500-1000ms
- **Ambient loops**: 1500-3000ms

### Best Practices
1. Use `transform` and `opacity` for smooth animations
2. Avoid animating `width`, `height`, `margin`, `padding`
3. Use `will-change` sparingly for known animations
4. Respect `prefers-reduced-motion` media query

---

*Last updated: January 15, 2026*
*Version: 1.0*
