import gsap from 'gsap';

class Menu {
  private component: HTMLElement;
  private menuMain: HTMLElement;
  private menuOpenIcon: HTMLElement;
  private menuCloseIcon: HTMLElement;
  private menuLinks: HTMLElement[];
  private bgMain: HTMLElement;
  private bgGlass: HTMLElement;
  private bgTexture: HTMLElement;
  private menuInfo: HTMLElement;
  private menuOverflow: HTMLElement;
  private menuWidth: number;

  constructor() {
    this.component = document.querySelector('.component_menu') as HTMLElement;
    this.menuOpenIcon = document.querySelector('#menuOpen') as HTMLElement;
    this.menuCloseIcon = document.querySelector('#menuClose') as HTMLElement;
    this.menuMain = this.component.querySelector('.menu_wrap') as HTMLElement;
    this.bgMain = this.component.querySelector('.menu-bg_main') as HTMLElement;
    this.bgGlass = this.component.querySelector('.menu-bg_glass') as HTMLElement;
    this.bgTexture = this.component.querySelector('.menu_texture') as HTMLElement;
    this.menuLinks = [...document.querySelectorAll('.menu_link')] as HTMLElement[];
    this.menuInfo = this.component.querySelector('.menu_info') as HTMLElement;
    this.menuOverflow = this.component.querySelector('.menu_overflow') as HTMLElement;

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
    this.menuOverflow.addEventListener('click', () => {
      this.closeMenu();
    });
  }

  private openMenu() {
    console.log('OPEN');
    const tl = gsap.timeline();

    tl.set(this.component, { display: 'flex', opacity: 0 });

    tl.to(this.component, { duration: 0.5, opacity: 1, ease: 'powe2.out' });
    tl.to(this.bgGlass, { duration: 0.8, width: this.menuWidth, ease: 'power4.inOut' }, '<');
    tl.to(this.bgMain, { duration: 0.8, width: this.menuWidth - 16, ease: 'power1.inOut' }, '<');
    tl.to(this.menuCloseIcon, { duration: 0.8, opacity: 1, ease: 'power2.out' }, '<');
    tl.fromTo(
      this.bgTexture,
      { opacity: 0 },
      { duration: 0.8, opacity: 0.05, ease: 'sine.out' },
      '<0.1',
    );
    tl.fromTo(
      this.menuLinks,
      { opacity: 0, y: '2rem' },
      { duration: 0.5, opacity: 1, y: '0rem', ease: 'sine.out', stagger: 0.1 },
    );
    tl.fromTo(
      this.menuInfo.children,
      { opacity: 0, y: '2rem' },
      { duration: 0.5, opacity: 1, y: '0rem', ease: 'sine.out', stagger: 0.1 },
      '<0.5',
    );
  }

  private closeMenu() {
    console.log('CLOSE');

    const tl = gsap.timeline();

    tl.to(this.menuLinks, {
      duration: 0.5,
      opacity: 0,
      y: '-2rem',
      ease: 'sine.out',
      stagger: 0.1,
    });
    tl.to(
      this.menuInfo.children,
      { duration: 0.5, opacity: 0, y: '-2rem', ease: 'sine.out', stagger: 0.1 },
      '<0.5',
    );
    tl.to(this.menuCloseIcon, { duration: 0.8, opacity: 0, ease: 'power1.inOut' }, '<');
    tl.to(this.bgTexture, { duration: 0.8, opacity: 0, ease: 'power1.inOut' }, '<0.1');
    tl.to(this.bgGlass, { duration: 0.8, width: 0, ease: 'power4.inOut' });
    tl.to(this.bgMain, { duration: 0.8, width: 0, ease: 'power1.inOut' }, '<');
    tl.to(this.component, { duration: 0.8, opacity: 0, ease: 'powe3.out' });
    tl.set(this.component, { display: 'none' });
  }

  private measureMenu() {
    gsap.set(this.component, { x: '-100%', display: 'block' });
    this.menuWidth = this.menuMain.getBoundingClientRect().width;
    gsap.set(this.component, { x: '0%', display: 'none' });

    console.log('here', this.menuWidth);
  }
}

export const menu = () => {
  new Menu();
};

export default menu;
