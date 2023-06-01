const arrowLeft = document.querySelector(".left-carousel");
const arrowRight = document.querySelector(".right-carousel");
const newsDetailBox = document.querySelectorAll(".news-detail-box");
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
  if (count > newsDetailBox.length - 1) {
    position = newsDetailBox.length - 1;
    arrowLeft.style.cursor = "default";
    return;
  } else {
    if (count === newsDetailBox.length - 1) {
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
  const newsDetailListE = document.querySelector(".news-related-list");
  const newsDetailBoxE = document.querySelector(".news-detail-box");
  let valueSet = 0;
  if (newsDetailBoxE.offsetWidth == 326) {
    valueSet = newsDetailBoxE.offsetWidth + 35 + 13;
  } else if (newsDetailBoxE.offsetWidth == 370) {
    valueSet = newsDetailBoxE.offsetWidth + 20;
  } else {
    valueSet = newsDetailBoxE.offsetWidth + 35;
  }
  let maxValue;
  if (newsDetailBoxE.offsetWidth !== 370) {
    maxValue = -valueSet * (newsDetailBox.length - 4);
  }
  if (newsDetailBoxE.offsetWidth == 326) {
    maxValue = -valueSet * (newsDetailBox.length - 2);
  } else {
    maxValue = -valueSet * (newsDetailBox.length - 1);
  }
  if (newsDetailBox.length > 4) {
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
    newsDetailListE.style.transform = `translateX(${value}px)`;
  }
}

function showLeftAchivement() {
  const newsDetailListE = document.querySelector(".news-related-list");
  const newsDetailBoxE = document.querySelector(".news-detail-box");
  let valueSet = 0;
  if (newsDetailBoxE.offsetWidth == 326) {
    valueSet = newsDetailBoxE.offsetWidth + 35 + 13;
  } else if (newsDetailBoxE.offsetWidth == 370) {
    valueSet = newsDetailBoxE.offsetWidth + 20;
  } else {
    valueSet = newsDetailBoxE.offsetWidth + 35;
  }
  if (newsDetailBox.length > 4) {
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
    newsDetailListE.style.transform = `translateX(${value}px)`;
  }
}
