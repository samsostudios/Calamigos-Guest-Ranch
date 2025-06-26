import loadComponent from '$utils/loadComponent';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('🌏 Calamigos Guest Ranch 🍃');

  initSmoothScroll();
});
