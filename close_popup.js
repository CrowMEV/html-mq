const popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".popup").classList.add("hide");
});
