import gsap from 'gsap';

class BentoSlider {
  private component: HTMLElement;
  private main: HTMLElement;
  private mainImages: HTMLImageElement[];
  private preview: HTMLElement;
  private previewImages: HTMLElement[];
  private nextButton: HTMLButtonElement;
  private prevButton: HTMLButtonElement;

  private currentIndex = 0;

  constructor() {
    this.component = document.querySelector('.component_slider-bento') as HTMLElement;
    this.main = this.component.querySelector('.slider-bento_main') as HTMLElement;
    this.mainImages = [...this.main.querySelectorAll('img')] as HTMLImageElement[];
    this.preview = this.component.querySelector('.slider-bento_preview') as HTMLElement;
    this.previewImages = [...this.preview.querySelectorAll('img')] as HTMLImageElement[];

    this.nextButton = document.querySelector('#bentoNext') as HTMLButtonElement;
    this.prevButton = document.querySelector('#bentoPrev') as HTMLButtonElement;

    this.setup();
    this.setListeners();
  }

  private setup() {
    this.mainImages.forEach((img, i) => {
      if (i !== this.currentIndex) img.style.display = 'none';
    });
    this.previewImages.forEach((img, i) => {
      if (i !== this.currentIndex) {
        const imgParent = img.parentElement as HTMLElement;
        imgParent.classList.remove('is-active');
      }
    });
  }

  private setListeners() {
    this.nextButton.addEventListener('click', () => {
      const nextIndex = (this.currentIndex + 1) % this.mainImages.length;
      this.handleSwap(nextIndex, 'next');
    });
    this.prevButton.addEventListener('click', () => {
      const prevIndex = (this.currentIndex - 1 + this.mainImages.length) % this.mainImages.length;
      this.handleSwap(prevIndex, 'prev');
    });
    this.previewImages.forEach((img, i) => {
      img.addEventListener('click', () => {
        if (i !== this.currentIndex) {
          const total = this.mainImages.length;
          const diff = (i - this.currentIndex + total) % total;
          const direction = diff === 0 ? 'jump' : diff <= total / 2 ? 'next' : 'prev';
          this.handleSwap(i, direction);
        }
      });
    });
  }

  private handleSwap(targetIndex: number, direction: string) {
    if (targetIndex === this.currentIndex) return;

    const currentImg = this.mainImages[this.currentIndex];
    const nextImg = this.mainImages[targetIndex];

    const currentPreview = this.previewImages[this.currentIndex] as HTMLElement;
    const currentPreviewParent = currentPreview.parentElement as HTMLElement;
    const nextPreview = this.previewImages[targetIndex] as HTMLElement;
    const nextPreviewParent = nextPreview.parentElement as HTMLElement;

    const tl = gsap.timeline();

    const outY = direction === 'prev' ? '100%' : '-100%';
    const inY = direction === 'prev' ? '-100%' : '100%';

    tl.set(currentImg, { zIndex: 1 });
    tl.set(nextImg, { zIndex: 0, display: 'block', y: inY });

    tl.to(currentImg, { duration: 1.5, y: outY, ease: 'power3.inOut' });
    tl.to(nextImg, { duration: 1.5, y: '0%', ease: 'power3.inOut' }, '<');

    tl.set(currentImg, { display: 'none', y: '0%', zIndex: 0 });
    tl.set(nextImg, { zIndex: 1 });

    currentPreviewParent.classList.remove('is-active');
    nextPreviewParent.classList.add('is-active');

    this.currentIndex = targetIndex;
  }
}

export const bentoSlider = () => {
  new BentoSlider();
};

export default bentoSlider;
