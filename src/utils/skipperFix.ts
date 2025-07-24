import { destroySmoothScroll, initSmoothScroll } from './smoothScroll';

class SkipperFix {
  private skipperModal: HTMLElement;
  private isScrollDisabled = false;

  constructor() {
    this.skipperModal = document.querySelector('#skipper-target') as HTMLElement;

    this.waitSkipper();
  }

  private waitSkipper() {
    const interval = setInterval(() => {
      this.skipperModal = document.querySelector('#skipper-target') as HTMLElement;
      const isReady = this.skipperModal;

      if (isReady) {
        console.log('[ss.boot.skipper] => ready', this.skipperModal);
        clearInterval(interval);
        this.observeSkipper();
      }
    }, 200);

    setTimeout(() => clearInterval(interval), 5000);
  }

  private async observeSkipper() {
    if (!this.skipperModal) return;

    const modal = this.skipperModal;

    const observer = new MutationObserver(() => {
      const isClosed =
        getComputedStyle(this.skipperModal!).display === 'none' ||
        this.skipperModal!.classList.contains('collapsed');

      if (!isClosed && !this.isScrollDisabled) {
        console.log('[SkipperFix] Modal opened – disabling smooth scroll');
        destroySmoothScroll();
        this.isScrollDisabled = true;
      }

      if (isClosed && this.isScrollDisabled) {
        console.log('[SkipperFix] Modal closed – enabling smooth scroll');
        initSmoothScroll();
        this.isScrollDisabled = false;
      }
    });

    observer.observe(modal, { attributes: true, attributeFilter: ['style', 'class'] });
  }
}
export const skipperFix = () => {
  new SkipperFix();
};
export default skipperFix;
