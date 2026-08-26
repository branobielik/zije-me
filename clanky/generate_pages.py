from __future__ import annotations

import html
import hashlib
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DATA_FILES = (
    ROOT / "intimita-more-data.js",
    ROOT / "intimita-data.js",
    ROOT / "articles-data.js",
)
DATA = "\n".join(path.read_text(encoding="utf-8") for path in DATA_FILES)
SOURCE_DATA = (ROOT / "sources-data.js").read_text(encoding="utf-8")
TAXONOMY_DATA = (ROOT / "taxonomy-data.js").read_text(encoding="utf-8")

ARTICLE_PATTERN = re.compile(
    r'slug: "(?P<slug>[^"]+)",\s*'
    r'category: "(?P<category>[^"]+)",\s*'
    r'title: "(?P<title>[^"]+)",\s*'
    r'excerpt: "(?P<excerpt>[^"]+)",\s*'
    r'readTime: "(?P<read_time>[^"]+)",\s*'
    r'date: "(?P<date>[^"]+)",\s*'
    r'isoDate: "(?P<iso_date>[^"]+)",\s*'
    r'image: "(?P<image>[^"]+)",\s*'
    r'imageAlt: "(?P<image_alt>[^"]+)"',
    re.MULTILINE,
)


def detail_page(article: dict[str, str]) -> str:
    seo_title = article.get("seo_title") or article["title"]
    seo_description = article.get("seo_description") or article["excerpt"]
    title = html.escape(seo_title, quote=True)
    headline = html.escape(article["title"], quote=True)
    excerpt = html.escape(seo_description, quote=True)
    slug = html.escape(article["slug"], quote=True)
    image = html.escape(article["image"], quote=True)
    canonical = f"https://zije.me/clanky/{slug}/"
    structured_data = json.dumps({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article["title"],
        "description": seo_description,
        "image": f"https://zije.me{article['image']}",
        "datePublished": article["iso_date"],
        "publisher": {
            "@type": "Organization",
            "name": "zije.me",
            "url": "https://zije.me/"
        },
        "mainEntityOfPage": canonical
    }, ensure_ascii=False)

    return f"""<!doctype html>
<html lang="sk">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title} | zije.me</title>
    <meta name="description" content="{excerpt}">
    <meta name="robots" content="index,follow">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{excerpt}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="{canonical}">
    <meta property="og:image" content="https://zije.me{image}">
    <meta property="article:published_time" content="{article["iso_date"]}">
    <script type="application/ld+json">{structured_data}</script>
    <link rel="canonical" href="{canonical}">
    <link rel="icon" href="/favicon.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/clanky/magazin.css">
  </head>
  <body data-article-slug="{slug}">
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="zije.me – domov">
          <img class="brand-mark" src="/assets/zije-logo-web.webp" alt="" aria-hidden="true">
          <span>zije.me</span>
        </a>
        <nav class="header-nav" aria-label="Kategórie magazínu">
          <a href="/clanky/?category=Intimita">Intimita</a>
          <a href="/clanky/?category=Telo">Telo</a>
          <a href="/clanky/?category=Myse%C4%BE">Myseľ</a>
          <a href="/clanky/?category=Du%C5%A1a">Duša</a>
        </nav>
      </div>
    </header>

    <main>
      <div class="article-shell">
        <a class="article-back" href="/clanky/">← Všetky články</a>
        <div id="articleRoot"></div>
      </div>
      <section class="related" aria-label="Súvisiace články">
        <p class="eyebrow">Pokračujte v čítaní</p>
        <h2>Súvisiace články</h2>
        <div id="relatedGrid" class="article-grid"></div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <a class="brand" href="/">
          <img class="brand-mark" src="/assets/zije-logo-web.webp" alt="" aria-hidden="true">
          <span>zije.me</span>
        </a>
        <nav class="footer-links" aria-label="Navigácia v pätičke">
          <a href="/clanky/">Magazín</a>
          <a href="/vitae-amoris/">Vitae Amoris</a>
          <a href="/filozofia/">Filozofia zije.me</a>
          <a href="/#co-je-intimita">O projekte</a>
        </nav>
      </div>
    </footer>

    <script src="/clanky/sources-data.js"></script>
    <script src="/clanky/intimita-more-data.js"></script>
    <script src="/clanky/intimita-data.js"></script>
    <script src="/clanky/articles-data.js"></script>
    <script src="/clanky/taxonomy-data.js"></script>
    <script src="/clanky/magazin.js"></script>
  </body>
</html>
"""


articles = [match.groupdict() for match in ARTICLE_PATTERN.finditer(DATA)]
if len(articles) != 51:
    raise SystemExit(f"Expected 51 articles, found {len(articles)}")

blocks = re.findall(r"(?ms)^  \{\n    slug: .*?^  \}(?:,|$)", DATA)
if len(blocks) != 51:
    raise SystemExit(f"Expected 51 complete article blocks, found {len(blocks)}")
