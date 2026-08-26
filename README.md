# zije.me

Premium Slovak online magazine about intimacy, sexuality, the body, mind, soul, and relationships.

## Positioning

> zije.me je moderný magazín o intimite, sexualite a vzťahu k sebe.

The public website is editorial-first. It helps adults understand intimacy through evidence-aware articles, practical reflections, and a clear connection between the body, mind, and soul. It serves individuals and couples without prescribing a universal sexual norm.

Vitae Amoris remains a work-in-progress concept at `/vitae-amoris/`. It is not currently available for download. The former shop-led website concept is stored offline outside the published website and is not part of the current navigation or content strategy.

## Brand governance

The documents in `docs/` are the source of truth for brand and editorial decisions:

- `docs/brand-foundation.md` — definition, promise, audience, values, pillars, boundaries, and decision filter
- `docs/controlled-terminology.md` — approved definitions, evidence anchors, usage rules, and migration registry
- `docs/channel-message-matrix.md` — messaging for the magazine, Instagram, and Vitae Amoris
- `docs/content-architecture.md` — taxonomy, launch series, editorial standards, and content migration

The controlled concept path is:

> Intímna gramotnosť → Intímny rytmus → Vedomá intimita → Sexuálna integrita → Intímna dlhovekosť

The earlier Intímna vitalita / Modrá zóna intimity framework has been removed from the public site. `Modrá zóna intimity` is not approved as a product, goal, or methodology name.

## Development

The production site uses the magazine-first concept:

- `index.html`
- `styles.css`
- `script.js`
- `filozofia/` — public definition, framework, rituals, and values
- `vitae-amoris/` — coming-soon product concept
- `clanky/` — article data, taxonomy, sources, generator, and generated pages
- `assets/` — optimized brand and editorial media

Serve the folder through an HTTP server to test production paths and magazine links.

## Deployment

The repository is configured for GitHub Pages with the custom domain `zije.me` through the `CNAME` file.
