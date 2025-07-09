import gsap from 'gsap';

class PageTransition {
  private component: HTMLElement;
  private links: HTMLAnchorElement[];
  private filteredLinks: HTMLAnchorElement[];
  private transitionPane: HTMLElement;
  private transitionFilter: HTMLElement;

  constructor() {
    this.component = document.querySelector('.component_transition') as HTMLElement;
    this.links = [...document.querySelectorAll('a')].map((item) => item as HTMLAnchorElement);
    this.filteredLinks = this.filterLinks();
    this.transitionPane = this.component.querySelector('.transition_container') as HTMLElement;
    this.transitionFilter = document.querySelector('.transition_filter') as HTMLElement;

    this.checkPage();
    this.setListeners();
  }

  private checkPage() {
    const windowLocation = window.location.pathname;

    if (windowLocation === '/') {
      console.log('CHECK');
      gsap.to(this.component, { display: 'none' });
    }

    this.animateOut();
  }

  private setListeners() {
    this.filteredLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const destination = item.href;
        this.animateIn(destination);
      });
    });

    // On Back Button
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }

  private animateIn(link: string) {
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = link;
      },
    });
    tl.set(this.component, { display: 'block' });
    tl.set(this.transitionFilter, { display: 'block' });
    tl.fromTo(
      this.transitionPane,
      { y: '100%', scale: 0.6, borderRadius: '3rem' },
      { duration: 1.5, y: '0%', scale: 1, borderRadius: 0, ease: 'power4.out' },
    );
    tl.fromTo(
      this.transitionFilter,
      { opacity: 0 },
      { duration: 1.5, opacity: 1, ease: 'power4.out' },
      '<',
    );
  }

  private animateOut() {
    const tl = gsap.timeline({
      onComplete: () => {
        // Reenable Scrolling
        gsap.set('html', { height: 'auto' });
        gsap.set('body', { overflow: 'auto' });
      },
    });
    tl.to(this.transitionPane, {
      duration: 2,
      y: '-100%',
      scale: 0.8,
      borderRadius: '3rem',
      ease: 'power4.out',
    });
    tl.to(this.transitionFilter, { duration: 2, opacity: 0, ease: 'power4.out' }, '<');

    tl.set(this.component, { display: 'none' });
    tl.set(this.transitionFilter, { display: 'none' });
  }

  private filterLinks() {
    const returnFilter = this.links.filter((link: HTMLAnchorElement) => {
      const temp = new URL(link.href, window.location.origin); // Create a URL object from the anchor's href
      const classList = link.className;

      const isInternal = temp.hostname === window.location.host;
      const isNotAnchor = !temp.href.includes('#');
      const isNotExternal = link.target !== '_blank';

      const isExcluded = /(w-commerce|cart_)/.test(classList);

      return isInternal && isNotAnchor && isNotExternal && !isExcluded;
    });

    return returnFilter;
  }
}
export const pageTransition = () => {
  new PageTransition();
};
export default pageTransition;
