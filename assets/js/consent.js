/* PivotGC cookie consent — Google Consent Mode v2.
 * The only optional cookies on this site are Google Ads conversion cookies
 * set by gtag.js (AW-18322813077). Consent defaults are set to "denied" in
 * each page's inline gtag snippet; this script shows the banner, records the
 * visitor's choice (localStorage key "pgc-consent"), and upgrades consent
 * via gtag('consent','update') when accepted.
 */
(function () {
  var KEY = 'pgc-consent';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* storage blocked */ }
  }
  function grant() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
  }
  function close() {
    var el = document.getElementById('pgc-consent-banner');
    if (el) el.remove();
  }
  function choose(v) {
    store(v);
    if (v === 'granted') grant();
    close();
  }

  function show() {
    if (document.getElementById('pgc-consent-banner')) return;
    var el = document.createElement('div');
    el.id = 'pgc-consent-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-label', 'Cookie consent');
    el.innerHTML =
      '<style>' +
      '#pgc-consent-banner{position:fixed;left:0;right:0;bottom:0;z-index:60;' +
      'background:var(--pgc-forest,#0E3B25);color:var(--pgc-bone,#E9E5D8);' +
      'border-top:3px solid var(--pgc-signal,#D2502A);' +
      'font-family:var(--pgc-font-sans,sans-serif);font-size:15px;line-height:1.5}' +
      '#pgc-consent-banner .pgc-cb-inner{max-width:1240px;margin:0 auto;padding:20px 48px;' +
      'display:flex;gap:24px;align-items:center;justify-content:space-between;flex-wrap:wrap}' +
      '#pgc-consent-banner p{margin:0;max-width:72ch}' +
      '#pgc-consent-banner a{color:inherit;text-decoration:underline}' +
      '#pgc-consent-banner a:hover{color:var(--pgc-signal-soft,#E47A4A)}' +
      '#pgc-consent-banner .pgc-cb-actions{display:flex;gap:10px;flex-wrap:wrap}' +
      '#pgc-consent-banner button{cursor:pointer;padding:12px 16px;border-radius:0;' +
      'font-family:var(--pgc-font-mono,monospace);font-size:11px;letter-spacing:.16em;text-transform:uppercase}' +
      '#pgc-consent-banner .pgc-cb-accept{background:var(--pgc-signal,#D2502A);color:var(--pgc-bone,#E9E5D8);border:1px solid var(--pgc-signal,#D2502A)}' +
      '#pgc-consent-banner .pgc-cb-accept:hover{background:var(--pgc-signal-soft,#E47A4A)}' +
      '#pgc-consent-banner .pgc-cb-decline{background:transparent;color:var(--pgc-bone,#E9E5D8);border:1px solid rgba(233,229,216,.5)}' +
      '#pgc-consent-banner .pgc-cb-decline:hover{border-color:var(--pgc-bone,#E9E5D8)}' +
      '@media (max-width:720px){#pgc-consent-banner .pgc-cb-inner{padding:16px 24px}}' +
      '</style>' +
      '<div class="pgc-cb-inner">' +
      '<p><strong>Cookies, briefly.</strong> This site sets one optional category of cookies: ' +
      'Google Ads conversion measurement, which tells us when our advertising led you here. ' +
      'Nothing else. Details in the <a href="/cookies/">cookie notice</a>.</p>' +
      '<div class="pgc-cb-actions">' +
      '<button type="button" class="pgc-cb-accept">Accept</button>' +
      '<button type="button" class="pgc-cb-decline">Decline</button>' +
      '</div></div>';
    document.body.appendChild(el);
    el.querySelector('.pgc-cb-accept').addEventListener('click', function () { choose('granted'); });
    el.querySelector('.pgc-cb-decline').addEventListener('click', function () { choose('denied'); });
  }

  /* Re-open the banner from anywhere (e.g. "Manage cookie preferences" on /cookies/). */
  window.pgcOpenConsent = show;

  var v = stored();
  if (v === 'granted') grant();
  if (v !== 'granted' && v !== 'denied') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', show);
    } else {
      show();
    }
  }
})();
