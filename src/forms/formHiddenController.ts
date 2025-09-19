import { gsap } from 'gsap';

interface HiddenGroup {
  name: string;
  inputs: HTMLElement[];
  trigger: HTMLInputElement | null;
  siblings: HTMLInputElement[];
  groupLabel: string;
}

class HiddenFieldsController {
  private form: HTMLFormElement;
  private hiddenFields: HTMLElement[];
  constructor(form: HTMLFormElement) {
    this.form = form;

    this.hiddenFields = [...form.querySelectorAll('[data-show-when]')] as HTMLElement[];
    if (!this.hiddenFields.length) {
      console.log('no hidden fields detected on', form.name);
      return;
    }

    this.handleHiddenFields();
  }

  private handleHiddenFields() {
    const groups = this.groupShowWhenData(this.hiddenFields);
    const result = this.attachTriggers(groups);

    this.setListeners(result);

    for (const g of result) {
      if (g.trigger?.checked) {
        this.showFields(g.inputs);
      } else {
        this.hideFields(g.inputs);
      }
    }
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

  private attachTriggers(groups: Record<string, HTMLElement[]>) {
    const out: HiddenGroup[] = [];

    for (const [name, inputs] of Object.entries(groups)) {
      const [type, value] = this.splitTypeValue(name);
      const trigger = this.findTrigger(type, value);
      if (!trigger) {
        console.log('[ss.hiddenConroller] no trigger found for ', this.form.name);
        continue;
      }
      const siblings = this.findSiblings(trigger);
      const groupLabel = trigger.name;
      out.push({ name, inputs, trigger, siblings, groupLabel });
    }
    return out;
  }

  private setListeners(data: HiddenGroup[]) {
    for (const group of data) {
      if (!group.trigger) continue;

      if (group.trigger.type === 'radio' && group.groupLabel) {
        group.trigger.addEventListener('change', () => {
          this.showFields(group.inputs);
        });

        group.siblings.forEach((sibling) => {
          sibling.addEventListener('change', () => {
            this.hideFields(group.inputs);
            this.removeRequire(group.inputs);
          });
        });
      }
      // Add checkbox logic here
    }
  }

  // Utils
  private splitTypeValue(key: string) {
    const idx = key.indexOf('-');
    if (idx === -1) return [key, ''];
    const type = key.slice(0, idx);
    const value = key.slice(idx + 1);
    return [type, value];
  }

  private findTrigger(type: string, value: string): HTMLInputElement | null {
    return this.form.querySelector<HTMLInputElement>(
      `input[type="${this.css(type)}"][value="${this.css(value)}" i]`,
    );
  }

  private findSiblings(trigger: HTMLInputElement) {
    const sel = `input[type="radio"][name="${this.css(trigger.name)}"]`;
    const radios = [...this.form.querySelectorAll<HTMLInputElement>(sel)];
    return radios.filter((r) => r !== trigger);
  }

  private css(s: string) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  }

  private capitalizeFirst(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  private setRequire(inputs: HTMLElement[]) {
    for (const input of inputs) {
      const find = input.querySelector('input') as HTMLInputElement;
      if (find) find.required = true;
    }
  }

  private removeRequire(inputs: HTMLElement[]) {
    for (const input of inputs) {
      const find = input.querySelector('input') as HTMLInputElement;
      if (find) find.required = false;
    }
  }

  // UI
  private showFields(inputs: HTMLElement[]) {
    gsap.killTweensOf(inputs);
    const tl = gsap.timeline();
    tl.set(inputs, { display: 'block' });
    tl.fromTo(
      inputs,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
    );

    this.setRequire(inputs);
  }

  private hideFields(inputs: HTMLElement[]) {
    gsap.killTweensOf(inputs);
    const tl = gsap.timeline();
    tl.to(inputs, { opacity: 0, duration: 0.5, ease: 'power2.out' });
    tl.set(inputs, { display: 'none' }, '<');
  }
}

export const hidenFieldController = (form: HTMLFormElement) => {
  new HiddenFieldsController(form);
};
export default hidenFieldController;
