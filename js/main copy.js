let currentLang = "en";

function setLanguage(lang) {
    currentLang = lang;
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (
            typeof translations !== "undefined" &&
            translations[currentLang] &&
            key in translations[currentLang]
        ) {
            el.textContent = translations[currentLang][key];
        } else {
            console.warn("Missing translation key:", key);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
});