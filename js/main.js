let currentLang = "en";

function setLanguage(lang) {
    currentLang = lang;
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
});