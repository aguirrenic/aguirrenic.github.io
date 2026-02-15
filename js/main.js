let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updateLanguage();
}

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[currentLang][key]) el.innerText = translations[currentLang][key];
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) currentLang = savedLang;
  updateLanguage();
};

// ================= Animación al scroll =================
const cards = document.querySelectorAll('.card');
const summary = document.querySelector('#summary');

function checkElements() {
  const triggerBottom = window.innerHeight - 100;

  // Cards
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });

  // Summary
  if(summary) {
    const summaryTop = summary.getBoundingClientRect().top;
    if(summaryTop < triggerBottom) {
      summary.classList.add('show');
    }
  }
}


function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(translations[currentLang], key);

    if (value) {
      el.innerText = value;
    }
  });
}

window.addEventListener('scroll', checkElements);
window.addEventListener('load', checkElements);