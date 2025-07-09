import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class SliderFade {
  private component: HTMLElement;
  private sliderMask: HTMLElement;
  private sliderImages: HTMLImageElement[];
  private sliderIndicators: HTMLElement[];

  private sliderDuration: number;
  private currentIndex = 0;
  private progressTL: gsap.core.Tween | gsap.core.Timeline | null = null;

  constructor() {
    this.component = document.querySelector('.component_slider-full') as HTMLElement;
    this.sliderMask = this.component.querySelector('.slider-full_mask') as HTMLElement;
    this.sliderImages = [
      ...this.component.querySelectorAll('.slider-full_img'),
    ] as HTMLImageElement[];

    this.sliderIndicators = [
      ...this.component.querySelectorAll('.slider-full_pill.is-fill'),
    ] as HTMLElement[];

    this.sliderDuration = Number(this.component.dataset.sliderSpeed);
    if (Number.isNaN(this.sliderDuration)) this.sliderDuration = 8;

    this.setup();
    this.scroller();
    this.startSlider();
  }

  private setup() {
    gsap.set(this.sliderMask, { width: '100%', height: '80svh' });
    gsap.set(this.sliderImages, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      scale: 1.2,
    });
  }

  private scroller() {
    const st = gsap.timeline({
      scrollTrigger: {
        trigger: this.component,
        start: 'top 20%',
        end: 'bottom 20%',
        scrub: true,
        // markers: true,
      },
    });

    st.to(this.sliderImages, { scale: 1, ease: 'linear' });
  }

  private startSlider() {
    if (this.sliderImages.length <= 1) return;

    this.sliderImages.forEach((img, index) => {
      gsap.set(img, { autoAlpha: index === this.currentIndex ? 1 : 0 });
    });

    if (this.sliderIndicators.length !== 0) this.animateProgess(this.currentIndex);

    setInterval(() => this.advanceSlider(), this.sliderDuration * 1000);
  }

  private advanceSlider() {
    const previous = this.currentIndex;
    const next = (this.currentIndex + 1) % this.sliderImages.length;
    this.currentIndex = next;

    gsap.to(this.sliderImages[previous], { autoAlpha: 0, duration: 1, ease: 'power2.inOut' });
    gsap.to(this.sliderImages[next], { autoAlpha: 1, duration: 1, ease: 'power2.inOut' });

    if (this.sliderIndicators.length !== 0) this.animateProgess(this.currentIndex);
  }

  private animateProgess(index: number) {
    if (this.sliderIndicators.length === 0) return;

    this.progressTL?.kill();

    this.sliderIndicators.forEach((item, i) => {
      if (i !== index) gsap.set(item, { x: '-100%' });
    });

    const bar = this.sliderIndicators[index];

    this.progressTL = gsap.timeline();

    this.progressTL.fromTo(
      bar,
      { x: '-100%' },
      { duration: this.sliderDuration - 0.2, x: '0%', ease: 'linear' },
    );
    this.progressTL.to(bar, {
      x: '100%',
      duration: 0.2,
      ease: 'power1.out',
    });
  }
}

export const sliderFade = () => {
  new SliderFade();
};
export default sliderFade;
