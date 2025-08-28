import parallaxImages from '$components/parallaxImages';
import formHandler from '$utils/formHandler';
import loadComponent from '$utils/loadComponent';
import selfbook from '$utils/selfbook';
// import skipperFix from '$utils/skipperFix';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('🌏 Calamigos Guest Ranch 🍃');

  // const bp = breakpoints();
  // console.log('[INFO]', bp);

  // document.addEventListener('click', (e) => {
  //   console.log('clicked', e.target);
  // });

  initSmoothScroll();
  // skipperFix();
  parallaxImages();
  selfbook();
  formHandler();

  loadComponent('.component_preloader', () => import('$components/preloader'));
  loadComponent('.component_menu', () => import('$components/menu'));
  loadComponent('.component_transition', () => import('$components/pageTransition'));
  loadComponent('[data-hero-parallax]', () => import('$components/heroParallax'));
  loadComponent('.component_slider-full', () => import('$components/sliderFade'));
  loadComponent('.component_slider-bento', () => import('$components/bentoSlider'));
  loadComponent('.component_pop-form', () => import('$components/formPopup'));
});
