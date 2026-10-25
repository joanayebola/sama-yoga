# Sama Yoga — a frontend showcase

A calm, premium one-page website for a fictional yoga & breathwork studio,
built as a creative frontend portfolio piece. **Frontend only** — no backend,
no real booking; calls to action are `mailto:` links by design.

> Move slowly. Breathe deeply.

## Stack

- **Vite 8 + React 19 + TypeScript** (strict, `tsc -b` in the build)
- **GSAP 3 + ScrollTrigger** for the animation system
- **Hand-written CSS design system** (custom properties, no framework) —
  Fraunces for display type, Outfit for body/UI, via Google Fonts
- Photography via **Unsplash** (`images.unsplash.com`)

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # tsc -b && vite build  → dist/
npm run preview   # serve the production build
```

## The animation approach

Restraint is the brief: **few signature motions, executed slowly**
(durations 0.9–1.6s, `power3.out` / `sine` easing, nothing bouncy).

1. **The breath orb (the signature).** A large soft radial-gradient circle in
   the hero breathes on an ~11s cycle — swelling as "inhale" shows, settling
   as "exhale" cross-fades in. One GSAP timeline, `sine.inOut`, in
   `src/lib/anim.ts`.
2. **Scroll reveals.** Sections fade and rise 24px, once, via ScrollTrigger.
   Stagger (max 0.08s) happens only within card/teacher/pricing grids.
3. **Two parallax bands.** Only two full-width image bands on the page get a
   gentle scrubbed parallax (±6% `yPercent`).
4. **One marquee.** A single 42s linear loop of the practice names.
5. **Quiet hovers.** Card and portrait images scale to 1.04 over 0.8s; the nav
   gains a blurred background after the hero.

**Reduced motion:** a single `prefers-reduced-motion` check in
`src/lib/anim.ts` gates every GSAP animation, and a matching CSS media query
stops the marquee and transitions. With reduced motion, the orb rests, the
"inhale" label stays put, and all content is simply visible — nothing is ever
hidden by default in CSS.

## Structure

```
src/
  App.tsx            page assembly
  index.css          the design system (palette, type, every component)
  lib/
    anim.ts          all GSAP setup + the reduced-motion guard
    images.ts        the verified Unsplash URLs, in one place
  components/
    Nav · Hero · Marquee · Intro · Band · Practices · Schedule
    Teachers · Pricing · Testimonials · Visit · Footer
```

## Image credits

All photography is served from Unsplash and credited in the footer. Every
image URL was verified live (HTTP 200, `image/jpeg`) and visually reviewed
for content before being used — the full record is in `BUILD_LOG.md`.
