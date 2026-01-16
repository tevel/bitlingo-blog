# BitLingo Design Guidance

This document outlines the design system, visual style, and mascot behavior specifications for BitLingo products.

---

## 🏷️ Brand Identity - App Name & Logo

### App Name: BitLingo

**Official spelling**: `BitLingo` (capital B, capital L, no space)

❌ **Incorrect**:
- `bitLingo` (lowercase b)
- `Bitlingo` (lowercase L)
- `bitlingo` (all lowercase)
- `Bit Lingo` (with space)
- `BIT LINGO` (all caps)

✅ **Correct**: `BitLingo`

### Name Meaning
The name "BitLingo" combines:
- **Bit** = Binary digit (computing) + our mascot "Bit the Robot"
- **Lingo** = Language/vocabulary

### Logo Typography

The app name uses a distinctive two-color split:

```
[Bit][Lingo]
 ↓     ↓
Gold  White
```

#### HTML Structure
```html
<!-- Header/Logo Style -->
<span class="app-title">
  <span class="title-bit">Bit</span><span class="title-lingo">Lingo</span>
</span>

<!-- Alternative with logo image -->
<div class="logo">
  <img src="/favicon.svg" alt="BitLingo" class="logo-img">
  <span class="logo-text">
    <span class="title-bit">Bit</span><span class="title-lingo">Lingo</span>
  </span>
</div>
```

#### CSS Styling
```css
/* App name styling */
.app-title {
  font-family: 'Nunito', system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 1px;
}

/* "Bit" - Gold color (matches mascot and accent) */
.title-bit {
  color: #ffd700;  /* var(--color-gold) */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* "Lingo" - White/primary text color */
.title-lingo {
  color: #f0f4f8;  /* var(--color-text-primary) */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Loading screen - larger version */
.loading-logo .title-bit {
  font-size: 3rem;
  font-weight: 900;
}
.loading-logo .title-lingo {
  font-size: 3rem;
  font-weight: 900;
}

/* Gradient alternative for special occasions */
.title-lingo-gradient {
  background: linear-gradient(180deg, #f0f4f8 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Logo Icon (Favicon)

The favicon is an SVG robot icon representing "Bit the Robot":

```
┌─────────────┐
│    [●]      │  ← Antenna LED
│     │       │
│ ┌───────┐   │
│ │ ○   ○ │   │  ← Robot face with LED eyes
│ │   ‿   │   │  ← Smile
│ └───────┘   │
│   │ ❤️ │    │  ← Body
│   └───┘    │
└─────────────┘
```

#### Favicon Files
| File | Size | Usage |
|------|------|-------|
| `favicon.svg` | Scalable | Modern browsers, primary |
| `favicon.ico` | 16x16, 32x32, 48x48 | Legacy browsers |
| `favicon-16x16.png` | 16x16 | Small icons |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `pwa-192x192.png` | 192x192 | PWA manifest |
| `pwa-512x512.png` | 512x512 | PWA splash screens |

### Brand Colors Summary

| Element | Color | Hex | CSS Variable |
|---------|-------|-----|--------------|
| "Bit" text | Gold | `#ffd700` | `--color-gold` |
| "Lingo" text | White | `#f0f4f8` | `--color-text-primary` |
| Primary accent | Gold | `#ffd700` | `--color-gold` |
| Secondary accent | Green | `#22c55e` | `--color-accent-green` |
| Background | Deep navy | `#0a1628` | `--color-bg-primary` |

### Usage Examples

#### In Headers
```html
<header class="main-header">
  <div class="logo">
    <img src="/favicon.svg" alt="BitLingo" class="logo-img">
    <span class="logo-text">
      <span class="title-bit">Bit</span><span class="title-lingo">Lingo</span>
    </span>
  </div>
</header>
```

#### In Body Text
When mentioning the app name in body text, use plain text:
- ✅ "Welcome to **BitLingo**!"
- ✅ "Download BitLingo today"
- ❌ "Download <span class="title-bit">Bit</span><span class="title-lingo">Lingo</span> today" (too complex)

#### Social Media & Marketing
- Twitter/X: `@BitLingoApp` or `#BitLingo`
- Hashtags: `#BitLingo` `#LearnWithBitLingo`
- Email: `support@bitlingo.app` (lowercase for email is standard)

### Complete Logo Component Example

