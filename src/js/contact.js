function submitTouch(e) {
  e.preventDefault();
  const nameInput = document.querySelector(".nameInput");
  const emailInput = document.querySelector(".emailInput");
  const messageInput = document.querySelector(".messageInput");
  const errorTextemail = document.querySelector(".errorTextemail");
  const errorTextname = document.querySelector(".errorTextname");
  const textArea = document.querySelector(".textArea");
  if (!nameInput.value) {
    errorTextname.style.display = "block";
    return;
  } else {
    errorTextname.style.display = "none";
  }
  if (!emailInput.value) {
    errorTextemail.style.display = "block";
    return;
  } else {
    errorTextemail.style.display = "none";
  }
  if (!messageInput.value) {
    textArea.style.display = "block";
    return;
  } else {
    textArea.style.display = "none";
  }
  const isValid = handchangeValue(emailInput.value);
  if (!isValid) {
    return;
  }
  $.ajax({
    url: "/umbraco/surface/GetInTouchSurface/ContactForm",
    method: "GET",
    data: {
      Email: nameInput.value,
      Name: emailInput.value,
      Message: messageInput.value,
    },
    success: function (data) {
      // thành công
      toastr.success("Thao tác thành công!");
      // thất bại
      toastr.error("Đã xảy ra lỗi!");
    },
  });
}

function handchangeValue(e) {
  const validemail = document.querySelector(".valid-email");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
    validemail.style.display = "none";
    return true;
  }
  validemail.style.display = "block";
  return false;
}
