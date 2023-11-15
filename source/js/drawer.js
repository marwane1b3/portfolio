document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
  const drawer = document.querySelector(".drawer");

  hamburgerBtn.addEventListener("click", function () {
    drawer.classList.toggle("show-drawer");
  });

  // Close drawer when clicking outside
  document.addEventListener("click", function (event) {
    const isDrawerOpen = drawer.classList.contains("show-drawer");
    const isClickInsideDrawer = drawer.contains(event.target);
    const isClickOnHamburger = hamburgerBtn.contains(event.target);

    if (isDrawerOpen && !isClickInsideDrawer && !isClickOnHamburger) {
      drawer.classList.remove("show-drawer");
    }
  });
});
