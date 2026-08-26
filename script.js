(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".main-nav");

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

  var rituals = {
    "cas-pre-seba": {
      title: "Čas pre seba",
      meaning: "Vedomé zastavenie, pri ktorom si všímame svoju energiu, emócie a telesné signály bez potreby niečo meniť.",
      purpose: "Podporuje kontakt so sebou a pomáha rozlíšiť, čo dnes potrebujeme a na čo nemáme kapacitu.",
      forWhom: "Pre jednotlivca; vo dvojici môže každý najprv stráviť chvíľu sám a potom dobrovoľne zdieľať iba to, čo chce.",
      safety: "Neexistuje správny pocit ani povinnosť pokračovať. Pri nepríjemných spomienkach rituál prerušte a zvoľte uzemňujúcu činnosť.",
      alternative: "Sólo: desať minút ticha alebo zápis. Dvojica: krátke oddelené zastavenie a následná otázka „Chceš niečo zdieľať?“"
    },
    "vedomy-dotyk": {
      title: "Vedomý dotyk",
      meaning: "Dotyk vnímaný ako komunikácia, nie ako cesta k sexuálnemu výsledku.",
      purpose: "Rozvíja schopnosť vnímať komfort, pomenovať spätnú väzbu a rešpektovať meniace sa hranice.",
      forWhom: "Pre jednotlivca aj dvojicu, ak je dotyk vítaný a bezpečný.",
      safety: "Súhlas musí byť priebežný a možno ho kedykoľvek odvolať. Bolesť, zamrznutie alebo neistota znamenajú zastavenie a kontrolnú otázku.",
      alternative: "Sólo: položte dlaň na bezpečnú neutrálnu časť tela. Dvojica: dohodnite si miesto, trvanie a jednoduché signály pre pokračovať, zmeniť alebo prestať."
    },
    rozhovor: {
      title: "Rozhovor bez riešenia",
      meaning: "Krátky rozhovor, v ktorom jeden hovorí a druhý počúva bez opravovania, hodnotenia či okamžitej rady.",
      purpose: "Vytvára skúsenosť vypočutia a pomáha odlíšiť blízkosť od povinnosti vyriešiť problém.",
      forWhom: "Najmä pre dvojice; sólo alternatívou je hlasová poznámka alebo list, ktorý netreba odoslať.",
      safety: "Vopred si určte čas a témy, ktoré sú dnes mimo hraníc. Počúvanie nie je súhlas a nikto nemusí zdieľať viac, než chce.",
      alternative: "Sólo: päť minút hovorte alebo píšte bez autocenzúry. Dvojica: po vypočutí sa opýtajte „Chceš empatiu, otázku alebo nápad?“"
    },
    spomalenie: {
      title: "Zmyslové spomalenie",
      meaning: "Pozornosť upriamená na jeden alebo viac bezpečných zmyslových podnetov v prítomnom okamihu.",
      purpose: "Pomáha spomaliť a všimnúť si, čo je príjemné, neutrálne alebo priveľa.",
      forWhom: "Pre jednotlivca aj dvojicu; podobu možno prispôsobiť citlivosti, zdravotnému stavu a prostrediu.",
      safety: "Vynechajte vône, zvuky či dotyky, ktoré dráždia alebo spúšťajú nepohodu. Cieľom nie je vydržať intenzitu.",
      alternative: "Sólo: vyberte si teplotu nápoja, hudbu alebo textúru. Dvojica: každý vyberie jeden neutrálny podnet a priebežne hodnotí komfort."
    },
    mapa: {
      title: "Mapa prianí a hraníc",
      meaning: "Dočasný obraz toho, čomu dnes hovoríme áno, nie alebo možno — bez záväzku do budúcnosti.",
      purpose: "Uľahčuje jasnú komunikáciu a pripomína, že túžby aj hranice sa môžu meniť.",
      forWhom: "Pre každého, kto chce lepšie pomenovať svoje preferencie; zdieľanie s druhým je vždy voliteľné.",
      safety: "„Možno“ nie je súhlas a mlčanie nie je áno. Rozdielne odpovede sa nevyjednávajú pod tlakom; platí prienik dobrovoľných áno.",
      alternative: "Sólo: napíšte tri stĺpce pre dnešok. Dvojica: mapy vyplňte oddelene a zdieľajte len to, čo chcete, bez požiadavky na realizáciu."
    }
  };

  var modal = document.querySelector(".ritual-modal");
  var title = document.querySelector("#ritual-dialog-title");
  var body = document.querySelector("#ritual-dialog-body");
  var lastTrigger = null;

  function closeDialog() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("dialog-open");
    document.removeEventListener("keydown", onDialogKeydown);
    if (lastTrigger) lastTrigger.focus();
  }

  function onDialogKeydown(event) {
    if (event.key === "Escape") {
      closeDialog();
      return;
    }

    if (event.key !== "Tab" || !modal) return;
    var focusable = Array.prototype.slice.call(
      modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(function (element) {
      return !element.disabled;
    });
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openDialog(key, trigger) {
    var ritual = rituals[key];
    if (!modal || !title || !body || !ritual) return;
    lastTrigger = trigger;
    title.textContent = ritual.title;
    body.innerHTML =
      "<h3>Význam</h3><p>" + ritual.meaning + "</p>" +
      "<h3>Zmysel</h3><p>" + ritual.purpose + "</p>" +
      "<h3>Pre koho</h3><p>" + ritual.forWhom + "</p>" +
      "<h3>Bezpečný rámec</h3><p>" + ritual.safety + "</p>" +
      "<h3>Sólo / vo dvojici</h3><p>" + ritual.alternative + "</p>";
    modal.hidden = false;
    document.body.classList.add("dialog-open");
    document.addEventListener("keydown", onDialogKeydown);
    modal.querySelector(".ritual-dialog-close").focus();
  }

  document.querySelectorAll("[data-ritual]").forEach(function (button) {
    button.addEventListener("click", function () {
      openDialog(button.getAttribute("data-ritual"), button);
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach(function (button) {
    button.addEventListener("click", closeDialog);
  });
})();
