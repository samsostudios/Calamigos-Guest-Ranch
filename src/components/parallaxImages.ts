import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class ParallaxImages {
  private images: HTMLElement[];

  constructor() {
    this.images = [...document.querySelectorAll('[data-parallax]')] as HTMLElement[];

    // console.log('para', this.images);

    this.setScroller();
  }

  private setScroller() {
    this.images.forEach((img, i) => {
      // console.log('here', img.parentElement);

      let scale: number = Number(img.dataset.parallax);
      if (scale === 0) scale = 1.2;

      let parent = img.parentElement;
      while (parent && parent.tagName !== 'SECTION') {
        parent = parent.parentElement;
      }

      gsap.set(img, { scale: scale });

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true,
        },
      });

      st.to(img, { scale: 1, ease: 'linear' });

      if (parent) {
        console.log(`Image ${i} belongs to section:`, parent, scale);
      } else {
        console.warn(`No section found for image ${i}`);
      }
    });
  }
}

export const parallaxImages = () => {
  new ParallaxImages();
};
export default parallaxImages;
