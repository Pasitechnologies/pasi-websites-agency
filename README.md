# PASI Website Agency — Phase 1 homepage

A responsive, single-page brand and homepage experience for PASI Website Agency, built with semantic HTML, CSS and vanilla JavaScript. No build step or frontend framework is required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser, or serve the project directory with a local static server. For example:

   ```bash
   python3 -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

Google Fonts, Font Awesome, and the demonstration photography are loaded from their public CDNs, so an internet connection is needed for those assets. The page itself remains usable without the external icon/font requests.

## Project structure

```text
index.html
css/
  style.css
  responsive.css
  animations.css
js/
  main.js
  navigation.js
assets/
  logo/pasi-mark.svg
```

## What's included

- Sticky transparent-to-solid navigation with mobile menu and active-section indicator.
- Hero visual composed with CSS and a responsive website/device mockup.
- About, six services, three clearly labelled demonstration portfolio concepts, six benefits, five process steps, contact CTA and footer.
- Accessible portfolio concept dialogs, scroll reveals, back-to-top control, focus states and reduced-motion support.
- Responsive layouts for mobile, tablet and desktop.

## Before launch

- Replace the `mailto:` CTA destinations with PASI's confirmed business email address. They intentionally contain no pre-filled address because none was provided.
- Add confirmed contact and social profile details to the footer when available.
- Review the photography and CDN usage/licensing for the intended production deployment. Portfolio imagery is illustrative; the projects are explicitly described as demonstration concepts, not client work.
- Test on the final hosting domain and verify image/CDN availability. Add a final Open Graph image and canonical URL once the production domain is known.

This is **Phase 1 only**. It does not include additional pages, a database, Supabase, authentication, or an admin dashboard.
