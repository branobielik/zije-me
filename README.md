# zije.me

Brand-first landing page for the Slovak wellness and lifestyle concept **zije.me**.

## Positioning

> Všetko pre telo, dušu a myseľ.

The public homepage introduces the brand philosophy, wellbeing areas, Chronos Vitae life planner, and community partnership model. The future Shopify store is intentionally separate and is not linked from the initial landing page.

## Development

The site mirrors the approved published Figma Make design:

- `index.html`
- `_components/v2/` — exported component bundle and styles
- `_runtimes/` — Figma Sites runtime
- `_json/` — page definition

Serve the folder through an HTTP server; ES module imports do not work correctly from `file://`.

## Deployment

The repository is configured for GitHub Pages with the custom domain `zije.me` through the `CNAME` file.
