import gsap from 'gsap';

class Menu {
  private component: HTMLElement;
  private menuOpenIcon: HTMLElement;
  private menuCloseIcon: HTMLElement;
  private menuLinks: HTMLElement[];
  private bgMain: HTMLElement;
  private bgGlass: HTMLElement;
  private menuWidth: number;

  constructor() {
    this.component = document.querySelector('.component_menu') as HTMLElement;
    this.menuOpenIcon = document.querySelector('#menuOpen') as HTMLElement;
    this.menuCloseIcon = document.querySelector('#menuClose') as HTMLElement;
    this.bgMain = this.component.querySelector('.menu-bg_main') as HTMLElement;
    this.bgGlass = this.component.querySelector('.menu-bg_glass') as HTMLElement;
    this.menuLinks = [...document.querySelectorAll('.menu_link')] as HTMLElement[];

    this.menuWidth = this.component.clientWidth;

    console.log('MENU', this.menuOpenIcon, this.menuCloseIcon, this.menuLinks, this.menuWidth);

    this.setup();
    this.addListeners();
  }

  private setup() {
    gsap.set([this.bgMain, this.bgGlass], { width: 0 });
    this.measureMenu();
  }

  private addListeners() {
    this.menuOpenIcon.addEventListener('click', () => {
      this.openMenu();
    });
    this.menuCloseIcon.addEventListener('click', () => {
      this.closeMenu();
    });
  }

  private openMenu() {
    console.log('OPEN');
    const tl = gsap.timeline();

    tl.set(this.component, { display: 'block' });

    tl.to(this.bgGlass, { duration: 0.8, width: this.menuWidth, ease: 'sine.out' });
  }

  private closeMenu() {
    console.log('CLOSE');

    const tl = gsap.timeline();

    tl.set(this.component, { display: 'none' });
  }

  private measureMenu() {
    gsap.set(this.component, { x: '-100%', display: 'block' });
    this.menuWidth = this.component.getBoundingClientRect().width;
    gsap.set(this.component, { x: '0%', display: 'none' });

    console.log('here', this.menuWidth);
  }
}

export const menu = () => {
  new Menu();
};

export default menu;
