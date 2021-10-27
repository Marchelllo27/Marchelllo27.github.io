const hamburIcon = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const langs = document.querySelector(".list-languages");
const langsBox = document.querySelector(".languages-box");
const caretSymbol = document.querySelector(".caret-symbol");
const langImage = langsBox.querySelector('.languages-box img:first-child');
console.log(langImage)

function menuToggle() {
  hamburIcon.classList.toggle("active");
  menu.classList.toggle("active");
}

function toggleLangsBox() {
  caretSymbol.classList.toggle("active");
  langs.classList.toggle("active");
}

// MOBILE MENU & HAMBURGER ICON -------------------------------

hamburIcon.addEventListener("click", () => {
  menuToggle();
});

const navLinks = menu.getElementsByTagName("li");
navLinks[1].addEventListener("click", () => {
  menuToggle();
});

navLinks[2].addEventListener("click", () => {
  menuToggle();
});

// LANGUAGES BOX -------------------------------

langsBox.addEventListener("click", () => {
 toggleLangsBox();
});

document.addEventListener("click", event => {
  if (event.target !== langsBox && event.target !== langs && event.target !== caretSymbol && event.target !== langImage) {
    caretSymbol.classList.remove("active");
    langs.classList.remove("active");
  }
});