import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class HeroParallax {
  private component: HTMLElement;
  private heroBg: HTMLImageElement;
  private heroContent: HTMLElement;
  private heroSpacer: HTMLElement;

  constructor() {
    this.component = document.querySelector('.section_hero') as HTMLElement;
    this.heroBg = this.component.querySelector('img') as HTMLImageElement;
    this.heroContent = this.component.querySelector('.hero_layout') as HTMLElement;
    this.heroSpacer = document.querySelector('.hero_spacer') as HTMLElement;

    const heroOffset = this.heroSpacer.clientHeight;

    this.setScroller(heroOffset);
  }

  private setScroller(offset: number) {
    gsap.set(this.heroBg, { scale: 1.2 });

    const st = gsap.timeline({
      scrollTrigger: {
        trigger: this.component,
        start: `top top`,
        end: `bottom+=${offset} top`,
        scrub: 1,
        // markers: true,
      },
    });

    st.to(this.heroBg, { scale: 1, ease: 'linear' });
    st.to(this.heroContent, { y: '-50%', filter: 'blur(15px)', ease: 'linear' }, '<');
  }
}

export const heroParallax = () => {
  new HeroParallax();
};
export default heroParallax;
