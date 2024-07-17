"use strict";

const page = document.documentElement;

const switcher = document.querySelector(".theme-switcher");
const switcherPointer = document.querySelector(".theme-switcher__pointer");
const switcherLight = document.querySelector(".theme-switcher__icon--light");
const switcherDark = document.querySelector(".theme-switcher__icon--dark");
const headerLinks = document.querySelectorAll(".header__link");

switcher.addEventListener("click", () => {
  page.classList.toggle("page--dark-theme");

  if (page.classList.contains("page--dark-theme")) {
    switcherPointer.classList.add("theme-switcher__pointer--dark");
    switcherLight.classList.remove("theme-switcher__icon--lightActive");
    switcherDark.classList.add("theme-switcher__icon--darkActive");

    headerLinks.forEach((link) => {
      link.classList.add("header__link--dark");
    });
  } else {
    switcherPointer.classList.remove("theme-switcher__pointer--dark");
    switcherDark.classList.remove("theme-switcher__icon--darkActive");
    switcherLight.classList.add("theme-switcher__icon--lightActive");

    headerLinks.forEach((link) => {
      link.classList.remove("header__link--dark");
    });
  }
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
