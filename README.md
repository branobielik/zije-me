# zije.me

Brand-first landing page for the Slovak wellness and lifestyle concept **zije.me**.

## Positioning

> Všetko pre telo, dušu a myseľ.

The public homepage introduces the brand philosophy, wellbeing areas, Chronos Vitae life planner, and community partnership model. The Shopify store is hosted separately on `shop.zije.me` (customer accounts included) and is linked from the navigation.

## Shopify integration

The navigation array `N` in `_components/v2/9dbe19e8df995749f761c4e411746acb8dad40e0.js` contains an external shop link added manually on top of the Figma export:

- `E-shop` -> `https://shop.zije.me` (Shopify Online Store)

Customer accounts stay inside the Shopify storefront and are intentionally not shown in the main zije.me navigation.

IMPORTANT: a fresh Figma Make export overwrites the `_components` bundle - re-apply this entry after every export. The matching Shopify theme lives in `../zije-shopify-theme`.

## Development

The site mirrors the approved published Figma Make design:

- `index.html`
- `_components/v2/` — exported component bundle and styles
- `_runtimes/` — Figma Sites runtime
- `_json/` — page definition

Serve the folder through an HTTP server; ES module imports do not work correctly from `file://`.

## Deployment

The repository is configured for GitHub Pages with the custom domain `zije.me` through the `CNAME` file.
