import { gsap } from 'gsap';

class FormHandler {
  private forms: HTMLFormElement[];
  private endpoint = 'https://calamigos-guest-ranch-backend.vercel.app/api/submit-form';
  private minTime = 1500;
  private honeypotName = 'website';
  private guestId = {
    enabledForms: new Set([
      'Dining Activity Form',
      'Wellness Activity Form',
      'Beach Club Activity Form',
    ]),
    fieldName: 'res-number',
    validLengths: [14, 4] as const,
    stripPattern: /[^A-Za-z0-9]+/g,
  };

  constructor() {
    this.forms = [...document.querySelectorAll('form')] as HTMLFormElement[];

    this.setListeners();
  }

  private setListeners() {
    this.forms.forEach((form) => {
      this.addHoneypot(form);

      (form as any).__startedAt = performance.now();

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (this.checkSpam(form)) {
          // form.dispatchEvent(
          //   new CustomEvent('form:error', { detail: 'Something went wrong. Please try again.' }),
          // );
          this.showError(form, 'Something went wrong. Please try again.');
          console.log('[ss.log] Spam Detection Triggered');
          return;
        }

        if (this.isGuestIdEnforced(form)) {
          console.log('GUEST RES ENABLED');
          if (this.checkGuestId(form)) {
            // form.dispatchEvent(
            //   new CustomEvent('form:error', {
            //     detail: 'Please enter a valid reservation or member number',
            //   }),
            // );
            this.showError(form, 'Please enter a valid reservation or member number.');
            console.log('[ss.log] Guest Reservation Spam Detected');
            return;
          }
        }

        this.postData(form);
      });
    });
  }

  private addHoneypot(form: HTMLFormElement) {
    if (form.querySelector(`[name="${this.honeypotName}"]`)) return;

    const hp = document.createElement('input');
    hp.type = 'text';
    hp.name = this.honeypotName;
    hp.autocomplete = 'off';
    hp.setAttribute('aria-hidden', 'true');
    hp.style.position = 'absolute';
    hp.style.left = '-5000px';
    hp.style.width = '1px';
    hp.style.height = '1px';

    form.appendChild(hp);
  }

  private isGuestIdEnforced(form: HTMLFormElement): boolean {
    const formName = (form.dataset.name || '').trim();
    const enforced = this.guestId.enabledForms.has(formName);

    return enforced;
  }

  private checkSpam(form: HTMLFormElement) {
    const hpVal =
      (form.querySelector(`[name="${this.honeypotName}"]`) as HTMLInputElement)?.value ?? '';
    if (hpVal) return true;

    const startedAt = (form as any).__startedAt ?? performance.now();
    const elapsed = performance.now() - startedAt;

    if (elapsed < this.minTime) {
      return true;
    }
    return false;
  }

  private checkGuestId(form: HTMLFormElement) {
    const input = form.querySelector(`[name="${this.guestId.fieldName}"]`) as HTMLInputElement;
    if (!input) {
      console.log('[ss-logs] Reservation field not found');
      return;
    }

    const cleaned = (input.value || '').trim().replace(this.guestId.stripPattern, '');
    const len = cleaned.length;

    if (len === 0) return true;

    if (!this.guestId.validLengths.includes(len as (typeof this.guestId.validLengths)[number]))
      return true;

    input.value = cleaned;
    return false;
  }

  private serializeData(form: HTMLFormElement) {
    const data: Record<string, unknown> = {};
    const inputs = [...form.elements] as HTMLInputElement[];

    inputs.forEach((el) => {
      if (!el.name || el.disabled) return;

      if (el.type === 'checkbox') {
        data[el.name] = el.checked;
      } else if (el.type === 'radio') {
        if (el.checked) data[el.name] = el.value;
      }
      // else if (el.name === 'cf-turnstile-response') {
      //   return;
      // }
      else if (el.name === 'website') {
        return;
      } else {
        data[el.name] = el.value;
      }
    });

    console.log('Serialized data', data);
    return data;
  }

  private async postData(form: HTMLFormElement) {
    const formName = form.dataset.name;
    const formData = this.serializeData(form);
    const payload = JSON.stringify({ formName, formData });

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });
      console.log('📬 Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[ss.log] Submission failed:', errorText);
        this.showError(form, errorText);
        // form.dispatchEvent(new CustomEvent('form:error', { detail: errorText }));
        return;
      }

      const result = await response.json();
      console.log('[ss.log] Form Submitted', result);
      this.showSuccess(form);
      // form.dispatchEvent(new CustomEvent('form:success', { detail: result }));
    } catch (error) {
      console.log('[ss.log] Error submitting form', error);
      this.showError(form, error as string);
      // form.dispatchEvent(new CustomEvent('form:error', { detail: error }));
    }
  }

  private showSuccess(form: HTMLFormElement) {
    console.log('show success', form);

    const { successElement, errorElement, parentElement } = this.getStatusComponents(form);

    console.log('!!!', successElement, errorElement, parentElement);

    if (!successElement || !errorElement) {
      console.log('[ss.form.error] Success or error elements not found.');
      return;
    }
    // if (!this.componentSuccess) return;
    gsap.set([parentElement, errorElement], { autoAlpha: 0, display: 'none' });
    gsap.to(successElement, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  }

  private showError(form: HTMLFormElement, msg: string) {
    console.log('show error', form, msg);

    const { successElement, errorElement } = this.getStatusComponents(form);

    console.log('here', successElement, errorElement);
    if (!successElement || !errorElement) {
      console.log('[ss.form.error] Success or error elements not found.');
      return;
    }

    gsap.to(errorElement, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  }

  private getStatusComponents(form: HTMLFormElement) {
    const parentElement = form.parentElement as HTMLElement;

    const successElement = parentElement.querySelector('.form_success');
    const errorElement = parentElement.querySelector('.form_error');

    return { successElement, errorElement, parentElement };
  }
}
export const formHandler = () => {
  new FormHandler();
};
export default formHandler;
