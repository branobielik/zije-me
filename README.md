# zije.me

Premium Slovak intimacy and wellness platform **zije.me** for individuals and couples.

## Positioning

> Intimita začína vzťahom k sebe.

The public homepage introduces the intimacy-first brand philosophy, curated products, rituals, expert magazine, and the Vitae Amoris private ritual planner. The Shopify store is hosted separately on `shop.zije.me` and is linked from the header.

## Shopify integration

The header bag links to `https://shop.zije.me`. Customer accounts stay inside the Shopify storefront and are intentionally not shown in the main zije.me navigation. The matching Shopify theme lives in `../zije-shopify-theme`.

## Development

The production site uses the custom intimacy-first concept:

- `index.html`
- `styles.css`
- `script.js`
- `assets/` — optimized brand photography and product icons

Serve the folder through an HTTP server to test production paths and magazine links.

## Deployment

The repository is configured for GitHub Pages with the custom domain `zije.me` through the `CNAME` file.
