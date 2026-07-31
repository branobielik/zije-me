(function () {
  "use strict";

  var coreArticles = Array.isArray(window.ZIJE_ARTICLES) ? window.ZIJE_ARTICLES : [];
  var intimacyArticles = Array.isArray(window.ZIJE_INTIMITA_ARTICLES) ? window.ZIJE_INTIMITA_ARTICLES : [];
  var moreIntimacyArticles = Array.isArray(window.ZIJE_INTIMITA_MORE_ARTICLES) ? window.ZIJE_INTIMITA_MORE_ARTICLES : [];
  var articleSources = window.ZIJE_ARTICLE_SOURCES || {};
  var articles = moreIntimacyArticles.concat(intimacyArticles, coreArticles).sort(function (a, b) {
    return b.isoDate.localeCompare(a.isoDate);
  });

  function articleUrl(article) {
    return "/clanky/" + article.slug + "/";
  }

  function categoryUrl(category) {
    return "/clanky/?category=" + encodeURIComponent(category);
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

  function createCategoryLink(category) {
    var link = element("a", "category-badge", category);
    link.href = categoryUrl(category);
    link.setAttribute("aria-label", "Zobraziť všetky články v kategórii " + category);
    return link;
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

    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
    var categories = buttons.map(function (button) {
      return button.getAttribute("data-category");
    });
    var requestedCategory = new URLSearchParams(window.location.search).get("category");
    var activeCategory = categories.indexOf(requestedCategory) >= 0 ? requestedCategory : "Všetko";

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

    function setActiveCategory(category, updateUrl) {
      activeCategory = categories.indexOf(category) >= 0 ? category : "Všetko";
      buttons.forEach(function (button) {
        var isActive = button.getAttribute("data-category") === activeCategory;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      if (updateUrl) {
        var url = new URL(window.location.href);
        if (activeCategory === "Všetko") {
          url.searchParams.delete("category");
        } else {
          url.searchParams.set("category", activeCategory);
        }
        window.history.pushState({ category: activeCategory }, "", url);
      }

      paint();
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        setActiveCategory(button.getAttribute("data-category") || "Všetko", true);
      });
    });

    window.addEventListener("popstate", function () {
      var category = new URLSearchParams(window.location.search).get("category");
      setActiveCategory(category || "Všetko", false);
    });

    setActiveCategory(activeCategory, false);
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
    header.appendChild(createCategoryLink(article.category));
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

    var sources = Array.isArray(articleSources[article.slug]) ? articleSources[article.slug] : [];
    if (sources.length) {
      var sourceSection = element("section", "article-sources");
      sourceSection.setAttribute("aria-labelledby", "articleSourcesTitle");

      var sourceTitle = element("h2", "", "Zdroje a ďalšie čítanie");
      sourceTitle.id = "articleSourcesTitle";
      sourceSection.appendChild(sourceTitle);
      sourceSection.appendChild(element(
        "p",
        "sources-note",
        "Zdroje podporujú hlavné odborné tvrdenia článku. Text má vzdelávací charakter a nenahrádza individuálnu zdravotnú, psychologickú ani právnu konzultáciu."
      ));

      var sourceList = element("ol", "sources-list");
      sources.forEach(function (source) {
        var item = document.createElement("li");
        var link = element("a", "", source.title);
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        item.appendChild(link);
        item.appendChild(element("span", "", source.publisher));
        sourceList.appendChild(item);
      });
      sourceSection.appendChild(sourceList);
      content.appendChild(sourceSection);
    }

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