```vue
<template>
  <div class="bitlingo-logo" :class="[size, variant]">
    <img v-if="showIcon" :src="iconSrc" alt="" class="logo-icon" />
    <span class="logo-text">
      <span class="title-bit">Bit</span><span class="title-lingo">Lingo</span>
    </span>
  </div>
</template>

<style scoped>
.bitlingo-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
}

.logo-text {
  font-family: 'Nunito', system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 1px;
}

.title-bit {
  color: var(--color-gold, #ffd700);
}

.title-lingo {
  color: var(--color-text-primary, #f0f4f8);
}

/* Size variants */
.bitlingo-logo.small .logo-icon { width: 20px; height: 20px; }
.bitlingo-logo.small .logo-text { font-size: 1rem; }

.bitlingo-logo.large .logo-icon { width: 48px; height: 48px; }
.bitlingo-logo.large .logo-text { font-size: 2.5rem; }

/* Dark variant (for light backgrounds) */
.bitlingo-logo.dark .title-bit { color: #b8860b; }
.bitlingo-logo.dark .title-lingo { color: #1a1a2e; }
</style>
```

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

## 🤖 Bit the Robot - Mascot Specification

### Character Overview
**Name**: Bit (named after BitLingo!)  
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
.bit-robot {
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

#### Introduction Messages (Bit introduces itself)
```javascript
const introductions = [
  "Hi! I'm Bit! Your learning buddy! 🤖❤️",
  "My name is Bit! How's it going? 😊",
  "Bit here! Ready to learn together? 🚀",
  "I'm Bit! Part of BitLingo! Get it? 😉",
  "Call me Bit! Your tiny robot friend! 🤖💙",
  "Bit's the name, learning's the game! 🎮",
  "Hey! Bit here to help you learn! 📚🤖",
  "Nice to meet you! I'm Bit! 🤝🤖",
  "Bit at your service! Let's learn! 🎓",
  "Just a little robot named Bit! 🤖✨",
]
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
2. **Wake on click**: Clicking Bit wakes them up
3. **Auto-return to happy**: Excited/celebrating states return to happy after 3 seconds
4. **Message auto-hide**: Speech bubbles hide after 4 seconds
5. **Idle activities**: When idle for 3+ seconds, robot performs random fun activities

### Idle Activities (18 total)

When the robot is idle (no speech bubble, not celebrating), it will randomly perform one of these fun activities every 3-5 seconds:

| Activity | Description | Animation |
|----------|-------------|-----------|
| `jumping` | Bouncing up and down | Body translateY |
| `learning` | Nodding head like reading | Head rotation |
| `reading` | Looking down, squinting | Head tilt + eye squint |
| `swimming` | Swaying with arm movements | Body sway + arms alternate |
| `sleeping` | Gentle breathing, closed eyes | Scale breathing + closed eyes |
| `dancing` | Happy bouncing with arm waves | Full body bounce + arms |
| `spinning` | Full 360° rotation | Body rotate 360deg |
| `waving` | Friendly wave gesture | Right arm wave |
| `dizzy` | Wobbly with spiral eyes | Body wobble + eye spin |
| `yoga` | Stretching pose | Arms extend up |
| `sneeze` | Cute robot sneeze | Quick jolt + head shake |
| `looking` | Curious look left/right | Head turn + pupil move |
| `bored` | Tapping foot | Leg tap + head droop |
| `excited` | Rapid bouncing | Fast bounce + antenna flash |
| `stretching` | Arms up stretch | Body elongate + arms up |
| `headbang` | Head bobbing to music | Head bob down/up |
| `pushups` | Doing pushups | Body tilt + arm push |
| `karate` | Karate chop pose | Arm chop + leg kick |

#### Idle Activity CSS Animations

```css
/* Jumping */
.activity-jumping {
  animation: robot-jump 0.5s ease-in-out infinite;
}
@keyframes robot-jump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Learning - head nodding */
.activity-learning .robot-head {
  animation: robot-nod 0.8s ease-in-out infinite;
}
@keyframes robot-nod {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(5deg); }
  70% { transform: rotate(-5deg); }
}

/* Reading */
.activity-reading .robot-head {
  animation: robot-read 2s ease-in-out infinite;
}
.activity-reading .eye {
  animation: robot-eye-read 2s ease-in-out infinite;
}
@keyframes robot-read {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(2px) rotate(-3deg); }
}
@keyframes robot-eye-read {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.7); }
}

