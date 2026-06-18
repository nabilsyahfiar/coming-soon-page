# AGENTS.md

## Project
Static "Coming Soon" landing page — vanilla HTML/CSS/JS with no build step, package manager, or framework.

## Commands
- No build tooling. Open `index.html` in a browser to preview.

## Architecture
- `index.html` — single page, CDN dependency on Google Fonts only
- `css/styles.css` — all styles including responsive breakpoints
- `js/scripts.js` — light/dark theme switcher via `prefers-color-scheme`

## Conventions

### Cache busting
CSS and JS references in `index.html` use `?v=YYYYMMDD-N` query strings. Bump the version when modifying those files.

### Theme system
Theme is driven by `data-theme` attribute on `<html>`, not classes. Values: `"light"` / `"dark"`.
- CSS: `:root, :root[data-theme="light"]` for light; `:root[data-theme="dark"]` for dark
- JS: `scripts.js` reads `prefers-color-scheme: dark` media query and sets `data-theme` accordingly

### Icons
Inline SVG with `fill="currentColor"` — inherits color from parent `.btn`. No icon library needed.
