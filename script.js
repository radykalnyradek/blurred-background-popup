const mainContainer = document.querySelector(".container");
const btn = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click", () => {
  mainContainer.classList.add("active");
  popupContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mainContainer.classList.remove("active");
  popupContainer.classList.remove("active");
});
