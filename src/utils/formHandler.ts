import { gsap } from 'gsap';

class FormHandler {
  private forms: HTMLFormElement[];
  private endpoint = 'https://calamigos-guest-ranch-backend.vercel.app/api/submit-form';
  private minTime = 1500;
  private honeypotName = 'website';
  private successElement: HTMLElement;
  private errorElement: HTMLElement;
  private guestId = {
    enabledForms: new Set([
      'Dining Activity From',
      'Wellness Activity From',
      'Beach Club Activity From',
    ]),
    fieldName: 'res-number',
    validLengths: [14, 4] as const,
    stripPattern: /[^A-Za-z0-9]+/g,
  };

  constructor() {
    this.forms = [...document.querySelectorAll('form')] as HTMLFormElement[];
    this.successElement = document.querySelector('.form_success') as HTMLElement;
    this.errorElement = document.querySelector('.form_error') as HTMLElement;

    this.setListeners();
  }

  private setListeners() {
    this.forms.forEach((form) => {
      this.addHoneypot(form);

      (form as any).__startedAt = performance.now();

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (this.checkSpam(form)) {
          // this.showError(form, 'Something went wrong. Please try again.');
          form.dispatchEvent(
            new CustomEvent('form:error', { detail: 'Something went wrong. Please try again.' }),
          );
          console.log('[ss.log] Spam Detection Triggered');
          return;
        }

        if (this.checkGuestId(form)) {
          form.dispatchEvent(
            new CustomEvent('form:error', {
              detail: 'Please enter a valid reservation or member number',
            }),
          );
          console.log('[ss.log] Guest Reservation Spam Detected');
          return;
        }

        const formName = form.dataset.name;
        const formData = this.serializeData(form);
        const payload = JSON.stringify({ formName, formData });

        // try {
        //   const response = await fetch(this.endpoint, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: payload,
        //   });
        //   console.log('📬 Response status:', response.status);

        //   if (!response.ok) {
        //     const errorText = await response.text();
        //     console.error('[ss.log] Submission failed:', errorText);
        //     form.dispatchEvent(new CustomEvent('form:error', { detail: errorText }));
        //     return;
        //     // this.showError(form, errorText);
        //   }

        //   const result = await response.json();
        //   console.log('[ss.log] Form Submitted', result);
        //   form.dispatchEvent(new CustomEvent('form:success', { detail: result }));
        //   // this.showSuccess(form);
        // } catch (error) {
        //   console.log('[ss.log] Error submitting form', error);
        //   form.dispatchEvent(new CustomEvent('form:error', { detail: error }));
        //   // this.showError(form, error as string);
        // }
      });
    });
  }

  private addHoneypot(form: HTMLFormElement) {
    if (form.querySelector(`[name="${this.honeypotName}`)) return;

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

    const val = input.value;
    const len = val.length;

    if (!this.guestId.validLengths.includes(len as (typeof this.guestId.validLengths)[number])) {
      console.log('Invalid reservation / member number');
      return true;
    }

    return false;
  }

  private flagError(input: HTMLInputElement, message: string) {
    input.setAttribute('aria-invalid', 'true');
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
      } else if (el.name === 'cf-turnstile-response') {
        return;
      } else if (el.name === 'website') {
        return;
      } else {
        data[el.name] = el.value;
      }
    });

    return data;
  }
}
export const formHandler = () => {
  new FormHandler();
};
export default formHandler;
