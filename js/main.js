const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileLogo = document.querySelector(".mobile-logo");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("active");
  mobileMenuContainer.classList.add("active");
  mobileLogo.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  mobileMenuContainer.classList.remove("active");
  mobileLogo.classList.remove("active");
});
