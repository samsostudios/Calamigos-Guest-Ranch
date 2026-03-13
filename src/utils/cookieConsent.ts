class CookieConsent {
  private component: HTMLElement | null;

  constructor() {
    this.component = document.querySelector('.consent_component') as HTMLElement;

    if (!this.component) return;
  }
}

export const cookieConsent = () => {
  new CookieConsent();
};
export default cookieConsent;
