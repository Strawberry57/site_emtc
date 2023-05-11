function partnerClick(e) {
  const partnerSelect = document.querySelector(".selected-txt");
  partnerSelect.classList.remove("selected-txt");
  e.classList.add("selected-txt");
}
