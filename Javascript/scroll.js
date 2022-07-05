// js for scrolling nav top

fixNav = (e) => {
  let navbar = document.getElementById("navbar");
  let logo = document.getElementById("scrollLogo");
  if (window.scrollY) {
    // tiggers when scrolling and makes navbar to fix at top
    navbar.classList.add("scroll");
    logo.classList.add("scroll-logo");
  } else {
    navbar.classList.remove("scroll");
    logo.classList.remove("scroll-logo");
  }
};

window.addEventListener("scroll", fixNav);

