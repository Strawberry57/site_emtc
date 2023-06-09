function validEmail(e) {
  const validemail = document.querySelector(".valid-email-footer");
  if (!e) {
    validemail.style.display = "none";
    return;
  }
  if (
    /^[^<>()[\]\\.,;:\s@"]+@[^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}$/.test(
      e
    )
  ) {
    validemail.style.display = "none";
    return true;
  }
  validemail.style.display = "block";
  return false;
}

function btnClickFooter(e) {
  e.preventDefault();
  const emailInput = document.querySelector(".field-input");
  const valid = validEmail(emailInput.value);
  if (!valid) {
    return;
  }
  toastr.success("Thao tác thành công!");
}
