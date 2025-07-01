import loadComponent from '$utils/loadComponent';
import { initSmoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('🌏 Calamigos Guest Ranch 🍃');

  document.addEventListener('click', (e) => {
    console.log('clicked', e.target);
  });

  initSmoothScroll();

  console.log(document.querySelector('.component_menu')); // Should not be null

  loadComponent('.component_menu', () => import('$components/menu'));
});
