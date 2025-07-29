const switchLanguage = () => {
  const button = document.querySelector('.language-switcher');
  const isEnglish = button.textContent === 'FR';
  button.textContent = isEnglish ? 'EN' : 'FR';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isEnglish ? el.getAttribute('data-fr') : el.getAttribute('data-en');
  });
};

// Show sections on scroll animation
const sections = document.querySelectorAll("section");
const showOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