/* Swimming */
.activity-swimming {
  animation: robot-swim 1.5s ease-in-out infinite;
}
.activity-swimming .arm-left {
  animation: robot-swim-arm-left 0.75s ease-in-out infinite;
}
.activity-swimming .arm-right {
  animation: robot-swim-arm-right 0.75s ease-in-out infinite;
}
@keyframes robot-swim {
  0%, 100% { transform: translateX(-3px) rotate(-2deg); }
  50% { transform: translateX(3px) rotate(2deg); }
}
@keyframes robot-swim-arm-left {
  0%, 100% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
}
@keyframes robot-swim-arm-right {
  0%, 100% { transform: rotate(20deg); }
  50% { transform: rotate(-20deg); }
}

/* Sleeping */
.activity-sleeping {
  animation: robot-sleep 2s ease-in-out infinite;
}
.activity-sleeping .eye {
  height: 2px !important;
  border-radius: 1px !important;
}
@keyframes robot-sleep {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

/* Dancing */
.activity-dancing {
  animation: robot-dance 0.4s ease-in-out infinite;
}
.activity-dancing .arm-left {
  animation: robot-dance-arm 0.4s ease-in-out infinite;
}
.activity-dancing .arm-right {
  animation: robot-dance-arm 0.4s ease-in-out infinite reverse;
}
@keyframes robot-dance {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-5px) rotate(3deg); }
}
@keyframes robot-dance-arm {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(30deg); }
}

/* Spinning */
.activity-spinning {
  animation: robot-spin 1s ease-in-out infinite;
}
@keyframes robot-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Waving */
.activity-waving .arm-right {
  animation: robot-wave 0.5s ease-in-out infinite;
  transform-origin: top center;
}
@keyframes robot-wave {
  0%, 100% { transform: rotate(-10deg); }
  25% { transform: rotate(-45deg); }
  75% { transform: rotate(-45deg); }
}

/* Dizzy */
.activity-dizzy {
  animation: robot-dizzy 0.3s ease-in-out infinite;
}
.activity-dizzy .eye {
  animation: robot-dizzy-eyes 0.5s linear infinite;
}
@keyframes robot-dizzy {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
@keyframes robot-dizzy-eyes {
  0% { transform: scale(1); }
  25% { transform: scale(0.8) rotate(90deg); }
  50% { transform: scale(1.1) rotate(180deg); }
  75% { transform: scale(0.9) rotate(270deg); }
  100% { transform: scale(1) rotate(360deg); }
}

/* Yoga */
.activity-yoga {
  animation: robot-yoga-body 3s ease-in-out infinite;
}
.activity-yoga .arm-left {
  animation: robot-yoga-arm-left 3s ease-in-out infinite;
}
.activity-yoga .arm-right {
  animation: robot-yoga-arm-right 3s ease-in-out infinite;
}
@keyframes robot-yoga-body {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes robot-yoga-arm-left {
  0%, 100% { transform: rotate(10deg); }
  50% { transform: rotate(-80deg); }
}
@keyframes robot-yoga-arm-right {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(80deg); }
}

/* Sneeze */
.activity-sneeze {
  animation: robot-sneeze 1.5s ease-in-out infinite;
}
.activity-sneeze .robot-head {
  animation: robot-sneeze-head 1.5s ease-in-out infinite;
}
@keyframes robot-sneeze {
  0%, 60% { transform: translateY(0); }
  65% { transform: translateY(-8px); }
  70% { transform: translateY(5px); }
  80%, 100% { transform: translateY(0); }
}
@keyframes robot-sneeze-head {
  0%, 60% { transform: rotate(0deg); }
  65% { transform: rotate(-10deg); }
  70% { transform: rotate(15deg); }
  80%, 100% { transform: rotate(0deg); }
}

/* Looking */
.activity-looking .robot-head {
  animation: robot-look 2s ease-in-out infinite;
}
.activity-looking .pupil {
  animation: robot-look-pupil 2s ease-in-out infinite;
}
@keyframes robot-look {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}
@keyframes robot-look-pupil {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

/* Bored */
.activity-bored .leg-right {
  animation: robot-tap-foot 0.3s ease-in-out infinite;
}
.activity-bored .robot-head {
  animation: robot-bored-head 2s ease-in-out infinite;
}
@keyframes robot-tap-foot {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-15deg); }
}
@keyframes robot-bored-head {
  0%, 45%, 55%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px); }
}

