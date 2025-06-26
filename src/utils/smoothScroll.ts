import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { getWebflowEnv } from './webflowEnvChecks';
gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  window.addEventListener('load', () => {
    const env = getWebflowEnv();

    if (env === 'editor') {
      console.log('[SmoothScroll] Editor detected — disabling Lenis.');
      disableScrollStyles();
      return;
    }

    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      infinite: false,
    });

    function raf(time: number) {
      if (!lenis) return;
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Important: recalculate ScrollTrigger points
    ScrollTrigger.refresh();
  });
}

export function lenisInstance() {
  return lenis;
}

export function destroySmoothScroll() {
  if (!lenis) return;

  lenis.stop();
  lenis.destroy();
  lenis = null;

  disableScrollStyles();
}

function disableScrollStyles() {
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.overflow = '';
}

export function stopSmoothScroll() {
  lenis?.stop();
}

export function startSmoothScroll() {
  lenis?.start();
}
