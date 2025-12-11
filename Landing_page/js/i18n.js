let currentLang = localStorage.getItem("lang") || "en";

function loadLanguage(lang) {
  fetch(`/locales/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.textContent = data[key];
        }
      });
    });

  localStorage.setItem("lang", lang);
  updateActiveFlag(lang);
}

function updateActiveFlag(lang) {
  document
    .querySelectorAll(".language-switcher button")
    .forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`.language-switcher button[data-lang='${lang}']`);
  if (activeBtn) activeBtn.classList.add("active");
}

loadLanguage(currentLang);

