const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
