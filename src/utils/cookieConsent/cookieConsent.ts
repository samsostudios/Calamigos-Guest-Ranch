import { gsap } from 'gsap';

import type { TrackingService } from '$utils/cookieConsent/config';
import type { ConsentState } from '$utils/cookieConsent/config';
import { TRACKING_CONFIG } from '$utils/cookieConsent/config';

class CookieConsent {
  private component: HTMLElement;
  private customOptions: HTMLElement;
  private acceptButton: HTMLButtonElement;
  private customizeButton: HTMLButtonElement;
  private cookieOptions: HTMLInputElement[];
  private readonly consentKey = 'cookieConsent';

  constructor() {
    this.component = document.querySelector<HTMLElement>('.component_consent')!;

    this.customOptions = this.$<HTMLElement>('#customOptions');
    this.acceptButton = this.$<HTMLButtonElement>('#agreeCookies');
    this.customizeButton = this.$<HTMLButtonElement>('#customizeCookies');
    this.cookieOptions = [
      ...this.component.querySelectorAll<HTMLInputElement>('.form_checkbox-input'),
    ];

    this.init();
  }

  private init() {
    const savedConsent = this.getConsent();
    // console.log('saved', savedConsent);

    if (!savedConsent) {
      this.revealComponent();
    } else {
      this.applyTracking(savedConsent);
    }

    this.setListeners();
  }

  private setListeners() {
    this.acceptButton.addEventListener('click', () => {
      const isCustomMode = this.acceptButton?.textContent === 'Save';

      if (isCustomMode) {
        const consent = this.getSelections('customized');
        this.saveConsent(consent);
        this.applyTracking(consent);
      } else {
        const consent: ConsentState = {
          essential: true,
          analytics: true,
          marketing: true,
          status: 'accepted',
        };
        this.updateCheckboxes(consent);
        this.saveConsent(consent);
        this.applyTracking(consent);
      }

      this.dismissComponent();
    });
    this.customizeButton.addEventListener('click', () => {
      this.revealOptions();
    });
  }

  private getSelections(status: ConsentState['status']): ConsentState {
    const analytics =
      this.cookieOptions.find((item) => item.name === 'analytics')?.checked ?? false;
    const marketing =
      this.cookieOptions.find((item) => item.name === 'marketing')?.checked ?? false;

    return { essential: true, analytics, marketing, status };
  }

  private saveConsent(consent: ConsentState) {
    // console.log('[SaveConsent]', this.consentKey, consent);
    localStorage.setItem(this.consentKey, JSON.stringify(consent));
  }

  private getConsent() {
    const raw = localStorage.getItem(this.consentKey);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as ConsentState;
    } catch {
      return null;
    }
  }

  private applyTracking(consent: ConsentState) {
    if (consent.analytics) {
      TRACKING_CONFIG.analytics.forEach((service: TrackingService) => {
        service.load();
      });
    }
  }

  private updateCheckboxes(consent: ConsentState) {
    this.cookieOptions.forEach((item) => {
      if (item.name === 'analytics') item.checked = consent.analytics;
      if (item.name === 'marketing') item.checked = consent.marketing;
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
    tl.set(this.customOptions, { display: 'flex', autoAlpha: 0, height: 0 });
    tl.to(
      this.customOptions,
      {
        autoAlpha: 1,
        height: this.getOptionsHeight(),
        duration: 0.5,
        ease: 'power3.out',
      },
      '<',
    );

    this.acceptButton.innerHTML = 'Save';
  }

  private getOptionsHeight() {
    gsap.set(this.customOptions, { position: 'absolute', left: '99999px', display: 'flex' });
    const optionsHeight = this.customOptions.clientHeight;
    gsap.set(this.customOptions, {
      clearProps: 'position,left,display',
    });

    return optionsHeight;
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
