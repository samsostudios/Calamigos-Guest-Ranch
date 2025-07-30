import gsap from 'gsap';

import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';

class FormPopup {
  private component: HTMLElement;
  private closeButton: HTMLButtonElement;
  private compoentForm: HTMLElement;
  private componentGlass: HTMLElement;

  constructor(component: HTMLElement) {
    this.component = component;
    this.closeButton = this.component.querySelector('[data-popup=close]') as HTMLButtonElement;
    this.compoentForm = this.component.querySelector('.pop-form_main') as HTMLElement;
    this.componentGlass = this.component.querySelector('.component_glass') as HTMLElement;

    this.setListeners();
  }

  private setListeners() {
    this.componentGlass.addEventListener('click', () => {
      this.closeModal();
    });
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.closeModal();
      });
    }
  }

  public openModal() {
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
      { y: '50%', opacity: 0 },
      { duration: 1.5, y: '0%', opacity: 1, ease: 'power4.out' },
      '<0.5',
    );
  }

  public closeModal() {
    startSmoothScroll();

    const tl = gsap.timeline();

    tl.to(this.compoentForm, { duration: 1, y: '50%', opacity: 0, ease: 'power4.out' });
    tl.to(this.componentGlass, { duration: 1.5, opacity: 0, ease: 'power4.out' }, '<0.5');
    tl.set(this.component, { display: 'none' });
  }

  private setOtherInput() {
    const filters;
    const input = document.querySelector('#otherInput');
  }
}
export const formPopup = () => {
  const forms = [...document.querySelectorAll('.component_pop-form')] as HTMLElement[];
  const instances: Record<string, FormPopup> = {};

  forms.forEach((el, i) => {
    const id = el.getAttribute('data-popup-id') || `default-${i}`;
    instances[id] = new FormPopup(el);
  });

  const buttons = [...document.querySelectorAll('[data-popup=open]')];
  buttons.forEach((btn) => {
    const target = btn.getAttribute('data-popup-target') as string;

    if (target && instances[target]) {
      btn.addEventListener('click', () => instances[target].openModal());
      console.log('[data-popup-form] => mutiple forms - using instances', instances[target]);
    } else if (!target && forms.length === 1) {
      const defaultInstance = Object.values(instances)[0];
      btn.addEventListener('click', () => defaultInstance.openModal());
      console.log('[data-popup-form] => single form - using default', defaultInstance);
    } else {
      console.warn('[data-popup-form] => trigger has no valid target or no popup is available');
    }
  });
};
export default formPopup;
