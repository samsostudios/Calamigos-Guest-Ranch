import { destroySmoothScroll, initSmoothScroll } from '$utils/smoothScroll';

declare global {
  interface Window {
    bookNow?: (opts: { hotelId: string; roomId?: string }) => void;
  }
}

class Selfbook {
  private dataTags: HTMLButtonElement[];
  private dataClasses: HTMLElement[];
  private selfbookButtons: HTMLElement[];
  private isScrollDisabled: boolean;
  private observer: MutationObserver | null = null;

  constructor() {
    this.dataTags = [...document.querySelectorAll('[data-selfbook-button]')] as HTMLButtonElement[];
    this.dataClasses = [...document.querySelectorAll('.selfbook_trigger')] as HTMLButtonElement[];
    this.selfbookButtons = [...this.dataTags, ...this.dataClasses];
    this.isScrollDisabled = false;

    console.log(';here', this.dataTags, this.dataClasses, this.selfbookButtons);

    this.setListeners();
    this.initModal();
  }
  private setListeners() {
    this.selfbookButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (typeof window.bookNow === 'function') {
          console.log('[selfbook] =>', button);
          window.bookNow({ hotelId: 'CGRBCM' });
        } else {
          console.warn('[selfbook] => bookNow not loaded');
        }
      });
    });
  }

  private initModal() {
    const interval = setInterval(() => {
      const modal = document.querySelector('#selfbook_sdkwidget_wrapper') as HTMLElement;
      if (modal) {
        clearInterval(interval);
        console.log('[selfbook] => Modal ready');
        this.observerModal(modal);
      }
    }, 200);
  }

  private observerModal(modal: HTMLElement) {
    const observer = new MutationObserver(() => {
      // const isVisible = getComputedStyle(modal).display !== 'none';

      const isVisible =
        parseFloat(modal.style.backgroundColor.split(',')[3]) > 0 && // alpha > 0
        parseInt(modal.style.zIndex || '0') > 0;

      if (isVisible && !this.isScrollDisabled) {
        console.log('[selfbook] Modal opened');
        destroySmoothScroll();
        this.isScrollDisabled = true;
      }

      if (!isVisible && this.isScrollDisabled) {
        console.log('[selfbook] Modal closed');
        initSmoothScroll();
        this.isScrollDisabled = false;
      }
    });

    observer.observe(modal, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
  }
}

export const selfbook = () => {
  new Selfbook();
};
export default selfbook;
