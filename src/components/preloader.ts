import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

import { breakpoints } from '$utils/deviceInfo';

gsap.registerPlugin(DrawSVGPlugin);

class Preloader {
  private component: HTMLElement;
  private loaderHighlights: HTMLElement[];
  private LoaderTracks: HTMLElement[];
  private logo: SVGAElement;
  private paths: SVGPathElement[];
  private bp: string;

  constructor() {
    this.component = document.querySelector('.component_preloader') as HTMLElement;
    this.loaderHighlights = [
      ...this.component.querySelectorAll('.component_span.is-highlight'),
    ] as HTMLElement[];
    this.LoaderTracks = [
      ...this.component.querySelectorAll('.component_span.is-track'),
    ] as HTMLElement[];
    this.logo = this.component.querySelector('#preloadLogoMain') as SVGAElement;
    this.paths = [...this.logo.querySelectorAll('path')] as SVGPathElement[];

    this.bp = breakpoints()[0] as string;

    console.log('bp', this.bp, this.paths);

    gsap.set(this.paths, { stroke: 'currentColor', strokeWidth: 1, fill: 'none' });

    this.animate();
  }

  private animate() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.reveal();
      },
    });
    tl.fromTo(
      this.paths,
      { drawSVG: '0%' },
      { drawSVG: '100%', duration: 1, ease: 'power1.inOut' },
      '<',
    );
    tl.fromTo(
      this.LoaderTracks,
      { opacity: 0 },
      { duration: 1, opacity: 0.2, ease: 'power3.inOut' },
      '<',
    );
    tl.fromTo(
      this.paths,
      { fillOpacity: 0 },
      { duration: 1, fill: 'currentColor', fillOpacity: 1, strokeOpacity: 0, ease: 'power1.inOut' },
      '<0.5',
    );
    if (this.bp !== 'mobile-portrait') {
      tl.to(this.loaderHighlights[0], { duration: 1, width: '100%', ease: 'power3.in' }, '<');
    }

    tl.to(this.loaderHighlights[1], { duration: 1, width: '100%', ease: 'power3.out' });
  }

  private reveal() {
    const hero = document.querySelector('.section_hero') as HTMLElement;
    const heroHeader = hero.querySelector('.hero_header');
    const nav = document.querySelector('.component_nav');
    const tl = gsap.timeline({
      onComplete: () => {
        // homeHeroReveal();
      },
    });

    tl.to(this.loaderHighlights[0], { x: '100%', ease: 'power3.in' });
    tl.to(this.logo, { opacity: 0, ease: 'power4.out' }, '<');
    tl.to(this.loaderHighlights[1], { x: '100%', ease: 'power3.out' });
    tl.to(this.LoaderTracks, { duration: 1, opacity: 0, ease: 'circ.out' }, '<0.5');
    tl.to(this.component, { duration: 2, opacity: 0, display: 'none', ease: 'power3.out' }, '<');
    tl.from(
      heroHeader,
      { duration: 1, filter: 'blur(100px)', opacity: 0, ease: 'power3.out' },
      '<',
    );
    tl.from(nav, { duration: 1, filter: 'blur(100px)', opacity: 0, ease: 'power3.out' }, '<');
  }
}

export const preloader = () => {
  new Preloader();
};

export default preloader;
