# razeem.github.io

Portfolio of **Razeem Ahmad B T** — Senior Drupal Developer & Tech Lead,
Acquia Certified Back-end Specialist (Drupal 10).

**Live site:** <https://razeem.github.io>

## Stack

Plain HTML + SCSS + vanilla JavaScript — no frontend framework. Styles and
scripts are compiled with **webpack 5** and **sass** into a minified bundle.

| Feature | Implementation |
|---|---|
| Dark / light theme | CSS custom properties + `data-theme`, persisted in `localStorage`, respects `prefers-color-scheme` |
| Scroll animations | `IntersectionObserver` reveal + nav scroll-spy |
| Project filters | Data-attribute filtering with chip buttons |
| Module accordions | Native `<details>` / `<summary>` — no JS |
| SEO / sharing | Open Graph + Twitter meta, JSON-LD `Person` schema, custom OG image |

## Project structure

```
├── index.html              # Single-page markup
├── src/
│   ├── js/main.js          # JS entry (imports the SCSS)
│   └── scss/               # Partials: _theme, _base, _header, _hero,
│                           #   _sections, _projects, _skills-edu-contact,
│                           #   _footer, _animations, _responsive
├── assets/
│   ├── build/              # Compiled bundle (committed — served by Pages)
│   └── icons/              # favicon.svg / PNGs / og-image.png
├── webpack.config.js
└── package.json
```

## Development

```bash
npm install        # once
npm run watch      # dev build + watch, with source maps
npm run build      # minified production build → assets/build/
```

Open `index.html` in a browser (no server needed) to preview.

## Deployment

Hosted on **GitHub Pages**, served from the root of `main`. The compiled
`assets/build/` output is committed, so deploying is:

```bash
npm run build
git add -A && git commit -m "..."
git push origin main
```

> After editing anything under `src/`, always run `npm run build` before
> committing — Pages serves the committed bundle, not the sources.

## Icons & meta image

`assets/icons/favicon.svg` is the master monogram. The PNG / ICO derivatives
(`favicon-32.png`, `apple-touch-icon.png`, `favicon.ico`) and the
1200×630 `og-image.png` were rasterised from SVG sources via headless
Chromium (Playwright).
