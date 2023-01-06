let menuBtn = document.querySelector("#menu-btn");
let infoBtn = document.querySelector("#info-btn");
let searchBtn = document.querySelector("#search-btn");
let detailBtn = document.querySelector("#detail-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.addEventListener("click", () => {
  document.querySelector(".header .navbar").classList.toggle("active");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".search-form").classList.remove("active");
  document.querySelector(".login-form").classList.remove("active");
});
detailBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.toggle("active");
  document.querySelector(".search-form").classList.remove("active");
  document.querySelector(".login-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.remove("active");
});
searchBtn.addEventListener("click", () => {
  document.querySelector(".search-form").classList.toggle("active");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".login-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.remove("active");
});
infoBtn.addEventListener("click", () => {
  document.querySelector(".login-form").classList.toggle("active");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".search-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.remove("active");
});
window.addEventListener("scroll", () => {
  document.querySelector(".login-form").classList.remove("active");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".search-form").classList.remove("active");
  document.querySelector(".header .navbar").classList.remove("active");
});
cancelBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
lightGallery(document.querySelector(".project .content-project"));
