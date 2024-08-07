import featuredProjectsEN from "../components/featuredProjectsEN.js";
import featuredProjectsES from "../components/featuredProjectsES.js";
import { handleCheckClick } from "../components/handleCheckClick .js";
import { handleLoadEvent } from "../components/handleLoadEvent.js";
import { handleShowProjectsClick } from "../components/handleShowProjectsClick.js";
import { observeProject } from "../components/observeProject.js";
import { observeSections } from "../components/observeSections.js";
import printFeaturedProjects from "../components/printFeaturedProjects.js";
import printProjects from "../components/printProjects.js";
import projectsEN from "../components/projectsEN.js";
import projectsES from "../components/projectsES.js";

const form = document.getElementById("form");

let headerMenu = document.querySelector(".header__menu");
let check = document.querySelector("#btn-switch");
let portfolioContainer = document.querySelector(".portfolio__content");
let showProjects = document.querySelector(".portfolio__show");
let showDegradiant = document.querySelector(".portfolio .portfolio__content");
let headerBtn = document.querySelector(".header__btn");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".list__link");
const pointer = document.querySelector(".cursor");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");

if (check.checked) {
  printProjects(projectsEN, check, portfolioContainer);
  printFeaturedProjects(featuredProjectsEN, check);
} else {
  printProjects(projectsES, check, portfolioContainer);
  printFeaturedProjects(featuredProjectsES, check);
}

headerBtn.addEventListener("click", toggleMenu);
check.addEventListener("click", () => handleCheckClick(check));
showProjects.addEventListener("click", (e) =>
  handleShowProjectsClick(e, portfolioContainer, showDegradiant)
);
closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  emailjs.send("service_9hmvrez", "template_aiuhovu", data).then((res) => {
    showToast();
    this.reset();
  });
});

const swiper = new Swiper(".portfolio .swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

window.addEventListener("load", () => handleLoadEvent(pointer));

observeSections(sections, links);

let projectsInfo = document.querySelectorAll(".portfolio__item");

observeProject(projectsInfo, check.checked);

function addEvents() {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickLeaveMenu);
}
function removeEvents() {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickLeaveMenu);
}
function handleClickLeaveMenu(e) {
  if (
    headerMenu.classList.contains("show__menu") &&
    !e.target.closest(".header__btn")
  ) {
    toggleMenu();
  }
}
function handleScroll() {
  if (headerMenu.classList.contains("show__menu")) {
    toggleMenu();
  }
}
function toggleMenu() {
  if (headerMenu.classList.contains("show__menu")) {
    headerMenu.classList.remove("show__menu");
    removeEvents();
  } else {
    headerMenu.classList.add("show__menu");
    addEvents();
  }
}

function showToast() {
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
}
