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

/* Set the width of the side navigation to 250px */

function openNav() {
  nav[0].classList.add("active");
  openBtn[0].classList.add("open");
  closeBtn[0].classList.add("open");
}

/* Set the width of the side navigation to 0 */

function closeNav() {
  nav[0].classList.remove("active");
  openBtn[0].classList.remove("open");
  closeBtn[0].classList.remove("open");
}
