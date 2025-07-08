import gsap from 'gsap';

class SliderGallery {
  private component: HTMLElement;
  private imageMain: HTMLElement;
  private imagePreviews: HTMLElement[];

  private currentIndex = 0;

  constructor() {
    this.component = document.querySelector('.component_slider-bento') as HTMLElement;
    this.imageMain = document.querySelector('.slider-bento_main-img') as HTMLElement;
    this.imagePreviews = [
      ...this.component.querySelectorAll('.slider-bento_item'),
    ] as HTMLElement[];

    this.setup();
  }

  private setup() {
    const getFrst = this.imagePreviews[0].children[0] as HTMLImageElement;
    const setSrc = getFrst.src;

    const setMain = this.imageMain.children[0] as HTMLImageElement;
    setMain.src = setSrc;
  }

  private setListeners() {}

  private handleSwap() {}
}

export const sliderGallery = () => {
  new SliderGallery();
};

export default sliderGallery;
