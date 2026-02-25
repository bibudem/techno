/**
 * Outil d’accessibilité (ex Readability Widget)
 * Version localisée FR pour Docusaurus
 * studio·bib — Bibliothèques UdeM
 */

var outil_accessibilite = {

  // ===============================
  // Initialisation
  // ===============================
  init: function () {

    // Charge le HTML local du widget (IMPORTANT : chemin local Docusaurus)
    fetch('/accessibilite/widget.html')
      .then(response => response.text())
      .then(html => {

        document.body.insertAdjacentHTML("beforeend", html);

        outil_accessibilite.toggle_widget();
        outil_accessibilite.add_listeners_to_toggles();
        outil_accessibilite.close_on_click_outside_of_widget();
        outil_accessibilite.close_on_escape();
        outil_accessibilite.set_hidden_event_listener();
        outil_accessibilite.check_localstorage_toggles();
        outil_accessibilite.show_widget_to_users();
        outil_accessibilite.watch_klaro_visibility();

      })
      .catch(err => {
        console.warn("Impossible de charger le widget d’accessibilité", err);
      });
  },


  // ===============================
  // Affichage
  // ===============================
  has_klaro_consent_cookie: function () {
    return document.cookie
      .split(';')
      .map(function (part) { return part.trim(); })
      .some(function (part) { return part.indexOf('bib-consent=') === 0; });
  },

  is_element_visible: function (el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      el.getClientRects().length > 0
    );
  },

  is_klaro_visible: function () {
    const candidates = document.querySelectorAll('.klaro .cookie-notice, .klaro .cookie-modal');
    if (!candidates.length) return false;

    return Array.prototype.some.call(candidates, function (el) {
      return outil_accessibilite.is_element_visible(el);
    });
  },

  should_wait_for_klaro: function () {
    if (outil_accessibilite.has_klaro_consent_cookie()) return false;

    const hasKlaroRoot = Boolean(
      document.getElementById('klaro') || document.querySelector('.klaro'),
    );

    if (outil_accessibilite.is_klaro_visible()) return true;
    return !hasKlaroRoot;
  },

  sync_widget_visibility_with_klaro: function () {
    const widget = document.getElementById('readability-widget');
    if (!widget) return;

    widget.classList.toggle('klaro-blocked', outil_accessibilite.is_klaro_visible());
  },

  watch_klaro_visibility: function () {
    const refresh = function () {
      outil_accessibilite.sync_widget_visibility_with_klaro();
    };

    refresh();

    let klaroObserver = null;
    const attachKlaroObserver = function () {
      const klaroRoot = document.getElementById('klaro') || document.querySelector('.klaro');
      if (!klaroRoot) return false;

      if (klaroObserver) klaroObserver.disconnect();
      klaroObserver = new MutationObserver(refresh);
      klaroObserver.observe(klaroRoot, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'style', 'hidden', 'aria-hidden'],
      });
      return true;
    };

    if (!attachKlaroObserver()) {
      const bodyObserver = new MutationObserver(function () {
        if (attachKlaroObserver()) {
          bodyObserver.disconnect();
          refresh();
        }
      });

      bodyObserver.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { bodyObserver.disconnect(); }, 10000);
    }

    window.addEventListener('klaro:ready', refresh);
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
  },

  show_widget_to_users: function () {
    const startedAt = Date.now();
    const maxWaitForKlaroMs = 10000;

    const padding_check = setInterval(function () {
      const content = document.getElementById("widget-content");
      const widget = document.getElementById('readability-widget');
      if (!content || !widget) return;

      const padding = window.getComputedStyle(content).getPropertyValue('padding-left');

      if (padding === '0px') return;

      if (
        outil_accessibilite.should_wait_for_klaro() &&
        Date.now() - startedAt < maxWaitForKlaroMs
      ) {
        outil_accessibilite.sync_widget_visibility_with_klaro();
        return;
      }

      clearInterval(padding_check);
      outil_accessibilite.close_widget();
      widget.style.opacity = 1;
      outil_accessibilite.sync_widget_visibility_with_klaro();
    }, 100);
  },


  // ===============================
  // Ouverture / fermeture
  // ===============================
  toggle_widget: function () {
    document.querySelector("#widget-toggle-button")
      .addEventListener("click", function () {

        const el = document.getElementById('readability-widget');

        if (el.classList.contains('closed')) {
          outil_accessibilite.reveal_widget();
        } else {
          outil_accessibilite.close_widget();
        }
      });
  },

  reveal_widget: function () {
    const el = document.getElementById('readability-widget');

    el.classList.remove('closed', 'widget-hidden');
    el.classList.add('open');
    el.style.bottom = "0px";

    outil_accessibilite.set_widget_hidden_local_storage('false');
    outil_accessibilite.enable_internal_tabbing();
  },

  close_widget: function () {
    const el = document.getElementById('readability-widget');
    const content = document.getElementById("widget-content");

    el.classList.remove('open');
    el.classList.add('closed');

    el.style.bottom = -(content.offsetHeight) + "px";

    outil_accessibilite.disable_internal_tabbing();
  },


  // ===============================
  // Accessibilité clavier
  // ===============================
  disable_internal_tabbing: function () {
    document
      .querySelectorAll('#widget-content a, #widget-content input, #widget-content button')
      .forEach(el => el.tabIndex = -1);
  },

  enable_internal_tabbing: function () {
    document
      .querySelectorAll('#widget-content a, #widget-content input, #widget-content button')
      .forEach(el => el.tabIndex = 0);
  },


  // ===============================
  // Fermetures automatiques
  // ===============================
  close_on_click_outside_of_widget: function () {
    const el = document.getElementById('readability-widget');

    document.addEventListener('click', event => {
      if (!el.contains(event.target) && !el.classList.contains('closed')) {
        outil_accessibilite.close_widget();
      }
    });
  },

  close_on_escape: function () {
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        outil_accessibilite.close_widget();
      }
    });
  },


  // ===============================
  // Masquer complètement
  // ===============================
  set_hidden_event_listener: function () {
    document.getElementById("hide-widget-button")
      .addEventListener('click', () => {
        outil_accessibilite.hide_widget();
      });
  },

  hide_widget: function () {
    const el = document.getElementById('readability-widget');

    outil_accessibilite.close_widget();
    el.classList.add("widget-hidden");

    outil_accessibilite.set_widget_hidden_local_storage('true');
  },


  // ===============================
  // LocalStorage
  // ===============================
  set_widget_hidden_local_storage: function (value) {
    localStorage.widget_hidden = value;
  },

  check_localstorage_toggles: function () {

    if (localStorage.widget_hidden === 'true') {
      outil_accessibilite.hide_widget();
    }

    if (localStorage.warm_background === 'true') {
      outil_accessibilite.enable_warm_background(true);
      document.getElementById("warm-background-toggle").checked = true;
    }

    if (localStorage.hide_all_images === 'true') {
      outil_accessibilite.hide_show_all_images('true');
      document.getElementById("hide-images-toggle").checked = true;
    }

    if (localStorage.open_dyslexic_font === 'true') {
      document.body.classList.add("open-dyslexic");
      document.getElementById("open-dyslexic-font-toggle").checked = true;
    }

    if (localStorage.highlight_links === 'true') {
      outil_accessibilite.hide_show_highlighted_links('true');
      document.getElementById("highlight-links-toggle").checked = true;
    }
  },


  // ===============================
  // Toggles
  // ===============================
  add_listeners_to_toggles: function () {

    document.getElementById("warm-background-toggle")
      .addEventListener('click', e => {
        outil_accessibilite.enable_warm_background(e.target.checked);
      });

    document.getElementById("hide-images-toggle")
      .addEventListener('click', e => {
        outil_accessibilite.hide_show_all_images(e.target.checked ? 'true' : 'false');
      });

    document.getElementById("open-dyslexic-font-toggle")
      .addEventListener('click', e => {
        document.body.classList.toggle("open-dyslexic", e.target.checked);
        localStorage.open_dyslexic_font = e.target.checked ? 'true' : 'false';
      });

    document.getElementById("highlight-links-toggle")
      .addEventListener('click', e => {
        outil_accessibilite.hide_show_highlighted_links(e.target.checked ? 'true' : 'false');
      });
  },


  // ===============================
  // Fonctions visuelles
  // ===============================
  enable_warm_background: function (enabled) {
    if (enabled) {
      const overlay = document.createElement('div');
      overlay.id = "readability-warm-overlay";
      document.body.appendChild(overlay);
      localStorage.warm_background = 'true';
    } else {
      const overlay = document.getElementById("readability-warm-overlay");
      if (overlay) overlay.remove();
      localStorage.warm_background = 'false';
    }
  },

  hide_show_all_images: function (value) {
    document.body.classList.toggle('readability-hide-images', value === 'true');
    localStorage.hide_all_images = value;
  },

  hide_show_highlighted_links: function (value) {
    document.body.classList.toggle('readability-highlight-links-on', value === 'true');
    localStorage.highlight_links = value;
  }
};


// ===============================
// Démarrage automatique
// ===============================
window.addEventListener('DOMContentLoaded', function () {
  outil_accessibilite.init();
});