/* Excited */
.activity-excited {
  animation: robot-excited 0.2s ease-in-out infinite;
}
.activity-excited .antenna-ball {
  animation: robot-excited-antenna 0.1s ease-in-out infinite;
}
@keyframes robot-excited {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
}
@keyframes robot-excited-antenna {
  0%, 100% { background: #ff4444; box-shadow: 0 0 6px #ff4444; }
  50% { background: #44ff44; box-shadow: 0 0 10px #44ff44; }
}

/* Stretching */
.activity-stretching {
  animation: robot-stretch-body 2s ease-in-out infinite;
}
.activity-stretching .arm-left,
.activity-stretching .arm-right {
  animation: robot-stretch-arms 2s ease-in-out infinite;
}
@keyframes robot-stretch-body {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.05) translateY(-3px); }
}
@keyframes robot-stretch-arms {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-120deg); }
}

/* Headbang */
.activity-headbang .robot-head {
  animation: robot-headbang 0.25s ease-in-out infinite;
}
@keyframes robot-headbang {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-15deg) translateY(3px); }
}

/* Pushups */
.activity-pushups {
  animation: robot-pushup 1s ease-in-out infinite;
}
.activity-pushups .arm-left,
.activity-pushups .arm-right {
  animation: robot-pushup-arms 1s ease-in-out infinite;
}
@keyframes robot-pushup {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(10px) rotate(-15deg); }
}
@keyframes robot-pushup-arms {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(-60deg); }
}

/* Karate */
.activity-karate {
  animation: robot-karate 0.8s ease-in-out infinite;
}
.activity-karate .arm-right {
  animation: robot-karate-chop 0.8s ease-in-out infinite;
}
.activity-karate .leg-left {
  animation: robot-karate-kick 0.8s ease-in-out infinite;
}
@keyframes robot-karate {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}
@keyframes robot-karate-chop {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(-90deg); }
}
@keyframes robot-karate-kick {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(30deg); }
}
```

#### Idle Activity JavaScript Logic

```javascript
const IDLE_ACTIVITIES = [
  'jumping', 'learning', 'reading', 'swimming', 'sleeping', 'dancing',
  'spinning', 'waving', 'dizzy', 'yoga', 'sneeze', 'looking',
  'bored', 'excited', 'stretching', 'headbang', 'pushups', 'karate'
]

let idleTimeout = null
let activityDuration = null
let currentActivity = null

function startIdleActivity() {
  // Pick random activity
  const activity = IDLE_ACTIVITIES[Math.floor(Math.random() * IDLE_ACTIVITIES.length)]
  currentActivity = activity
  
  // Apply activity class to robot element
  robotElement.classList.add(`activity-${activity}`)
  
  // Clear activity after 3-5 seconds
  activityDuration = setTimeout(() => {
    robotElement.classList.remove(`activity-${currentActivity}`)
    currentActivity = null
    scheduleIdleActivity()
  }, 3000 + Math.random() * 2000)
}

function scheduleIdleActivity() {
  clearTimeout(idleTimeout)
  idleTimeout = setTimeout(() => {
    // Only start activity if not in an active mood
    if (!showingMessage && currentMood !== 'celebrating') {
      startIdleActivity()
    } else {
      scheduleIdleActivity()
    }
  }, 3000)
}
```

### Mega Celebration Dance

When confetti appears (achievements, level ups), the robot performs an epic 4-8 second mega dance with all body parts going crazy!

```css
/* MEGA CELEBRATION DANCE - Triggered with confetti */
.mega-dance {
  animation: mega-dance-body 4s ease-in-out infinite;
}
.mega-dance .robot-head {
  animation: mega-dance-head 1s ease-in-out infinite;
}
.mega-dance .arm-left {
  animation: mega-dance-arm-left 0.5s ease-in-out infinite;
}
.mega-dance .arm-right {
  animation: mega-dance-arm-right 0.5s ease-in-out infinite;
}
.mega-dance .leg-left {
  animation: mega-dance-leg-left 0.25s ease-in-out infinite;
}
.mega-dance .leg-right {
  animation: mega-dance-leg-right 0.25s ease-in-out infinite;
}
.mega-dance .eye {
  animation: mega-dance-eyes 0.3s ease-in-out infinite;
}
.mega-dance .antenna-ball {
  animation: mega-dance-antenna 0.15s ease-in-out infinite;
}

