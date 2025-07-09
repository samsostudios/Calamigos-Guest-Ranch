import gsap from 'gsap';

class FormPopup {
  private component: HTMLElement;
  private openButton: HTMLButtonElement;
  private closeButton: HTMLButtonElement;
  private compoentForm: HTMLElement;
  private componentGlass: HTMLElement;

  constructor() {
    this.component = document.querySelector('.component_pop-form') as HTMLElement;
    this.openButton = document.querySelector('[data-popup-open]') as HTMLButtonElement;
    this.closeButton = document.querySelector('[data-popup-close]') as HTMLButtonElement;
    this.compoentForm = this.component.querySelector('.pop-form_main') as HTMLElement;
    this.componentGlass = this.component.querySelector('.component_glass') as HTMLElement;

    this.setListeners();
  }

  private setListeners() {
    if (this.openButton === null) return;

    this.openButton.addEventListener('click', () => {
      this.openModal();
    });
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });
    this.componentGlass.addEventListener('click', () => {
      this.closeModal();
    });
  }

  private openModal() {
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
    const tl = gsap.timeline();

    tl.to(this.compoentForm, { duration: 1, y: '-3rem', opacity: 0, ease: 'power4.out' });
    tl.to(this.componentGlass, { duration: 1.5, opacity: 0, ease: 'power4.out' }, '<0.5');
    gsap.set(this.component, { display: 'none' });
  }
}
export const formPopup = () => {
  new FormPopup();
};
export default formPopup;
