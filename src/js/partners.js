function partnerClick(e, type) {
  const partnerSelect = document.querySelector(".selected-txt");
  partnerSelect.classList.remove("selected-txt");
  e.classList.add("selected-txt");
  const viewPartnerOld = document.querySelector(".select-partner");
  const viewPartner = document.querySelector(`#${type}`);
  viewPartnerOld.classList.remove("select-partner");
  viewPartner.classList.add("select-partner");
}
