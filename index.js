let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-60px"; // Adjust this value based on navbar height
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
