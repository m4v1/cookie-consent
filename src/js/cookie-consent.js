/*
 * Javascript to show and hide cookie banner using localstroage
 */

// Init the cookie modal with bootstrap
var cookieModal = new bootstrap.Modal(document.getElementById("cookie-modal"));

/**
 * Shows the Cookie banner
 */
function showCookieBanner() {
  let cookieBanner = document.getElementsByClassName("cookie-consent")[0];
  cookieBanner.style.display = "flex";
}

/**
 * Hides the Cookie banner and saves the value to localstorage
 */
function hideCookieBanner() {
  localStorage.setItem("cc_isCookieAccepted", "true");

  let cookieBanner = document.getElementsByClassName("cookie-consent")[0];
  cookieBanner.style.display = "none";
  cookieModal.hide();
}

/**
 * Checks the localstorage and shows Cookie banner based on it.
 */
function initializeCookieBanner() {
  let isCookieAccepted = localStorage.getItem("cc_isCookieAccepted");
  if (isCookieAccepted === null) {
    localStorage.clear();
    localStorage.setItem("cc_isCookieAccepted", "false");
    showCookieBanner();
  }
  if (isCookieAccepted === "false") {
    showCookieBanner();
  }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.nk_hideCookieBanner = hideCookieBanner;

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.addEventListener("click", (e) => {
    let isCookieAccepted = localStorage.getItem("cc_isCookieAccepted");
    if (isCookieAccepted === null || isCookieAccepted === "false") {
      e.preventDefault();
      cookieModal.show();
    }
  });
});
