# zije.me

Premium Slovak intimacy and wellness platform **zije.me** for individuals and couples.

## Positioning

> Intimita začína vzťahom k sebe.

The public homepage introduces the intimacy-first brand philosophy, daily rituals, expert magazine, and the Vitae Amoris private ritual planner. Product listings live exclusively in the Shopify store at `shop.zije.me`; the homepage presents the store only as a primary journey.

The dedicated `/filozofia/` page defines the zije.me IP framework: Intímna vitalita, Telo–Myseľ–Duša, everyday rituals, the orientational Index intímnej vitality, Modrá zóna intimity, seven content pillars, and the controlled terminology glossary.

The signed Android build linked from the homepage is stored at `downloads/VitaeAmoris.v40.apk`.

## Shopify integration

The primary hero CTA links to `https://shop.zije.me`. Customer accounts and all product merchandising stay inside Shopify. The matching Shopify theme lives in `../zije-shopify-theme`.

## Development

The production site uses the custom intimacy-first concept:

- `index.html`
- `styles.css`
- `script.js`
- `assets/` — optimized brand photography and product icons

Serve the folder through an HTTP server to test production paths and magazine links.

## Deployment

The repository is configured for GitHub Pages with the custom domain `zije.me` through the `CNAME` file.
