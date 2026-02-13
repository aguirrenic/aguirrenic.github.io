function setLanguage(lang) {

document.getElementById("htmlTag").lang = lang;

const elements = document.querySelectorAll("[data-i18n]");

elements.forEach(el => {
const key = el.getAttribute("data-i18n");
if (translations[lang][key]) {
el.textContent = translations[lang][key];
}
});

localStorage.setItem("language", lang);
}

// Load saved language or default to English
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);