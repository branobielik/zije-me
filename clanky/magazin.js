(function () {
  "use strict";

  var coreArticles = Array.isArray(window.ZIJE_ARTICLES) ? window.ZIJE_ARTICLES : [];
  var intimacyArticles = Array.isArray(window.ZIJE_INTIMITA_ARTICLES) ? window.ZIJE_INTIMITA_ARTICLES : [];
  var moreIntimacyArticles = Array.isArray(window.ZIJE_INTIMITA_MORE_ARTICLES) ? window.ZIJE_INTIMITA_MORE_ARTICLES : [];
  var articleSources = window.ZIJE_ARTICLE_SOURCES || {};
  var articleTaxonomy = window.ZIJE_ARTICLE_TAXONOMY || {};
  var articles = moreIntimacyArticles.concat(intimacyArticles, coreArticles).sort(function (a, b) {
    return b.isoDate.localeCompare(a.isoDate);
  });

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

  var audienceLabels = {
    solo: "pre seba",
    couple: "pre dvojicu",
    both: "pre seba aj dvojicu"
  };

  function taxonomyFor(article) {
    return articleTaxonomy[article.slug] || { domains: [], audience: "both", topics: [], contentType: "" };
  }

  function createTaxonomyMeta(article, detailed) {
    var taxonomy = taxonomyFor(article);
    var wrap = element("div", detailed ? "taxonomy-meta taxonomy-meta-detail" : "taxonomy-meta");
    wrap.appendChild(element("span", "audience-label", audienceLabels[taxonomy.audience] || taxonomy.audience));
    taxonomy.topics.slice(0, detailed ? 5 : 2).forEach(function (topic) {
      wrap.appendChild(element("span", "topic-label", topic[1]));
    });
    if (detailed && taxonomy.contentType) {
      wrap.appendChild(element("span", "content-type", taxonomy.contentType));
    }
    return wrap;
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
    body.appendChild(createTaxonomyMeta(article, false));
    body.appendChild(element("span", "read-link", "Čítať článok →"));

    link.appendChild(imageWrap);
    link.appendChild(body);
    return link;
  }

  function renderListing() {
    var grid = document.getElementById("articleGrid");
    if (!grid) return;

    var categoryValues = ["Intimita", "Telo", "Myseľ", "Duša"];
    var audienceValues = ["solo", "couple", "both"];
    var categoryButtons = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
    var audienceButtons = Array.prototype.slice.call(document.querySelectorAll("[data-audience]"));
    var params = new URLSearchParams(window.location.search);
    var activeCategory = categoryValues.indexOf(params.get("category")) !== -1 ? params.get("category") : "Všetko";
    var activeAudience = audienceValues.indexOf(params.get("audience")) !== -1 ? params.get("audience") : "all";

    function updatePressedStates() {
      categoryButtons.forEach(function (button) {
        var isActive = button.getAttribute("data-category") === activeCategory;
        button.classList.toggle("is-active", isActive);
        if (button.tagName === "A") {
          if (isActive) button.setAttribute("aria-current", "page");
          else button.removeAttribute("aria-current");
        } else {
          button.setAttribute("aria-pressed", String(isActive));
        }
      });
      audienceButtons.forEach(function (button) {
        var isActive = button.getAttribute("data-audience") === activeAudience;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    function updateUrl(push) {
      var next = new URL(window.location.href);
      if (activeCategory === "Všetko") next.searchParams.delete("category");
      else next.searchParams.set("category", activeCategory);
      if (activeAudience === "all") next.searchParams.delete("audience");
      else next.searchParams.set("audience", activeAudience);
      window.history[push ? "pushState" : "replaceState"]({}, "", next.pathname + next.search + next.hash);
    }

    function paint() {
      grid.textContent = "";
      var visible = articles.filter(function (article) {
        var categoryMatches = activeCategory === "Všetko" || article.category === activeCategory;
        var audienceMatches = activeAudience === "all" || taxonomyFor(article).audience === activeAudience;
        return categoryMatches && audienceMatches;
      });

      if (!visible.length) {
        grid.appendChild(element("p", "empty-state", "Pre túto kombináciu filtrov zatiaľ nie sú žiadne články."));
        return;
      }
      visible.forEach(function (article, index) {
        grid.appendChild(createCard(article, index < 3));
      });
    }

    categoryButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        if (button.tagName === "A") event.preventDefault();
        activeCategory = button.getAttribute("data-category") || "Všetko";
        updatePressedStates();
        updateUrl(true);
        paint();
      });
    });

    audienceButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeAudience = button.getAttribute("data-audience") || "all";
        updatePressedStates();
        updateUrl(true);
        paint();
      });
    });

    window.addEventListener("popstate", function () {
      var current = new URLSearchParams(window.location.search);
      activeCategory = categoryValues.indexOf(current.get("category")) !== -1 ? current.get("category") : "Všetko";
      activeAudience = audienceValues.indexOf(current.get("audience")) !== -1 ? current.get("audience") : "all";
      updatePressedStates();
      paint();
    });

    updatePressedStates();
    updateUrl(false);
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

    var seoTitle = article.seoTitle || article.title;
    var seoDescription = article.seoDescription || article.excerpt;
    document.title = seoTitle + " | zije.me";
    setMeta("description", seoDescription);
    setMeta("og:title", seoTitle, "property");
    setMeta("og:description", seoDescription, "property");
    setMeta("og:image", "https://zije.me" + article.image, "property");
    setMeta("og:type", "article", "property");
    setMeta("article:published_time", article.isoDate, "property");

    var header = element("header", "article-header");
    header.appendChild(element("span", "category-badge", article.category));
    header.appendChild(element("h1", "", article.title));
    header.appendChild(createMeta(article));
    header.appendChild(createTaxonomyMeta(article, true));

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
      var taxonomy = taxonomyFor(article);
      articles
        .filter(function (candidate) { return candidate.slug !== article.slug; })
        .map(function (candidate) {
          var candidateTaxonomy = taxonomyFor(candidate);
          var sharedTopics = candidateTaxonomy.topics.filter(function (topic) {
            return taxonomy.topics.some(function (ownTopic) { return ownTopic[0] === topic[0]; });
          }).length;
          var sharedDomains = candidateTaxonomy.domains.filter(function (domain) {
            return taxonomy.domains.indexOf(domain) !== -1;
          }).length;
          return {
            article: candidate,
            score: sharedTopics * 4 + sharedDomains * 2 + (candidate.category === article.category ? 1 : 0)
          };
        })
        .sort(function (a, b) {
          return b.score - a.score || b.article.isoDate.localeCompare(a.article.isoDate);
        })
        .slice(0, 3)
        .forEach(function (candidate) { relatedGrid.appendChild(createCard(candidate.article, false)); });
    }
  }

  renderListing();
  renderArticle();
})();
