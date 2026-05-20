document.addEventListener("DOMContentLoaded", function () {
  console.log("SEG3125 portfolio loaded successfully.");

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Navigation link clicked:", link.textContent);
    });
  });
});