// ----------
// Light mode
// ----------

const setTheme = (theme) => (document.documentElement.className = theme);

// ---------------
//  Hamburger menu
// ---------------

var nav = document.getElementsByClassName("header__bar");
let openBtn = document.getElementsByClassName("header__mobile-close");
let closeBtn = document.getElementsByClassName("header__mobile-open");

function openNav() {
  nav[0].classList.add("active");
  openBtn[0].classList.add("open");
  closeBtn[0].classList.add("open");
}

function closeNav() {
  nav[0].classList.remove("active");
  openBtn[0].classList.remove("open");
  closeBtn[0].classList.remove("open");
}

// ------------------------
//  scroll function nav bar
// ------------------------

function scrollFunction(section) {
  const element = document.getElementById(section);
  if (section === "projects") {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
