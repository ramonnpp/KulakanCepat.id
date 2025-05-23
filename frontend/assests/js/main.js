document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

const promoLink = document.getElementById("promoLink");
const promoSection = document.getElementById("promoSection");

promoLink.addEventListener("click", (e) => {
  e.preventDefault();
  promoSection.classList.toggle("hidden");
  promoSection.scrollIntoView({ behavior: "smooth" });
});
