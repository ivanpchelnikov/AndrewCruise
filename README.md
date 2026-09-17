# Cruise Whitsundays — React + Tailwind clone

A single-page recreation of the [cruisewhitsundays.com](https://www.cruisewhitsundays.com/) home page, built with Vite, React 19 and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173. `npm run build` produces a static bundle in `dist/`.

## What's included

| Section | Component |
| --- | --- |
| Utility bar + main nav with hover dropdowns, collapsing on scroll, mobile drawer | `src/components/Header.jsx` |
| Auto-rotating hero carousel (8 slides, arrows, dots, pause on hover) | `src/components/Hero.jsx` |
| "Reefworld Reimagined" / "Explore the Whitsundays" split blocks | `src/components/SplitFeature.jsx` |
| "Our Experiences" horizontal card carousel | `src/components/Experiences.jsx` |
| Acknowledgement of Country | `src/App.jsx` |
| TripAdvisor testimonials | `src/components/Testimonials.jsx` |
| Instagram grid with hover captions | `src/components/Instagram.jsx` |
| Newsletter signup, social links, address, link columns | `src/components/Footer.jsx` |
| "Ready to book?" modal (Book Now) | `src/components/BookModal.jsx` |

All copy, prices and image URLs live in `src/data/site.js`. Images are hot-linked from the site's imgix CDN — swap them for local assets under `public/` if you want the app to work offline.

## Theme

Brand colours and fonts are defined as Tailwind theme tokens in `src/index.css` (`slate-brand`, `teal-brand`, `grey-brand`, `font-display`, `font-body`). The original uses the proprietary "Styrene B" typeface; this clone substitutes Google's Archivo, with Open Sans for body text as on the original.
