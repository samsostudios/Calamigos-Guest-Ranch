declare global {
  interface Window {
    bookNow?: (opts: { hotelId: string; roomId?: string }) => void;
  }
}

class Selfbook {
  private buttons: HTMLButtonElement[];
  constructor() {
    this.buttons = [...document.querySelectorAll('[data-selfbook-button]')] as HTMLButtonElement[];

    this.setListeners();
  }
  private setListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', () => {
        if (typeof window.bookNow === 'function') {
          console.log('bookNow available');
          window.bookNow({ hotelId: 'CGRBCM' });
        } else {
          console.warn('bookNow not loaded yet');
        }
      });
    });
  }
}

export const selfbook = () => {
  new Selfbook();
};
export default selfbook;
