import gsap from 'gsap';

export const homeHeroReveal = () => {
  const hero = document.querySelector('.section_hero') as HTMLElement;
  const heroHeader = hero.querySelector('.hero_header');

  const tl = gsap.timeline();
  tl.from(heroHeader, { filter: 'blur(100px)', opacity: 0 });
};
