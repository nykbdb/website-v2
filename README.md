# LUXE Ambassadors — Website

A static site for a Las Vegas brand ambassador agency, with pages for
prospective ambassadors, clients booking talent, investors, and general
contact.

**"LUXE Ambassadors" is a placeholder name/brand** — swap it for your real
company name before launch (see "Before you launch" below).

## Structure

```
index.html         Home
about.html          Our story / founders / mission
ambassadors.html    For talent — benefits, process, application form
clients.html        For clients — services, process, booking inquiry form
investors.html      For investors — opportunity, traction, inquiry form
contact.html        General contact form + contact details
css/style.css       Shared styles (colors, layout, components)
js/main.js          Mobile nav, active-link highlighting, form submission
```

Pure static HTML/CSS/JS — no build step, no dependencies. Open `index.html`
in a browser, or host the folder as-is on Netlify, Vercel, GitHub Pages, or
any static web host.

## Before you launch

1. **Replace the placeholder brand name.** "LUXE Ambassadors" appears in
   every page's `<title>`, header, footer, and copy — find/replace it with
   your real company name across all `.html` files.

2. **Formspree is connected.** All four forms (`ambassadors.html`,
   `clients.html`, `investors.html`, `contact.html`) post to the same
   Formspree endpoint (`https://formspree.io/f/mqpkqqjj`). Each submission
   carries a hidden `form_type` field ("Ambassador Application", "Client
   Booking Inquiry", "Investor Inquiry", or "General Contact") so you can
   tell them apart in the Formspree dashboard/CSV export even though they
   share one inbox. If you later want separate inboxes per form, create
   additional forms at [formspree.io](https://formspree.io) and update the
   relevant `action=""` attribute.

3. **Swap in real photography.** The dark gradient boxes labeled
   "Event & Talent Photography" etc. (`.image-frame` divs) are placeholders
   — replace them with `<img>` tags pointing to real event and ambassador
   photos once you have usage rights.

4. **Update contact details.** Email, phone, and address in the footer and
   `contact.html` are placeholders — update them everywhere.

5. **Review copy for accuracy.** Stats (roster size, events staffed, etc.)
   and founder bio details are illustrative placeholders — replace with
   your real numbers and story.

## Design

- Colors: black, turquoise, gold, and white/ivory — defined as CSS custom
  properties at the top of `css/style.css` for easy adjustment.
- Fonts: Playfair Display (headings) + Poppins (body), loaded from Google
  Fonts.
