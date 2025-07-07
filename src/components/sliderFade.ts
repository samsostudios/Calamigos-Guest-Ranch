import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class SliderFade {
  private component: HTMLElement;
  private sliderMask: HTMLElement;
  private sliderImages: HTMLImageElement[];
  private currentIndex = 0;

  constructor() {
    this.component = document.querySelector('.component_slider-full') as HTMLElement;
    this.sliderMask = this.component.querySelector('.slider-full_mask') as HTMLElement;
    this.sliderImages = [
      ...this.component.querySelectorAll('.slider-full_img'),
    ] as HTMLImageElement[];

    this.setup();
    this.startSlider();
  }

  private setup() {
    console.log('setup', this.sliderImages);
    gsap.set(this.sliderMask, { width: '100%', height: '80svh' });
    gsap.set(this.sliderImages, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      scale: 1.2,
    });

    this.scroller();
  }

  private scroller() {
    const st = gsap.timeline({
      scrollTrigger: {
        trigger: this.component,
        start: 'top 20%',
        end: 'bottom 20%',
        scrub: true,
        markers: true,
      },
    });

    st.to(this.sliderImages, { scale: 1, ease: 'linear' });
  }

  private startSlider() {
    if (this.sliderImages.length <= 1) return;

    const duration = 8;

    this.sliderImages.forEach((img, index) => {
      gsap.set(img, { autoAlpha: index === this.currentIndex ? 1 : 0 });
    });

    setInterval(() => {
      const previous = this.sliderImages[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.sliderImages.length;
      const next = this.sliderImages[this.currentIndex];

      gsap.to(previous, { autoAlpha: 0, duration: 1, ease: 'power2.inOut' });
      gsap.to(next, { autoAlpha: 1, duration: 1, ease: 'power2.inOut' });
    }, duration * 1000);
  }
}

export const sliderFade = () => {
  new SliderFade();
};
export default sliderFade;