/* Body: jumping, spinning 360°, bouncing, scaling */
@keyframes mega-dance-body {
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  5% { transform: translateY(-15px) rotate(-10deg) scale(1.1); }
  15% { transform: translateY(-20px) rotate(10deg) scale(1.15); }
  35% { transform: translateY(-25px) rotate(15deg) scale(1.2); }
  45% { transform: translateX(-10px) translateY(-5px) rotate(-5deg); }
  55% { transform: translateX(10px) translateY(-10px) rotate(8deg); }
  70% { transform: translateY(-30px) rotate(360deg) scale(1.1); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
}

/* Head bobbing crazy */
@keyframes mega-dance-head {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-20deg) translateY(-3px); }
  40% { transform: rotate(20deg) translateY(2px); }
  60% { transform: rotate(-15deg) translateY(-2px); }
  80% { transform: rotate(15deg) translateY(3px); }
}

/* Arms going wild */
@keyframes mega-dance-arm-left {
  0%, 100% { transform: rotate(10deg); }
  25% { transform: rotate(-120deg); }
  50% { transform: rotate(45deg); }
  75% { transform: rotate(-90deg); }
}
@keyframes mega-dance-arm-right {
  0%, 100% { transform: rotate(-10deg); }
  25% { transform: rotate(120deg); }
  50% { transform: rotate(-45deg); }
  75% { transform: rotate(90deg); }
}

/* Legs stomping */
@keyframes mega-dance-leg-left {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(-25deg) translateY(-5px); }
}
@keyframes mega-dance-leg-right {
  0%, 100% { transform: rotate(0deg) translateY(0); }
  50% { transform: rotate(25deg) translateY(-5px); }
}

