/* =============================================================
   Lakeside FC — Main script
   Features:
     1. Language switcher (EN / ES), remembered between visits
     2. Mobile menu
     3. Header shadow on scroll
     4. Active navigation link while scrolling
     5. "Register Now" buttons focus the contact form
     6. Contact form validation and sending
   ============================================================= */

/* -------------------------------------------------------------
   Form settings
   -------------------------------------------------------------
   GitHub Pages only hosts static files, so it cannot send email
   by itself. Two options:

   A) Leave FORM_ENDPOINT empty (default): pressing "Submit"
      opens the visitor's email app with the message already
      written, addressed to CONTACT_EMAIL.

   B) Create a free form at https://formspree.io, copy your form
      URL (it looks like https://formspree.io/f/abcdwxyz) and
      paste it into FORM_ENDPOINT. Messages will then arrive in
      your inbox without leaving the page.
   ------------------------------------------------------------- */
const FORM_ENDPOINT = "";
const CONTACT_EMAIL = "info@lakesidefc.ca";

const DEFAULT_LANG = "en";
const LANG_STORAGE_KEY = "lakesidefc-lang";

let currentLang = DEFAULT_LANG;

/* -------------------------------------------------------------
   Helpers
   ------------------------------------------------------------- */

// Returns the translated text for a key in the current language
function t(key) {
  const dictionary = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
  return dictionary[key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

// Safe localStorage access (it can fail in private browsing)
function readStoredLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore: the site still works, it just won't remember the choice
  }
}

/* -------------------------------------------------------------
   1. Language switcher
   ------------------------------------------------------------- */
function applyLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : DEFAULT_LANG;

  // Update the <html lang=""> attribute and the page title
  document.documentElement.lang = currentLang;
  document.title = t("meta.title");

  // Replace the text of every element marked with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  // Update the language buttons
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  // Refresh the menu button label in the new language
  updateMenuLabel();

  // Clear any old form message so it doesn't stay in the wrong language
  setFormStatus("", "");

  storeLang(currentLang);
}

function initLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(readStoredLang() || DEFAULT_LANG);
}

/* -------------------------------------------------------------
   2. Mobile menu
   ------------------------------------------------------------- */
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.getElementById("primary-nav");

function updateMenuLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", t(isOpen ? "nav.menuClose" : "nav.menu"));
}

function setMenuOpen(isOpen) {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  primaryNav.classList.toggle("is-open", isOpen);
  updateMenuLabel();
}

function initMobileMenu() {
  if (!menuToggle || !primaryNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  // Close the menu after choosing a link
  primaryNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

/* -------------------------------------------------------------
   3. Header shadow on scroll
   ------------------------------------------------------------- */
function initHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* -------------------------------------------------------------
   4. Active navigation link while scrolling
   ------------------------------------------------------------- */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const update = () => {
    // The contact area is the footer, so mark it active at the bottom of the page
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    if (atBottom) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    // Otherwise, pick the last section whose top has passed the header
    const offset = window.innerHeight * 0.35;
    let currentId = sections[0].id;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) currentId = section.id;
    });
    setActive(currentId);
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* -------------------------------------------------------------
   5. "Register Now" buttons focus the first form field
   ------------------------------------------------------------- */
function initRegisterButtons() {
  const firstField = document.getElementById("first-name");
  if (!firstField) return;

  document.querySelectorAll(".js-register").forEach((button) => {
    button.addEventListener("click", () => {
      // Wait for the smooth scroll before moving focus
      window.setTimeout(() => firstField.focus({ preventScroll: true }), 600);
    });
  });
}

/* -------------------------------------------------------------
   6. Contact form
   ------------------------------------------------------------- */
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function setFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.toggle("is-success", type === "success");
  formStatus.classList.toggle("is-error", type === "error");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Checks every field and highlights the empty or invalid ones
function validateForm() {
  let firstInvalid = null;
  let errorKey = "";

  form.querySelectorAll("input, textarea").forEach((field) => {
    const value = field.value.trim();
    let isValid = value.length > 0;

    if (isValid && field.type === "email" && !isValidEmail(value)) {
      isValid = false;
      errorKey = errorKey || "form.errorEmail";
    }
    if (!isValid && !value) {
      errorKey = "form.errorRequired";
    }

    field.closest(".form-field").classList.toggle("has-error", !isValid);
    field.setAttribute("aria-invalid", String(!isValid));
    if (!isValid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    setFormStatus(t(errorKey), "error");
    firstInvalid.focus();
    return false;
  }
  return true;
}

// Option A: open the visitor's email app with the message ready to send
function sendWithMailto(data) {
  const subject = t("form.emailSubject");
  const body =
    `${t("form.firstName")}: ${data.firstName}\n` +
    `${t("form.lastName")}: ${data.lastName}\n` +
    `${t("form.email")}: ${data.email}\n\n` +
    `${data.message}`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setFormStatus(t("form.mailtoOpened"), "success");
  form.reset();
}

// Option B: send the form to an online service such as Formspree
async function sendWithEndpoint(data, submitButton) {
  submitButton.disabled = true;
  submitButton.textContent = t("form.sending");

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    setFormStatus(t("form.success"), "success");
    form.reset();
  } catch (error) {
    console.error(error);
    setFormStatus(t("form.errorSend"), "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t("form.submit");
  }
}

function initContactForm() {
  if (!form) return;

  // Remove the red border as soon as the user starts typing
  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      field.closest(".form-field").classList.remove("has-error");
      field.removeAttribute("aria-invalid");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      language: currentLang,
    };

    if (FORM_ENDPOINT) {
      sendWithEndpoint(data, form.querySelector('button[type="submit"]'));
    } else {
      sendWithMailto(data);
    }
  });
}

/* -------------------------------------------------------------
   Start everything once the page has loaded
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initLanguageSwitcher();
  initHeaderShadow();
  initScrollSpy();
  initRegisterButtons();
  initContactForm();
});
