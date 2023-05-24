const arrowLeft = document.querySelector(".left-carousel");
const arrowRight = document.querySelector(".right-carousel");
const achivementBox = document.querySelectorAll(".achivement-box");
const fill_left = document.querySelector(".fill_left_carousel");
const fill_right = document.querySelector(".fill_right_carousel");
let count = 0;
let position = 0;
let value = 0;
arrowLeft.addEventListener("click", () => {
  position = position - 1;
  count = position;
  checkColorArrowD();
  showLeftAchivement();
});

arrowRight.addEventListener("click", () => {
  position = position + 1;
  count = position;
  checkColorArrowI();
  showRightAchivement();
});

function checkColorArrowD() {
  if (count < 0) {
    position = 0;
    count = 0;
    arrowLeft.style.cursor = "default";
  } else {
    if (count === 0) {
      fill_left.style.fill = "#A5A8AA";
      arrowLeft.style.cursor = "default";
    } else {
      fill_right.style.fill = "#2B5AA9";
      arrowLeft.style.cursor = "pointer";
      position = count;
    }
  }
}
function checkColorArrowI() {
  if (count > achivementBox.length - 1) {
    position = achivementBox.length - 1;
    arrowLeft.style.cursor = "default";
    return;
  } else {
    if (count === achivementBox.length - 1) {
      fill_right.style.fill = "#A5A8AA";
      arrowRight.style.cursor = "default";
      arrowLeft.style.cursor = "pointer";
    }
    fill_left.style.fill = "#2B5AA9";
    arrowLeft.style.cursor = "pointer";
    position = count;
  }
}

function showRightAchivement() {
  const achivementBoxE = document.querySelector(".achivement-wrap");
  const achi = document.querySelector(".achivement-box");
  let valueSet = 0;
  if (achi.offsetWidth < 200) {
    valueSet = achi.offsetWidth + 20;
  } else {
    valueSet = achi.offsetWidth + 32;
  }
  const maxValue = -valueSet * (achivementBox.length - 4);
  if (achivementBox.length > 4) {
    if (value > maxValue) {
      value = value + -valueSet;
      fill_left.style.fill = "#2B5AA9";
      arrowLeft.style.cursor = "pointer";
    }
    if (value === maxValue) {
      fill_right.style.fill = "#A5A8AA";
      arrowRight.style.cursor = "default";
    }
  }
  if (value >= maxValue) {
    achivementBoxE.style.transform = `translateX(${value}px)`;
  }
}

function showLeftAchivement() {
  const achivementBoxE = document.querySelector(".achivement-wrap");
  const achi = document.querySelector(".achivement-box");
  let valueSet = 0;
  if (achi.offsetWidth < 200) {
    valueSet = achi.offsetWidth + 20;
  } else {
    valueSet = achi.offsetWidth + 32;
  }
  if (achivementBox.length > 4) {
    if (value < 0) {
      value = value + valueSet;
      fill_right.style.fill = "#2B5AA9";
      arrowRight.style.cursor = "pointer";
    }
    if (value === 0) {
      fill_left.style.fill = "#A5A8AA";
      arrowLeft.style.cursor = "default";
    }
  }
  if (value <= 0) {
    achivementBoxE.style.transform = `translateX(${value}px)`;
  }
}
