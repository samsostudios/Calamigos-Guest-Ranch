class CookieConsent {
  private component: HTMLElement;
  private customOptions: HTMLElement;
  private mainButtons: HTMLElement;
  private customButtons: HTMLElement;
  private agreeButton: HTMLButtonElement;
  private customizeButton: HTMLButtonElement;
  private saveButton: HTMLButtonElement;

  constructor() {
    this.component = document.querySelector<HTMLElement>('.consent_component')!;

    this.customOptions = this.$<HTMLElement>('#customOptions');
    this.mainButtons = this.$<HTMLElement>('#mainButtons');
    this.customButtons = this.$<HTMLElement>('#customButtons');

    this.agreeButton = this.$<HTMLButtonElement>('#agreeCookies');
    this.customizeButton = this.$<HTMLButtonElement>('#customizeCookies');
    this.saveButton = this.$<HTMLButtonElement>('#saveCookies');

    this.init();
  }

  private init() {}

  private setConsent() {}

  private enableTracking() {}

  private disableTracking() {}

  private consentController() {}

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
