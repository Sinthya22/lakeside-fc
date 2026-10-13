# Lakeside FC Website

Official one-page website for **Lakeside FC**, a recreational youth soccer club in Etobicoke, Ontario, training at Centennial Park.

**Play. Grow. Belong.**

## Features

- Responsive one-page layout (desktop, tablet and mobile)
- English by default, with an EN / ES language switcher (the choice is remembered)
- Sections: Home, Why Choose Lakeside FC (About), Programs, Call to Action, Footer with contact form
- Contact form with validation
- Plain HTML, CSS and JavaScript: no build step, no dependencies

## Project structure

```
lakeside-fc/
├── index.html            # Page structure and content (English)
├── css/
│   └── styles.css        # All styles; brand colors are at the top in :root
├── js/
│   ├── translations.js   # All site text in English and Spanish
│   └── main.js           # Language switcher, menu, scrolling, contact form
└── assets/
    └── images/
        ├── logo.svg              # Club crest (header and footer)
        ├── favicon.svg           # Browser tab icon
        ├── favicon-32.png        # Browser tab icon (PNG fallback)
        ├── apple-touch-icon.png  # Icon for phone home screens
        ├── hero-banner.jpg       # Hero background
        └── footer-bg.jpg         # Footer background
```

## Run it locally

1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in any browser.

## Editing content

- **Text:** edit `js/translations.js`. Each text has an English (`en`) and Spanish (`es`) version with the same key.
- **Colors:** edit the variables at the top of `css/styles.css`.
- **Background images:** replace `assets/images/hero-banner.jpg` or `assets/images/footer-bg.jpg` with new images using the same file names. The paths are set in `css/styles.css` (sections 5 and 10).

## Contact form

GitHub Pages only serves static files, so the form cannot send email by itself.

- **Default:** pressing *Submit* opens the visitor's email app with the message ready to send to `info@lakesidefc.ca`.
- **Recommended:** create a free form at [Formspree](https://formspree.io), then paste the form URL into `FORM_ENDPOINT` at the top of `js/main.js`. Messages will then arrive in your inbox directly from the page.

## Publish with GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute, the site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Brand colors

| Role | Name | HEX |
| --- | --- | --- |
| Primary (buttons, titles, crest) | Forest green | `#10432B` |
| Footer, gradient end | Deep green | `#0A2E1D` |
| Cards, hover, gradient start | Grass green | `#1F6B3F` |
| Soft section backgrounds | Mint | `#EAF4EE` |
| Accent ("Register Now") | Gold | `#F6C808` |
| Text on green | White | `#FFFFFF` |
| Body text | Charcoal | `#1E293B` |

Font: [Manrope](https://fonts.google.com/specimen/Manrope)

---

© 2026 Lakeside FC. All rights reserved.
