import gsap from 'gsap';

import { startSmoothScroll, stopSmoothScroll } from '$utils/smoothScroll';

class FormPopup {
  private component: HTMLElement;
  private closeButton: HTMLButtonElement;
  private componentPopup: HTMLElement;
  private componentGlass: HTMLElement;
  private componentForm: HTMLFormElement;
  // private componentSuccess: HTMLElement;
  // private componentError: HTMLElement;

  constructor(component: HTMLElement) {
    this.component = component;
    this.closeButton = this.component.querySelector('[data-popup=close]') as HTMLButtonElement;
    this.componentPopup = this.component.querySelector('.pop-form_main') as HTMLElement;
    this.componentGlass = this.component.querySelector('.component_glass') as HTMLElement;
    this.componentForm = this.component.querySelector('form') as HTMLFormElement;
    // this.componentSuccess = component.querySelector('.form_success') as HTMLElement;
    // this.componentError = component.querySelector('.form_error') as HTMLElement;

    this.setListeners();
    this.bindFormEvents();
    this.setOtherInput();
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

  private bindFormEvents() {
    console.log(
      'popup',
      this.componentPopup,
      'component',
      this.component,
      'form',
      this.componentForm,
    );

    this.componentForm.addEventListener('form:success', () => {
      this.showSuccess();
    });

    this.componentForm.addEventListener('form:error', (e: Event) => {
      const msg = (e as CustomEvent).detail;
      this.showError(msg);
      // this.showError(msg);
    });
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
      this.componentPopup,
      { y: '50%', opacity: 0 },
      { duration: 1.5, y: '0%', opacity: 1, ease: 'power4.out' },
      '<0.5',
    );
  }

  public closeModal() {
    startSmoothScroll();

    const tl = gsap.timeline();

    tl.to(this.componentPopup, { duration: 1, y: '50%', opacity: 0, ease: 'power4.out' });
    tl.to(this.componentGlass, { duration: 1.5, opacity: 0, ease: 'power4.out' }, '<0.5');
    tl.set(this.component, { display: 'none' });
  }

  // private showSuccess() {
  //   if (!this.componentSuccess) return;

  //   gsap.set([this.componentForm, this.componentError], { autoAlpha: 0, display: 'none' });
  //   gsap.to(this.componentSuccess, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  // }

  // private showError(msg: string) {
  //   if (!this.componentError) return;

  //   const errorText = this.componentError.children[0] as HTMLElement;
  //   errorText.innerHTML = msg;

  //   gsap.to(this.componentError, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  // }

  private setOtherInput() {
    const otherInput = this.component.querySelector('#otherRow');
    const filters: HTMLInputElement[] = [
      ...this.component.querySelectorAll('.form_radio-input'),
    ] as HTMLInputElement[];
    const otherFilter = filters.find((el) => el.value === 'Other');

    if (!otherFilter) {
      console.log('no other input found');
      return;
    }

    filters.forEach((filter) => {
      filter.addEventListener('click', () => {
        if (filter === otherFilter) {
          if (otherInput) gsap.set(otherInput, { display: 'block' });
        } else {
          if (otherInput) gsap.set(otherInput, { display: 'none' });
        }
      });
    });
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
      console.warn('[data-popup-form] => mutiple forms - using instances', instances[target]);
    } else if (!target && forms.length === 1) {
      const defaultInstance = Object.values(instances)[0];
      btn.addEventListener('click', () => defaultInstance.openModal());
      console.warn('[data-popup-form] => single form - using default', defaultInstance);
    } else {
      console.warn('[data-popup-form] => trigger has no valid target or no popup is available');
    }
  });
};
export default formPopup;
