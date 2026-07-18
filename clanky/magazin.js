(function () {
  "use strict";

  var articles = Array.isArray(window.ZIJE_ARTICLES) ? window.ZIJE_ARTICLES : [];

  function articleUrl(article) {
    return "/clanky/" + article.slug + "/";
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof text === "string") node.textContent = text;
    return node;
  }

  function createMeta(article) {
    var meta = element("div", "article-meta");
    meta.appendChild(element("span", "", article.readTime));
    meta.appendChild(element("span", "", article.date));
    return meta;
  }

  function createCard(article, eager) {
    var link = element("a", "article-card");
    link.href = articleUrl(article);
    link.setAttribute("aria-label", article.title);

    var imageWrap = element("div", "article-card-image");
    var image = document.createElement("img");
    image.src = article.image;
    image.alt = article.imageAlt;
    image.loading = eager ? "eager" : "lazy";
    if (eager) image.fetchPriority = "high";
    image.width = 960;
    image.height = 600;
    imageWrap.appendChild(image);
    imageWrap.appendChild(element("span", "category-badge", article.category));

    var body = element("div", "article-card-body");
    body.appendChild(createMeta(article));
    body.appendChild(element("h2", "", article.title));
    body.appendChild(element("p", "excerpt", article.excerpt));
    body.appendChild(element("span", "read-link", "Čítať článok →"));

    link.appendChild(imageWrap);
    link.appendChild(body);
    return link;
  }

  function renderListing() {
    var grid = document.getElementById("articleGrid");
    if (!grid) return;

    var activeCategory = "Všetko";
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));

    function paint() {
      grid.textContent = "";
      var visible = activeCategory === "Všetko"
        ? articles
        : articles.filter(function (article) { return article.category === activeCategory; });

      if (!visible.length) {
        grid.appendChild(element("p", "empty-state", "V tejto kategórii zatiaľ nie sú žiadne články."));
        return;
      }
      visible.forEach(function (article, index) {
        grid.appendChild(createCard(article, index < 3));
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = button.getAttribute("data-category") || "Všetko";
        buttons.forEach(function (candidate) {
          var isActive = candidate === button;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", String(isActive));
        });
        paint();
      });
    });

    paint();
  }

  function setMeta(name, value, attribute) {
    var selector = "meta[" + (attribute || "name") + "=\"" + name + "\"]";
    var meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute || "name", name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
  }

  function renderArticle() {
    var root = document.getElementById("articleRoot");
    if (!root) return;

    var slug = document.body.getAttribute("data-article-slug");
    var article = articles.find(function (candidate) { return candidate.slug === slug; });
    if (!article) {
      document.title = "Článok sa nenašiel | zije.me";
      root.appendChild(element("h1", "", "Článok sa nenašiel"));
      root.appendChild(element("p", "", "Vráťte sa do magazínu a vyberte si z dostupných článkov."));
      return;
    }

    document.title = article.title + " | zije.me";
    setMeta("description", article.excerpt);
    setMeta("og:title", article.title, "property");
    setMeta("og:description", article.excerpt, "property");
    setMeta("og:image", "https://zije.me" + article.image, "property");
    setMeta("og:type", "article", "property");
    setMeta("article:published_time", article.isoDate, "property");

    var header = element("header", "article-header");
    header.appendChild(element("span", "category-badge", article.category));
    header.appendChild(element("h1", "", article.title));
    header.appendChild(createMeta(article));

    var hero = element("div", "article-hero-image");
    var heroImage = document.createElement("img");
    heroImage.src = article.image;
    heroImage.alt = article.imageAlt;
    heroImage.width = 1600;
    heroImage.height = 900;
    hero.appendChild(heroImage);

    var content = element("article", "article-content");
    content.appendChild(element("p", "intro", article.intro));
    article.sections.forEach(function (section) {
      content.appendChild(element("h2", "", section.heading));
      section.paragraphs.forEach(function (paragraph) {
        content.appendChild(element("p", "", paragraph));
      });
    });

    var takeaway = element("aside", "takeaway");
    takeaway.appendChild(element("strong", "", "Skúste dnes"));
    takeaway.appendChild(element("p", "", article.takeaway));
    content.appendChild(takeaway);

    root.appendChild(header);
    root.appendChild(hero);
    root.appendChild(content);

    var relatedGrid = document.getElementById("relatedGrid");
    if (relatedGrid) {
      articles
        .filter(function (candidate) {
          return candidate.category === article.category && candidate.slug !== article.slug;
        })
        .slice(0, 3)
        .forEach(function (candidate) { relatedGrid.appendChild(createCard(candidate, false)); });
    }
  }

  renderListing();
  renderArticle();
})();
