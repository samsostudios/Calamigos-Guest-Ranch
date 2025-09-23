import { gsap } from 'gsap';

import { formHiddenController } from '$forms/formHiddenController';

interface FormWithStartedAt extends HTMLFormElement {
  __startedAt?: number;
}

class FormHandler {
  private forms: FormWithStartedAt[];
  private endpoint = 'https://calamigos-guest-ranch-backend.vercel.app/api/submit-form';
  private minTime = 1500;
  private honeypotName = 'website';
  private guestId = {
    fieldName: 'res-number',
    validLengths: [14, 4] as const,
    stripPattern: /[^A-Za-z0-9]+/g,
  };

  constructor() {
    this.forms = [...document.querySelectorAll('form')] as FormWithStartedAt[];
    this.setListeners();
  }

  private setListeners() {
    this.forms.forEach((form) => {
      this.addHoneypot(form);
      formHiddenController(form);

      form.__startedAt = performance.now();
      form.addEventListener(
        'input',
        () => {
          form.__startedAt ??= performance.now();
        },
        { once: true },
      );

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
    hp.setAttribute('tabindex', '-1');
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

    return enforced;
  }

  private checkGuestId(form: FormWithStartedAt) {
    const input = form.querySelector(`[name="${this.guestId.fieldName}"]`) as HTMLInputElement;
    if (!input) {
      console.log('[ss.forms.checkGuest] Reservation field not found');
      return true;
    }
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
    if (!formName) {
      console.warn('[ss.forms] Missing data-name on form');
      this.showError(form, 'Form misconfigured. Please try again later.');
      return;
    }
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

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message || 'Submission failed');
      }

      const result = await response.json();
      console.log('[ss.log] Form Submitted', result);
      this.showSuccess(form);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        this.showError(form, 'Request timed out. Please try again.');
      } else {
        this.showError(form, 'Something went wrong. Please try again.');
      }
    } finally {
      clearTimeout(timeoutId);
      submitBtn.removeAttribute('disabled');
      submitBtn.value = ogText || 'Submit';
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

    const errorText = (errorElement.querySelector('[data-error-text]') ||
      errorElement.firstElementChild ||
      errorElement) as HTMLElement;
    errorText.innerText = msg;

    gsap.to(errorElement, { autoAlpha: 1, display: 'block', ease: 'power2.out' });
  }
}
export const formHandler = () => {
  new FormHandler();
};
export default formHandler;
