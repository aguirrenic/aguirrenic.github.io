let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updateLanguage();
}

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[currentLang][key];
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) currentLang = savedLang;
  updateLanguage();
};


// Animación cards al aparecer
const cards = document.querySelectorAll('.card');

function checkCards() {
  const triggerBottom = window.innerHeight - 100;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);