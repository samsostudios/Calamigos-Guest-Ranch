export function handleHiddenFields(form: HTMLFormElement) {
  const hiddenFields = [...form.querySelectorAll('[data-show-when]')];
  const hiddenToggles = [...form.querySelector('[data-]')];

  const hiddenGroups = [];

  if (!hiddenFields.length) {
    console.log('no hidden fields detected on', form.name);
    return;
  }

  console.log('detected hidden fields on', form.name, hiddenFields);

  hiddenFields.forEach((field) => {
    // console.log('->', field);
    const cast = field as HTMLElement;
    const attr = cast.dataset.showWhen as string;
    findFieldToggle(attr);
    // console.log('attr', attr);
  });
}

function findFieldToggle(attr: string) {
  console.log('find', attr);
  const [type, value] = attr.split('-');
  console.log(type, value);
}
