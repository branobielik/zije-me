from __future__ import annotations

import html
import hashlib
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
    title = html.escape(article["title"], quote=True)
    excerpt = html.escape(article["excerpt"], quote=True)
    slug = html.escape(article["slug"], quote=True)
    image = html.escape(article["image"], quote=True)
    canonical = f"https://zije.me/clanky/{slug}/"

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
    <link rel="canonical" href="{canonical}">
    <link rel="icon" href="/favicon.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/clanky/magazin.css">
  </head>
  <body data-article-slug="{slug}">
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="zije.me – domov">
          <img class="brand-mark" src="/assets/zije-logo-web.webp" alt="" aria-hidden="true">
          <span>zije.me</span>
        </a>
        <nav class="header-nav" aria-label="Hlavná navigácia">
          <a href="/#objavit">Objaviť zije.me</a>
          <a class="nav-app" href="/#chronos">Stiahnuť Vitae Amoris</a>
          <a class="nav-shop" href="https://shop.zije.me">Do obchodu <span aria-hidden="true">→</span></a>
        </nav>
      </div>
    </header>

    <main>
      <div class="article-shell">
        <a class="article-back" href="/clanky/">← Všetky články</a>
        <div id="articleRoot"></div>
      </div>
      <section class="related" aria-label="Ďalšie články z rovnakej témy">
        <p class="eyebrow">Pokračujte v čítaní</p>
        <h2>Ďalšie z témy {html.escape(article["category"])}</h2>
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
          <a href="/#chronos">Vitae Amoris</a>
          <a href="/#o-nas">O nás</a>
          <a href="/#produkty">Produkty</a>
        </nav>
      </div>
    </footer>

    <script src="/clanky/sources-data.js"></script>
    <script src="/clanky/intimita-more-data.js"></script>
    <script src="/clanky/intimita-data.js"></script>
    <script src="/clanky/articles-data.js"></script>
    <script src="/clanky/magazin.js"></script>
  </body>
</html>
"""


articles = [match.groupdict() for match in ARTICLE_PATTERN.finditer(DATA)]
if len(articles) != 34:
    raise SystemExit(f"Expected 34 articles, found {len(articles)}")

blocks = re.findall(r"(?ms)^  \{\n    slug: .*?^  \}(?:,|$)", DATA)
if len(blocks) != 34:
    raise SystemExit(f"Expected 34 complete article blocks, found {len(blocks)}")

category_counts = {
    category: sum(article["category"] == category for article in articles)
    for category in ("Telo", "Duša", "Myseľ", "Intimita")
}
if category_counts != {"Telo": 5, "Duša": 5, "Myseľ": 5, "Intimita": 19}:
    raise SystemExit(f"Unexpected category counts: {category_counts}")

source_slugs = set(re.findall(r'(?m)^  "([^"]+)": \[$', SOURCE_DATA))
intimacy_slugs = {article["slug"] for article in articles if article["category"] == "Intimita"}
if source_slugs != intimacy_slugs:
    missing = sorted(intimacy_slugs - source_slugs)
    unexpected = sorted(source_slugs - intimacy_slugs)
    raise SystemExit(f"Source coverage mismatch. Missing: {missing}; unexpected: {unexpected}")
source_urls = re.findall(r'url: "(https://[^"]+)"', SOURCE_DATA)
if len(source_urls) < len(intimacy_slugs):
    raise SystemExit("Every Intimita article must have at least one HTTPS source.")

dates = [article["iso_date"] for article in articles]
if len(set(dates)) != 34:
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
