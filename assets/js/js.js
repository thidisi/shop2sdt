
const languageBtn = document.querySelector('.mobile-item__language')
const languageOptions = document.querySelector('.mobile__language')

function showMobileLanguages() {
  languageOptions.classList.toggle('show-language');
}
languageBtn.addEventListener('click', showMobileLanguages);