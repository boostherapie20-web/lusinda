(function () {
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.getElementById("mainNav") || document.querySelector(".header-actions");

  if (!siteHeader || !menuToggle || !mainNav || menuToggle.dataset.burgerBound === "true") {
    return;
  }

  menuToggle.dataset.burgerBound = "true";

  function setMenuOpen(isOpen) {
    siteHeader.classList.toggle("is-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!siteHeader.classList.contains("is-menu-open"));
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 860px)").matches) {
      setMenuOpen(false);
    }
  });
})();
