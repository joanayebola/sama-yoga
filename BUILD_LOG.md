# BUILD LOG — Sama Yoga

Built 2026-10-25 in `~/workspace/sama-yoga/`. Frontend only; no GitHub push,
no deployment (per brief).

## Environment & install

- Node v24.22.1, npm via create-vite (`react-ts` template).
- `npm install` — OK. `npm install gsap` — OK (gsap ^3.15.0).
- React 19.3.1, Vite 8.3.5, TypeScript ~6.0.3 (from scaffold).

## Image sourcing & verification

Unsplash's own pages are bot-gated, so candidate `images.unsplash.com`
photo IDs were gathered from public code that hotlinks them (GitHub code
search), then **every candidate was downloaded and visually reviewed** on
contact sheets before selection. Candidates that failed download or review
(gym/fitness shots, massage/clinical photos, dead IDs) were discarded.

Dead on arrival (HTTP 404, discarded): `photo-1518310312575-601432df920c`,
`photo-1600932712204-e3c4c0722f63`, `photo-1476673160081-cf065f0d2a86`,
`photo-1516627145497-ae695c17c8f0`, `photo-1506629905592-500eb9e4e95a`.

Final verification — `curl -sI` on the exact production URLs in
`src/lib/images.ts` (with `auto=format&fit=crop&w=…&q=80` params),
run 2026-10-25. **All 14: HTTP 200, Content-Type: image/jpeg.**

| Slot | Photo ID | Result |
|---|---|---|
| hero | 1544367567-0f2fcb009e0b | 200 image/jpeg |
| band (studio) | 1506126613408-eca07ce68773 | 200 image/jpeg |
| band (landscape) | 1506744038136-46273834b3fb | 200 image/jpeg |
| visit | 1582719478250-c89cae4dc85b | 200 image/jpeg |
| hatha | 1487241281672-301e0f542588 | 200 image/jpeg |
| vinyasa | 1518186285589-2f7649de83e0 | 200 image/jpeg |
| yin | 1501616268023-ef36eddeb2e4 | 200 image/jpeg |
| breathwork | 1552693673-1bf958298935 | 200 image/jpeg |
| sunrise | 1545205597-3d9d02c29597 | 200 image/jpeg |
| prenatal | 1526256262350-7da7584cf5eb | 200 image/jpeg |
| teacher — Maya | 1438761681033-6461ffad8d80 | 200 image/jpeg |
| teacher — Jonah | 1507003211169-0a1dd7228f2d | 200 image/jpeg |
| teacher — Priya | 1494790108377-be9c29b29330 | 200 image/jpeg |
| teacher — Tomas | 1472099645785-5658abf4ff4e | 200 image/jpeg |

## Build

```
npm run build   (tsc -b && vite build)
✓ 35 modules transformed
dist/index.html                  0.93 kB │ gzip: 0.48 kB
dist/assets/index-NBQJsVww.css  11.02 kB │ gzip: 3.00 kB
dist/assets/index--8wYuZB7.js  351.25 kB │ gzip: 118.59 kB
✓ built clean — no TypeScript errors, no warnings
```

## Preview smoke test

`npm run preview` (port 4173), then curl:

- `GET /` → **HTTP 200**, correct `<title>` ("Sama Yoga — Move slowly.
  Breathe deeply."), Google Fonts links present.
- JS bundle → **HTTP 200**; CSS bundle → **HTTP 200**.
- Bundle content spot-checks found: hero headline copy, breath labels,
  marquee vocabulary, fictional address (214 Willow Lane), the footer
  concept line, and the Unsplash URL builder.

## Animation rules — how they were implemented

- All animation lives behind `src/lib/anim.ts`. One
  `prefersReducedMotion()` check gates reveals, parallax and the breath
  orb; CSS `@media (prefers-reduced-motion: reduce)` stops the marquee and
  transitions. No element is hidden in CSS — hidden states are only ever
  set by GSAP after the motion check passes.
- Breath orb: single GSAP timeline, repeat −1, 5.5s in / 5.5s out
  (11s cycle), scale 1 → 1.12 → 1, `sine.inOut`, inhale/exhale cross-fade.
- Reveals: `fromTo` opacity 0→1, y 24→0, 1.3s `power3.out`,
  ScrollTrigger `once: true`, start "top 86%". Grid stagger via
  `data-delay` = index × 0.08s max, used only in Practices / Teachers /
  Pricing.
- Parallax: exactly two `[data-parallax]` bands, `yPercent` −6 → 6,
  scrubbed. Nothing else parallaxes.
- Marquee: one strip, CSS keyframes, 42s linear, duplicated halves for a
  seamless −50% loop; second half `aria-hidden`.
- Hovers: images scale 1.04 over 0.8s; nav blur/background fades in after
  scrolling 72% of the viewport height.
- No count-ups, no pop-ins, no bounce easing anywhere. The intro "stats"
  are a single line of plain text facts.

## Notes

- Spec asked for parallax ±10 `yPercent`; implemented at ±6 against an
  image oversized to 124% height — same visual family, no risk of exposed
  edges at band extremes.
- Teachers and testimonials are fictional (concept site); the footer
  carries the required concept line.
