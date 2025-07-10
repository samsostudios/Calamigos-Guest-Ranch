import gsap from 'gsap';

import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';

class FormPopup {
  private component: HTMLElement;
  private toggleButtons: HTMLButtonElement[];
  private openButton: HTMLButtonElement;
  private closeButton: HTMLButtonElement;
  private compoentForm: HTMLElement;
  private componentGlass: HTMLElement;

  constructor() {
    this.component = document.querySelector('.component_pop-form') as HTMLElement;
    this.toggleButtons = [...document.querySelectorAll('[data-popup]')] as HTMLButtonElement[];
    this.openButton = document.querySelector('[data-popup-open]') as HTMLButtonElement;
    this.closeButton = document.querySelector('[data-popup-close]') as HTMLButtonElement;
    this.compoentForm = this.component.querySelector('.pop-form_main') as HTMLElement;
    this.componentGlass = this.component.querySelector('.component_glass') as HTMLElement;

    this.setListeners();
  }

  private setListeners() {
    this.toggleButtons.forEach((button) => {
      const action = button.getAttribute('data-popup');
      if (!action) return;

      if (action === 'open') {
        button.addEventListener('click', () => this.openModal());
      } else if (action === 'close') {
        button.addEventListener('click', () => this.closeModal());
      }
    });
    this.componentGlass.addEventListener('click', () => {
      this.closeModal();
    });
  }

  private openModal() {
    stopSmoothScroll();

    const tl = gsap.timeline();

    gsap.set(this.component, { display: 'block' });
    tl.fromTo(
      this.componentGlass,
      { opacity: 0 },
      { duration: 1.5, opacity: 1, ease: 'power4.out' },
    );
    tl.fromTo(
      this.compoentForm,
      { y: '3rem', opacity: 0 },
      { duration: 1.5, y: '0rem', opacity: 1, ease: 'power4.out' },
      '<0.5',
    );
  }

  private closeModal() {
    startSmoothScroll();

    const tl = gsap.timeline();

    tl.to(this.compoentForm, { duration: 1, y: '-3rem', opacity: 0, ease: 'power4.out' });
    tl.to(this.componentGlass, { duration: 1.5, opacity: 0, ease: 'power4.out' }, '<0.5');
    tl.set(this.component, { display: 'none' });
  }
}
export const formPopup = () => {
  new FormPopup();
};
export default formPopup;
