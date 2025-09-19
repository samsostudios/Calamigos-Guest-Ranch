import { gsap } from 'gsap';

interface HiddenGroup {
  name: string;
  inputs: HTMLElement[];
  trigger: HTMLElement | null;
}

class HiddenFieldsController {
  private hiddenFields: HTMLElement[];
  constructor(form: HTMLFormElement) {
    this.hiddenFields = [...form.querySelectorAll('[data-show-when]')] as HTMLElement[];
    if (!this.hiddenFields.length) {
      console.log('no hidden fields detected on', form.name);
      return;
    }

    this.handleHiddenFields(form);
  }

  private handleHiddenFields(form: HTMLFormElement) {
    const groups = this.groupShowWhenData(this.hiddenFields);
    const result = this.attachTriggers(form, groups);

    console.log('result', result);

    this.setListeners(result);
  }

  private groupShowWhenData(elements: HTMLElement[]) {
    const groups: Record<string, HTMLElement[]> = {};
    elements.forEach((el) => {
      const key = el.dataset.showWhen;
      if (!key) return;

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(el);
    });

    return groups;
  }

  private attachTriggers(form: HTMLFormElement, groups: Record<string, HTMLElement[]>) {
    const out: HiddenGroup[] = [];

    for (const [name, inputs] of Object.entries(groups)) {
      const [type, value] = this.splitTypeValue(name);
      const trigger = this.findTrigger(form, type, value) as HTMLElement;
      out.push({ name, inputs, trigger });
      // console.log('^^^', type, value, trigger);
    }
    return out;
  }

  private setListeners(data: HiddenGroup[]) {
    console.log('data', data);

    data.forEach((item) => {
      console.log('***', item.trigger);
      const trigger = item.trigger as HTMLElement;
      trigger.addEventListener('click', () => {
        console.log('click', trigger, item.inputs);
        this.showFields(item.inputs);
      });
    });
  }

  // UI
  private showFields(inputs: HTMLElement[]) {
    console.log('show', inputs);
    gsap.to(inputs, { backgroundColor: 'yellow' });
  }

  private hideFields(inputs: HTMLElement[]) {
    console.log('hide');
  }

  // Utils
  private splitTypeValue(key: string) {
    const idx = key.indexOf('-');
    if (idx === -1) return [key, ''];
    const type = key.slice(0, idx);
    const value = key.slice(idx + 1);
    return [type, value];
  }

  private findTrigger(form: HTMLFormElement, type: string, value: string) {
    const selector = form.querySelector(
      `input[type=${type}][value=${this.capitalizeFirst(value)}]`,
    );
    return selector;
  }

  private getRelatedToggles(ref: HTMLElement) {}

  private capitalizeFirst(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

export const hidenFieldController = (form: HTMLFormElement) => {
  new HiddenFieldsController(form);
};
export default hidenFieldController;
