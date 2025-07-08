import gsap from 'gsap';

class BentoSlider {
  private component: HTMLElement;
  private bentoMain: HTMLElement;
  private bentoPlaceholders: HTMLImageElement[];
  private imagePreviews: HTMLElement[];

  private currentIndex = 0;

  constructor() {
    this.component = document.querySelector('.component_slider-bento') as HTMLElement;
    this.bentoMain = document.querySelector('.slider-bento_main-img') as HTMLElement;
    this.bentoPlaceholders = [...this.bentoMain.children] as HTMLImageElement[];
    this.imagePreviews = [
      ...this.component.querySelectorAll('.slider-bento_item'),
    ] as HTMLElement[];

    this.setup();
  }

  private setup() {
    this.imagePreviews.forEach((img, i) => {
      console.log(img, i);
      const setImg = img.children[0] as HTMLImageElement;
      if (setImg) {
        const setSrc = setImg.src;
      }
    });
    // const getFrst = this.imagePreviews[0].children[0] as HTMLImageElement;
    // const setSrc = getFrst.src;
    // const setMain = this.imageMain.children[0] as HTMLImageElement;
    // setMain.src = setSrc;
  }

  private setListeners() {}

  private handleSwap() {}
}

export const bentoSlider = () => {
  new BentoSlider();
};

export default bentoSlider;
