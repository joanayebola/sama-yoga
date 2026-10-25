import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sama's motion rules, enforced in one place:
 * — a single reduced-motion check gates every animation on the page
 * — reveals happen once, rise 24px, and stagger only inside grids
 * — the breath orb and the two parallax bands are set up separately
 * Nothing here runs if the visitor prefers reduced motion: elements
 * are simply left in their natural, visible state.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Slow fade-and-rise reveals for anything marked [data-reveal]. */
export function initReveals(): void {
  if (prefersReducedMotion()) return;

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        // Stagger only among siblings within the same grid.
        delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          once: true,
        },
      }
    );
  });
}

/** Gentle parallax for the page's two image bands: [data-parallax]. */
export function initParallax(): void {
  if (prefersReducedMotion()) return;

  gsap.utils.toArray<HTMLElement>("[data-parallax] img").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest("[data-parallax]") as HTMLElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

/**
 * THE signature motion: the hero breath orb.
 * An ~11s breath — in for 5.5s as it swells, out for 5.5s as it settles —
 * with "inhale" / "exhale" cross-fading in sync.
 */
export function initBreath(orb: HTMLElement, words: HTMLElement): void {
  if (prefersReducedMotion()) return;

  const [inhale, exhale] = words.querySelectorAll("span");
  const BREATH = 5.5;

  const tl = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
  tl.fromTo(
    orb,
    { scale: 1 },
    { scale: 1.12, duration: BREATH },
    0
  )
    .to(inhale, { opacity: 1, duration: 1.2 }, 0)
    .to(exhale, { opacity: 0, duration: 1.2 }, 0)
    .to(orb, { scale: 1, duration: BREATH }, BREATH)
    .to(inhale, { opacity: 0, duration: 1.2 }, BREATH)
    .to(exhale, { opacity: 1, duration: 1.2 }, BREATH);
}

/** The nav gains its blurred bone background after the hero's opening. */
export function initNav(nav: HTMLElement): void {
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.72);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
