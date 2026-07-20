(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".main-nav");
  var announcement = document.querySelector(".announcement");
  var announcementClose = document.querySelector("[data-close-announcement]");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      });
    });
  }

  if (announcement && announcementClose) {
    announcementClose.addEventListener("click", function () {
      announcement.remove();
    });
  }

  document.querySelectorAll(".heart").forEach(function (button) {
    button.addEventListener("click", function () {
      var liked = button.classList.toggle("is-liked");
      button.textContent = liked ? "♥" : "♡";
      button.setAttribute("aria-pressed", String(liked));
    });
  });

  var ritualSteps = document.querySelectorAll(".ritual-step");
  var ritualProgress = document.querySelector(".timeline-line span");
  ritualSteps.forEach(function (step, index) {
    var button = step.querySelector("button");
    if (!button) return;
    button.addEventListener("click", function () {
      ritualSteps.forEach(function (item) {
        item.classList.remove("is-active");
      });
      step.classList.add("is-active");
      if (ritualProgress) {
        ritualProgress.style.width = String(((index + 1) / ritualSteps.length) * 100) + "%";
      }
    });
  });

  var newsletter = document.querySelector(".newsletter form");
  if (newsletter) {
    newsletter.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = newsletter.querySelector("input");
      if (!input || !input.value.trim()) return;
      input.value = "";
      input.placeholder = "Ďakujeme — čoskoro sa ozveme.";
    });
  }
})();
