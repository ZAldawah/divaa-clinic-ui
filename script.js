const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const navbarLinks = document.querySelector("navbar-links");
const hamburgerButton = document.getElementById("hamburger-button");
hamburgerButton.addEventListener("click", () => {
  navbarLinks.style.display =
    navbarLinks.style.display === "flex" ? "none" : "flex";
});