for article, block in zip(articles, blocks):
    seo_title = re.search(r'(?m)^    seoTitle: "([^"]+)",?$', block)
    seo_description = re.search(r'(?m)^    seoDescription: "([^"]+)",?$', block)
    article["seo_title"] = seo_title.group(1) if seo_title else ""
    article["seo_description"] = seo_description.group(1) if seo_description else ""

article_slugs = [article["slug"] for article in articles]
if len(set(article_slugs)) != len(article_slugs):
    raise SystemExit("Article slugs must be unique.")
unexpected_categories = sorted({article["category"] for article in articles} - {"Telo", "Duša", "Myseľ", "Intimita"})
if unexpected_categories:
    raise SystemExit(f"Unexpected article categories: {unexpected_categories}")

source_slugs = set(re.findall(r'(?m)^  "([^"]+)": \[$', SOURCE_DATA))
all_slugs = set(article_slugs)
if source_slugs != all_slugs:
    missing = sorted(all_slugs - source_slugs)
    unexpected = sorted(source_slugs - all_slugs)
    raise SystemExit(f"Source coverage mismatch. Missing: {missing}; unexpected: {unexpected}")
source_blocks = {
    slug: body
    for slug, body in re.findall(
        r'(?ms)^  "([^"]+)": \[(.*?)(?=^  "[^"]+": \[|\n\};)',
        SOURCE_DATA,
    )
}
without_https_source = sorted(
    slug for slug in all_slugs
    if slug not in source_blocks or not re.search(r'url: "https://[^"]+"', source_blocks[slug])
)
if without_https_source:
    raise SystemExit(f"Every article must have at least one HTTPS source: {without_https_source}")

taxonomy_pattern = re.compile(
    r'^  "([^"]+)": \{ domains: \[([^\]]+)\], audience: "(solo|couple|both)", '
    r'topics: \[(.+)\], contentType: "([^"]+)" \}(?:,)?$',
    re.MULTILINE,
)
taxonomy_entries = {}
for slug, domains_raw, audience, topics_raw, content_type in taxonomy_pattern.findall(TAXONOMY_DATA):
    domains = re.findall(r'"([^"]+)"', domains_raw)
    topics = re.findall(r'\["([^"]+)", "([^"]+)"\]', topics_raw)
    taxonomy_entries[slug] = {
        "domains": domains,
        "audience": audience,
        "topics": topics,
        "content_type": content_type,
    }
taxonomy_slugs = set(taxonomy_entries)
if taxonomy_slugs != all_slugs:
    missing = sorted(all_slugs - taxonomy_slugs)
    unexpected = sorted(taxonomy_slugs - all_slugs)
    raise SystemExit(f"Taxonomy coverage mismatch. Missing: {missing}; unexpected: {unexpected}")
for slug, taxonomy in taxonomy_entries.items():
    if not taxonomy["domains"] or not set(taxonomy["domains"]) <= {"Telo", "Myseľ", "Duša"}:
        raise SystemExit(f"Invalid taxonomy domains for {slug}: {taxonomy['domains']}")
    if not 2 <= len(taxonomy["topics"]) <= 5:
        raise SystemExit(f"Every article needs 2–5 taxonomy topics: {slug}")
    if any(not topic_slug or not label for topic_slug, label in taxonomy["topics"]):
        raise SystemExit(f"Invalid taxonomy topic for {slug}")
    if not taxonomy["content_type"]:
        raise SystemExit(f"Missing content type for {slug}")

dates = [article["iso_date"] for article in articles]
if len(set(dates)) != 51:
    raise SystemExit("Article dates must be unique.")

image_paths = [ROOT.parent / article["image"].lstrip("/") for article in articles]
missing_images = [str(path) for path in image_paths if not path.is_file()]
if missing_images:
    raise SystemExit(f"Missing article images: {missing_images}")
image_hashes = [hashlib.sha256(path.read_bytes()).hexdigest() for path in image_paths]
if len(set(image_hashes)) != len(image_hashes):
    raise SystemExit("Every article must use a unique image.")

word_counts = []
for article, block in zip(articles, blocks):
    strings = re.findall(r'"([^"]*)"', block)
    word_count = sum(len(re.findall(r"\b[\wÀ-ž]+\b", value)) for value in strings)
    word_counts.append((article["slug"], word_count))
    minimum, maximum = (620, 1200) if article["category"] == "Intimita" else (520, 900)
    if not minimum <= word_count <= maximum:
        raise SystemExit(f"Unexpected article length for {article['slug']}: {word_count} words")

for article in articles:
    directory = ROOT / article["slug"]
    directory.mkdir(exist_ok=True)
    (directory / "index.html").write_text(detail_page(article), encoding="utf-8")

print(f"Generated {len(articles)} article pages.")
print("Article length range:", min(count for _, count in word_counts), "to", max(count for _, count in word_counts), "words.")
