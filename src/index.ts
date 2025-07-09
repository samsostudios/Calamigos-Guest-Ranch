import loadComponent from '$utils/loadComponent';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('🌏 Calamigos Guest Ranch 🍃');

  // document.addEventListener('click', (e) => {
  //   console.log('clicked', e.target);
  // });
  console.log('!!!', document.querySelector('.component_transition'));
  initSmoothScroll();

  loadComponent('.component_preloader', () => import('$components/preloader'));
  loadComponent('.component_menu', () => import('$components/menu'));
  loadComponent('.component_transition', () => import('$components/pageTransition'));
  loadComponent('[data-hero-parallax]', () => import('$components/heroParallax'));
  loadComponent('.component_slider-full', () => import('$components/sliderFade'));
  loadComponent('.component_slider-bento', () => import('$components/bentoSlider'));
});
