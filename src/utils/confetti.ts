/**
 * Lightweight confetti effect for game completions
 * Pure CSS/JS implementation - no external dependencies
 */

export interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  duration?: number;
  colors?: string[];
}

const defaultColors = ['#f5a623', '#ffb940', '#22c55e', '#3b82f6', '#ec4899', '#8b5cf6'];

export function triggerConfetti(options: ConfettiOptions = {}) {
  const {
    particleCount = 50,
    spread = 70,
    duration = 3000,
    colors = defaultColors,
  } = options;

  // Create container if it doesn't exist
  let container = document.getElementById('confetti-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 99999;
      overflow: hidden;
    `;
    document.body.appendChild(container);
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createParticle(container, spread, duration, colors);
  }

  // Cleanup after animation
  setTimeout(() => {
    if (container && container.children.length === 0) {
      container.remove();
    }
  }, duration + 500);
}

function createParticle(
  container: HTMLElement,
  spread: number,
  duration: number,
  colors: string[]
) {
  const particle = document.createElement('div');
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 10 + 5;
  const startX = 50 + (Math.random() - 0.5) * spread;
  const startY = -10;
  const endX = startX + (Math.random() - 0.5) * spread * 2;
  const endY = 100 + Math.random() * 20;
  const rotation = Math.random() * 720 - 360;
  const delay = Math.random() * 200;

  // Random shape
  const shapes = ['square', 'circle', 'rectangle'];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  
  let borderRadius = '0';
  let width = `${size}px`;
  let height = `${size}px`;
  
  if (shape === 'circle') {
    borderRadius = '50%';
  } else if (shape === 'rectangle') {
    height = `${size * 0.4}px`;
  }

  particle.style.cssText = `
    position: absolute;
    left: ${startX}%;
    top: ${startY}%;
    width: ${width};
    height: ${height};
    background: ${color};
    border-radius: ${borderRadius};
    opacity: 1;
    transform: rotate(0deg);
    animation: confetti-fall ${duration}ms ease-out ${delay}ms forwards;
  `;

  // Add keyframes if not already added
  if (!document.getElementById('confetti-keyframes')) {
    const style = document.createElement('style');
    style.id = 'confetti-keyframes';
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(${rotation}deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  container.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, duration + delay + 100);
}

// Expose globally for easy use in inline scripts
if (typeof window !== 'undefined') {
  (window as any).triggerConfetti = triggerConfetti;
}
