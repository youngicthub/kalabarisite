document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const aboutUsSection = document.querySelector(".aboutUs");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Home Text Animation
  var homeText = document.querySelector(".homeText");
  homeText.classList.add("active");

  // Trigger animation for About Us section
  setTimeout(function () {
    aboutUsSection.classList.add("active");
  }, 1000);
});




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});