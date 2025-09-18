interface HiddenGroup {
  name: string;
  inputs: HTMLElement[];
  trigger: HTMLElement | null;
}

export function handleHiddenFields(form: HTMLFormElement) {
  const hiddenFields = [...form.querySelectorAll('[data-show-when]')] as HTMLElement[];
  // const hiddenToggles = [...form.querySelector('[data-]')];

  if (!hiddenFields.length) {
    console.log('no hidden fields detected on', form.name);
    return;
  }

  const groups = groupShowWhenData(hiddenFields);
  // console.log('groups before', groupsTest);
  findFieldToggle(form, groups);
  // console.log('groups after', groupsTest);

  // hiddenFields.forEach((field) => {
  //   // console.log('->', field);
  //   const cast = field as HTMLElement;
  //   const attr = cast.dataset.showWhen as string;
  //   // findFieldToggle(attr);
  //   console.log('attr', attr);
  // });
}

function groupShowWhenData(elements: HTMLElement[]) {
  const groups: Record<string, HTMLElement[]> = {};
  elements.forEach((el) => {
    const key = el.dataset.showWhen;

    if (!key) return;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(el);

    // if (!groupsTest[key]) {
    //   groupsTest[key] = [];
    // }
    // groupsTest[key].push(el);
  });

  // console.log('^^^', groupsTest);
  return groups;
}

function attachTriggers(form: HTMLFormElement, groups: Record<string, HTMLElement[]>) {
  // let triggerElement: HTMLElement | null;
  const out: HiddenGroup = [];

  for (const [name, inputs] of Object.entries(groups)) {
    const [type, value] = splitTypeValue(name);
    console.log('^^^', type, value);
  }
  // Object.keys(groups).forEach((key) => {
  //   const [type, value] = key.split('-');

  //   const triggerElement = form.querySelector(
  //     `input[type=${type}][value=${capitalizeFirst(value)}]`,
  //   );

  //   if (!triggerElement) {
  //     console.log('No trigger element found.');
  //     return;
  //   }

  //   groupsTest[key].push(triggerElement);
  //   // console.log('TRIGGER', triggerElement);
  // });
}

function splitTypeValue(key: string): [ToggleType, string] {
  // Only split on the FIRST hyphen: "radio-other-things" -> ["radio", "other-things"]
  const idx = key.indexOf('-');
  if (idx === -1) return [key as ToggleType, '']; // fallback if malformed
  const type = key.slice(0, idx) as ToggleType;
  const value = key.slice(idx + 1);
  return [type, value];
}

function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
