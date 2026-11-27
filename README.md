# PASI Website Agency — Phase 2 multi-page frontend

A responsive, multi-page digital agency website built with semantic HTML, CSS and vanilla JavaScript. No build step or frontend framework is required. Phase 2 preserves the existing homepage and extends the same visual identity to the public information pages.

## Run locally

From the project directory, start a static server, for example:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. An internet connection is used for Google Fonts, Font Awesome and remote demonstration photography.

## Pages

- `index.html` — Phase 1 homepage.
- `about.html` — agency, mission, vision and values.
- `services.html` — six detailed service descriptions.
- `portfolio.html` — filtered gallery of clearly labelled demonstration concepts.
- `process.html` — five-stage collaborative project process.
- `contact.html` — contact details placeholders, client-side form validation and FAQ.
- `quote.html` — project brief form with client-side validation only.
- `privacy.html` — current frontend privacy information.

## Phase 2 functionality

- Shared sticky navigation, mobile menu, brand styling, footer and back-to-top control on Phase 2 pages.
- Accessible category buttons for portfolio filtering and native dialog project previews.
- Contact and quote forms validate locally. They **do not submit, send, or save data**; backend integration is not included in this phase.
- Scroll reveal effects respect reduced-motion preferences.

## Before launch

- Replace `https://example.com/...` canonical placeholders with the actual production URLs.
- Confirm and add PASI's official email, phone/WhatsApp number, working hours and social profiles. Until then, they are intentionally identified as unconfirmed rather than fabricated.
- The original Phase 1 homepage is preserved. Its original in-page navigation and anchor-based CTAs remain; Phase 2 pages use the shared multi-page navigation.
- Review remote image, font and icon provider terms and availability for production. The three portfolio entries are demonstration concepts, not claims about completed client work.
- Connect and test a real form service in the appropriate later phase before describing either form as live.

No Supabase, authentication, admin dashboard or other Phase 3/4 backend work is included.
