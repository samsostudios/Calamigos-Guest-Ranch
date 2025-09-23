import { gsap } from 'gsap';

import { hidenFieldController } from '$forms/formHiddenController';

interface FormWithStartedAt extends HTMLFormElement {
  __startedAt?: number;
}

class FormHandler {
  private forms: FormWithStartedAt[];
  private endpoint = 'https://calamigos-guest-ranch-backend.vercel.app/api/submit-form';
  private minTime = 1500;
  private honeypotName = 'website';
  private guestId = {
    // enabledForms: new Set([
    //   'Dining Activity Form',
    //   'Wellness Activity Form',
    //   'Beach Club Activity Form',
    // ]),
    fieldName: 'res-number',
    validLengths: [14, 4] as const,
    stripPattern: /[^A-Za-z0-9]+/g,
  };

  constructor() {
    this.forms = [...document.querySelectorAll('form')] as FormWithStartedAt[];

    console.log('FORM HANDLER');

    this.setListeners();
  }

  private setListeners() {
    this.forms.forEach((form) => {
      this.addHoneypot(form);
      // handleHiddenFields(form);
      hidenFieldController(form);

      form.__startedAt = performance.now();

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (this.checkSpam(form)) {
          this.showError(form, 'Something went wrong. Please try again.');
          console.log('[ss.forms] Spam Detection Triggered');
          return;
        }

        if (this.isGuestIdEnforced(form)) {
          if (this.checkGuestId(form)) {
            this.showError(form, 'Please enter a valid reservation or member number.');
            console.log('[ss.forms] Guest Reservation Spam Detected');
            return;
          }
        }

        this.postData(form);
      });
    });
  }

  private addHoneypot(form: FormWithStartedAt) {
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

  private checkSpam(form: FormWithStartedAt) {
    const hpVal =
      (form.querySelector(`[name="${this.honeypotName}"]`) as HTMLInputElement)?.value ?? '';
    if (hpVal) return true;

    if (form.__startedAt == null) {
      console.log('[ss.forms] Missing timestamp');
      return false;
    }
    const elapsed = performance.now() - (form.__startedAt ?? 0);

    if (elapsed < this.minTime) {
      return true;
    }
    return false;
  }

  private isGuestIdEnforced(form: FormWithStartedAt): boolean {
    const reqAttr = form.getAttribute('data-requires-guest-id');
    if (reqAttr === null) return false;

    const val = (reqAttr || '').trim().toLowerCase();
    const enforced = val === '' || val === 'true' || val === '1' || val === 'yes';

    // console.log('enforced', enforced);
    return enforced;
  }

  private checkGuestId(form: FormWithStartedAt) {
    const input = form.querySelector(`[name="${this.guestId.fieldName}"]`) as HTMLInputElement;
    if (!input) {
      console.log('[ss.forms.checkGuest] Reservation field not found');
      return true;
    }

    console.log('checking', input);
    const cleaned = (input.value || '').trim().replace(this.guestId.stripPattern, '');
    const len = cleaned.length;

    if (len === 0) return true;

    if (!this.guestId.validLengths.includes(len as (typeof this.guestId.validLengths)[number]))
      return true;

    input.value = cleaned;
    return false;
  }

  private serializeData(form: FormWithStartedAt) {
    const fd = new FormData(form);
    const data: Record<string, unknown> = {};
    for (const [name, value] of fd.entries()) {
      if (name === this.honeypotName) continue;
      if (name in data) {
        const prev = data[name];
        data[name] = Array.isArray(prev) ? [...prev, value] : [prev, value];
      } else {
        data[name] = value;
      }
    }
    return data;
  }

  private async postData(form: FormWithStartedAt) {
    const formName = form.dataset.name;
    const formData = this.serializeData(form);
    const payload = JSON.stringify({ formName, formData });

    const submitBtn = form.querySelector('[type="submit"]') as HTMLButtonElement;
    if (!submitBtn) {
      console.log('[ss.log] Submit button not found');
      return;
    }
    const ogText = submitBtn.value;
    const waitText = submitBtn.dataset.wait;

    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.value = waitText || 'Submitting...';
    }
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });

      if (!response.ok) {
        // const errorText = await response.text();
        const errorJson = await response.json();
        const errorText = errorJson.message || 'Something went wrong. Please try again.';
        // console.log('!!!', errorJson, errorText);
        console.error('[ss.log] Submission failed:', errorText);
        this.showError(form, errorText);
        return;
      }

      const result = await response.json();
      console.log('[ss.log] Form Submitted', result);
      this.showSuccess(form);
    } catch (error) {
      console.log('ERROR', error);
      // const msg = String(error);
      // console.log('[ss.log] Error submitting form', msg, error);
      // this.showError(form, msg);
    } finally {
      submitBtn.removeAttribute('disabled');
      submitBtn.innerText = ogText || 'Submit';
    }
  }

  private getStatusComponents(form: FormWithStartedAt) {
    const parentElement = form.parentElement as HTMLElement;

    const successElement = parentElement.querySelector('.form_success');
    const errorElement = parentElement.querySelector('.form_error');

    return { successElement, errorElement };
  }

  private showSuccess(form: FormWithStartedAt) {
    const { successElement, errorElement } = this.getStatusComponents(form);

    if (!successElement || !errorElement) {
      console.log('[ss.form.error] Success or error elements not found.');
      return;
    }

    gsap.set([form, errorElement], { autoAlpha: 0, display: 'none' });
    gsap.to(successElement, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  }

  private showError(form: FormWithStartedAt, msg: string) {
    const { successElement, errorElement } = this.getStatusComponents(form);

    if (!successElement || !errorElement) {
      console.log('[ss.form.error] Success or error elements not found.');
      return;
    }

    const errorText = errorElement.children[0] as HTMLElement;
    errorText.innerText = msg;

    gsap.to(errorElement, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  }
}
export const formHandler = () => {
  new FormHandler();
};
export default formHandler;
