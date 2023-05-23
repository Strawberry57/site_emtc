function validEmail(e) {
  const validemail = document.querySelector(".valid-email-footer");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
    validemail.style.display = "none";
    return true;
  }
  validemail.style.display = "block";
  return false;
}

function btnClickFooter() {
  const emailInput = document.querySelector(".field-input");
  const valid = validEmail(emailInput.value);
  if (!valid) {
    return;
  }
  toastr.success("Thao tác thành công!");
}
