import { startSmoothScroll, stopSmoothScroll } from './smoothScroll';

class SkipperFix {
  private skipperButtons: HTMLElement[];
  private skipperModal: HTMLElement;

  constructor() {
    this.skipperButtons = [...document.querySelectorAll('.skipper_trigger')] as HTMLElement[];
    this.skipperModal = document.querySelector('#skipper-target') as HTMLElement;

    this.waitSkipper();
  }

  private waitSkipper() {
    const interval = setInterval(() => {
      this.skipperModal = document.querySelector('#skipper-target') as HTMLElement;
      const isReady = this.skipperModal;

      if (isReady) {
        console.log('skipper ready', this.skipperModal);
        clearInterval(interval);
        this.observeSkipper();
      }
    }, 200);

    setTimeout(() => clearInterval(interval), 5000);
  }

  private async observeSkipper() {
    if (!this.skipperModal) return;

    const modal = this.skipperModal;

    await this.setScrollAtribute();

    const observer = new MutationObserver(() => {
      const isClosed =
        getComputedStyle(this.skipperModal!).display === 'none' ||
        this.skipperModal!.classList.contains('collapsed');

      if (!isClosed) {
        console.log('[SkipperFix] disabled smooth scroll');
        stopSmoothScroll();
        this.setScrollAtribute();
      } else {
        console.log('[SkipperFix] enabled smooth scroll');
        startSmoothScroll();
      }
    });

    observer.observe(modal, { attributes: true, attributeFilter: ['style', 'class'] });
  }

  private async setScrollAtribute() {
    // Access shadow root of Skipper modal
    const { shadowRoot } = this.skipperModal as Element & { shadowRoot: ShadowRoot | null };

    if (!shadowRoot) {
      console.warn('[SkipperFix] Skipper shadowRoot not found');
      return;
    }

    try {
      const scrollable = await this.waitForScrollable(shadowRoot);
      scrollable.setAttribute('data-lenis-prevent', '');
      //   console.log('[SkipperFix] Applied data-lenis-prevent to #skipper-main-content', scrollable);
    } catch {
      console.error('[SkipperFix] Could not find #skipper-main-content in time');
    }
  }

  private waitForScrollable(shadowRoot: ShadowRoot): Promise<HTMLElement> {
    return new Promise((resolve, reject) => {
      const timeout = 5000;
      const start = performance.now();

      const check = () => {
        const el = shadowRoot.querySelector(
          '[data-testid="skipper-main-content"]',
        ) as HTMLElement | null;
        if (el) return resolve(el);

        if (performance.now() - start > timeout) {
          console.warn('[SkipperFix] Timeout: scrollable element not found');
          return reject(null);
        }

        requestAnimationFrame(check);
      };

      check();
    });
  }
}
export const skipperFix = () => {
  new SkipperFix();
};
export default skipperFix;
