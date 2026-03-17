import { gsap } from 'gsap';

import type { TrackingService } from '$utils/cookieConsent/config';
import { TRACKING_CONFIG } from '$utils/cookieConsent/config';

class CookieConsent {
  private component: HTMLElement;
  private customOptions: HTMLElement;
  private acceptutton: HTMLButtonElement;
  private customizeButton: HTMLButtonElement;
  private cookieOptions: HTMLInputElement[];
  private readonly consentKey = 'cookieConsent';

  constructor() {
    this.component = document.querySelector<HTMLElement>('.component_consent')!;
    this.customOptions = this.$<HTMLElement>('#customOptions');
    this.acceptutton = this.$<HTMLButtonElement>('#agreeCookies');
    this.customizeButton = this.$<HTMLButtonElement>('#customizeCookies');
    this.cookieOptions = [
      ...this.component.querySelectorAll<HTMLInputElement>('.form_checkbox-input'),
    ];

    this.init();
  }

  private init() {
    if (!this.component) return;

    if (!localStorage.getItem(this.consentKey)) {
      this.revealComponent();
    }

    this.setListeners();
  }

  private setListeners() {
    this.acceptutton.addEventListener('click', () => {
      this.setCookie('accepted');
      this.enableTracking();
    });
    this.customizeButton.addEventListener('click', () => {
      this.revealOptions();
    });
  }

  private setCookie(status: 'accepted' | 'declined') {
    localStorage.setItem(this.consentKey, status);
    this.dismissComponent();
  }

  private enableTracking() {
    if (!this.cookieOptions) return;

    this.cookieOptions.forEach((item) => {
      if (item.checked) {
        if (item.name === 'analytics') {
          // console.log('Analytics Accepted');
          TRACKING_CONFIG.analytics.forEach((service: TrackingService) => {
            service.load();
          });
        }
      }
    });
  }

  private revealComponent() {
    const tl = gsap.timeline();
    tl.set(this.component, { display: 'flex', autoAlpha: 0, yPercent: 100 });
    tl.to(
      this.component,
      {
        delay: 7,
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: 'power4.inOut',
      },
      '<',
    );
  }

  private dismissComponent() {
    const tl = gsap.timeline();
    tl.to(this.component, { autoAlpha: 0, yPercent: 100, duration: 1, ease: 'power4.inOut' });
  }

  private revealOptions() {
    const tl = gsap.timeline();
    tl.set(this.customOptions, { display: 'flex', autoAlpha: 0 });
    tl.to(this.customOptions, {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power3.out',
    });

    this.acceptutton.innerHTML = 'Save';
  }

  private $<T extends Element>(selector: string): T {
    const el = this.component.querySelector<T>(selector);
    if (!el) throw new Error(`Missing element: ${selector}`);
    return el;
  }
}

export const cookieConsent = () => {
  new CookieConsent();
};
export default cookieConsent;