/* Eyes flashing rainbow colors */
@keyframes mega-dance-eyes {
  0%, 100% { transform: scale(1); background: #00ff88; box-shadow: 0 0 6px #00ff88; }
  25% { transform: scale(1.3); background: #ff00ff; box-shadow: 0 0 12px #ff00ff; }
  50% { transform: scale(0.8); background: #ffff00; box-shadow: 0 0 15px #ffff00; }
  75% { transform: scale(1.2); background: #00ffff; box-shadow: 0 0 10px #00ffff; }
}

/* Antenna rainbow disco */
@keyframes mega-dance-antenna {
  0% { background: #ff0000; box-shadow: 0 0 15px #ff0000; transform: scale(1); }
  16% { background: #ff8800; box-shadow: 0 0 15px #ff8800; transform: scale(1.5); }
  33% { background: #ffff00; box-shadow: 0 0 15px #ffff00; transform: scale(1); }
  50% { background: #00ff00; box-shadow: 0 0 15px #00ff00; transform: scale(1.5); }
  66% { background: #0088ff; box-shadow: 0 0 15px #0088ff; transform: scale(1); }
  83% { background: #ff00ff; box-shadow: 0 0 15px #ff00ff; transform: scale(1.5); }
  100% { background: #ff0000; box-shadow: 0 0 15px #ff0000; transform: scale(1); }
}
```

### Bit's Sound Effects

Bit makes synthesized sounds using the Web Audio API. Each phrase category triggers a different sound.

#### Sound Types
| Sound | Trigger | Description |
|-------|---------|-------------|
| `robotGreeting` | Greetings, wake up | Cheerful ascending melody (C5→E5→G5) |
| `robotEncouragement` | Encouragement, motivation | Warm supportive tone (A4→C5→E5) |
| `robotCelebration` | Achievement, level up, celebration | Exciting fanfare arpeggio |
| `robotTip` | Tips, features, hints | Thoughtful ascending tones (G4→A4→B4) |
| `robotJoke` | Jokes, fun facts | Playful silly beeps |
| `robotQuiz` | Quiz questions, dictionary quiz | Curious questioning tone |
| `robotThinking` | Thinking mood, idle | Contemplative low beeps |
| `robotExcited` | Excited mood, perfect score | High energy rapid beeps |
| `robotBeep` | Click interaction | Simple beep-boop sequence |

#### Sound Implementation (Web Audio API)

```javascript
// Base tone generator
const playTone = (frequency, duration, type = 'sine', volume = 0.3) => {
  const ctx = new AudioContext()
  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()
  
  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)
  
  oscillator.type = type // 'sine', 'square', 'triangle', 'sawtooth'
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
  
  // Envelope (fade in/out)
  gainNode.gain.setValueAtTime(0, ctx.currentTime)
  gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
  
  oscillator.start(ctx.currentTime)
  oscillator.stop(ctx.currentTime + duration)
}

// Example: Robot Greeting Sound
const playRobotGreetingSound = () => {
  const notes = [
    { freq: 523, delay: 0, duration: 0.1 },     // C5
    { freq: 659, delay: 0.12, duration: 0.1 },  // E5
    { freq: 784, delay: 0.24, duration: 0.15 }, // G5
  ]
  notes.forEach(n => {
    setTimeout(() => playTone(n.freq, n.duration, 'sine', 0.15), n.delay * 1000)
  })
}

// Example: Robot Celebration Sound
const playRobotCelebrationSound = () => {
  const notes = [
    { freq: 523, delay: 0, duration: 0.08 },
    { freq: 659, delay: 0.08, duration: 0.08 },
    { freq: 784, delay: 0.16, duration: 0.08 },
    { freq: 1047, delay: 0.24, duration: 0.2 },
    { freq: 784, delay: 0.35, duration: 0.08 },
    { freq: 1047, delay: 0.43, duration: 0.25 },
  ]
  notes.forEach(n => {
    setTimeout(() => playTone(n.freq, n.duration, 'square', 0.1), n.delay * 1000)
  })
}

// Example: Robot Joke Sound (playful)
const playRobotJokeSound = () => {
  const notes = [
    { freq: 600, delay: 0, duration: 0.06 },
    { freq: 800, delay: 0.08, duration: 0.06 },
    { freq: 500, delay: 0.16, duration: 0.08 },
    { freq: 900, delay: 0.26, duration: 0.1 },
    { freq: 400, delay: 0.38, duration: 0.12 },
  ]
  notes.forEach(n => {
    setTimeout(() => playTone(n.freq, n.duration, 'square', 0.1), n.delay * 1000)
  })
}

// Example: Robot Thinking Sound (contemplative)
const playRobotThinkingSound = () => {
  const notes = [
    { freq: 350, delay: 0, duration: 0.15 },
    { freq: 380, delay: 0.2, duration: 0.15 },
    { freq: 350, delay: 0.4, duration: 0.2 },
  ]
  notes.forEach(n => {
    setTimeout(() => playTone(n.freq, n.duration, 'sine', 0.08), n.delay * 1000)
  })
}

// Example: Robot Excited Sound (high energy)
const playRobotExcitedSound = () => {
  const notes = [
    { freq: 800, delay: 0, duration: 0.05 },
    { freq: 1000, delay: 0.06, duration: 0.05 },
    { freq: 1200, delay: 0.12, duration: 0.05 },
    { freq: 1000, delay: 0.18, duration: 0.05 },
    { freq: 1200, delay: 0.24, duration: 0.08 },
  ]
  notes.forEach(n => {
    setTimeout(() => playTone(n.freq, n.duration, 'square', 0.1), n.delay * 1000)
  })
}

// Sound category mapping for phrases
const PHRASE_CATEGORY_SOUNDS = {
  greetings: 'robotGreeting',
  encouragement: 'robotEncouragement',
  celebration: 'robotCelebration',
  features: 'robotTip',
  tips: 'robotTip',
  quiz: 'robotQuiz',
  idle: 'robotThinking',
  motivation: 'robotEncouragement',
  streak: 'robotCelebration',
  levelUp: 'robotCelebration',
  achievement: 'robotCelebration',
  funFacts: 'robotTip',
  jokes: 'robotJoke',
  compliments: 'robotEncouragement',
  wakeUp: 'robotGreeting',
  goodNight: 'robotThinking',
  dictionaryQuiz: 'robotQuiz',
  clickPrompt: 'robotBeep',
  introduction: 'robotGreeting',
}
```

#### Sound Settings
- Sounds can be toggled on/off via settings
- Respect user's preference with `localStorage.getItem('bitlingo_sounds')`
- Only play sounds when `soundEnabled` is true

### Integration Points

Bit should react to:
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

*Last updated: January 16, 2026*
*Version: 1.2 - Added Brand Identity section with app name styling and logo guidelines*
