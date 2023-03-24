const arrowLeft = document.querySelector(".left-carousel");
const arrowRight = document.querySelector(".right-carousel");
const imageShow = document.querySelector(".image-show");
const textShow = document.querySelector(".text-show");
const fill_left = document.querySelector(".fill_left_carousel");
const fill_right = document.querySelector(".fill_right_carousel");
const fill_left_pro = document.querySelector(".fill_left_pro_carousel");
const fill_right_pro = document.querySelector(".fill_right_pro_carousel");
const arrowLeft_product = document.querySelector(".left-carousel-product");
const arrowRight_product = document.querySelector(".right-carousel-product");
const box_product = document.querySelectorAll(".box-product");
const listImage = [
  {
    text: "Consequently, we not only control carefully in each workshop, but also invest many modern equipments su...",
    src: "../../assets/imgs/service.png",
  },
  {
    text: "hello hello, testing",
    src: "../../assets/imgs/preview-1.png",
  },
  {
    text: "hello hello, testing 2",
    src: "../../assets/imgs/preview-2.png",
  },
  {
    text: "hello hello, testing3",
    src: "../../assets/imgs/preview-1.png",
  },
  {
    text: "hello hello, testing 4",
    src: "../../assets/imgs/preview-2.png",
  },
  {
    text: "hello hello, testing 5",
    src: "../../assets/imgs/preview-1.png",
  },
];

let count = 0;
let position = 0;
let value = 0;
let countValue = 0;
arrowLeft.addEventListener("click", () => {
  position = position - 1;
  count = position;
  if (count < 0) {
    position = 0;
    count = 0;
    arrowLeft.style.cursor = "default";
  } else {
    if (count === 0) {
      fill_left.style.fill = "#A5A8AA";
      arrowLeft.style.cursor = "default";
      selectFnc(count);
    } else {
      fill_right.style.fill = "#2B5AA9";
      arrowLeft.style.cursor = "pointer";

      imageShow.src = listImage[count].src;
      textShow.innerHTML = listImage[count].text;
      position = count;
    }
    selectFnc(count);
  }
});

arrowRight.addEventListener("click", () => {
  position = position + 1;
  count = position;
  if (count > listImage.length - 1) {
    position = listImage.length - 1;
    arrowLeft.style.cursor = "default";
    return;
  } else {
    if (count === listImage.length - 1) {
      fill_right.style.fill = "#A5A8AA";
      arrowRight.style.cursor = "default";
      arrowLeft.style.cursor = "pointer";
      selectFnc(count);
    }
    fill_left.style.fill = "#2B5AA9";
    arrowLeft.style.cursor = "pointer";
    imageShow.src = listImage[count].src;
    textShow.innerHTML = listImage[count].text;
    position = count;
    if (count < listImage.length - 1) {
      selectFnc(count);
    }
  }
});

function selectFnc(e) {
  const li_selected = document.getElementById(`${e}`);
  const li_selected_before = document.querySelector(".selected_li");
  if (li_selected.id === li_selected_before.id) {
    return;
  } else {
    li_selected.classList.add("selected_li");
    li_selected_before.classList.remove("selected_li");
    const number = Math.floor(Math.random() * 3);

    imageShow.src = listImage[number].src;
    textShow.innerHTML = listImage[number].text;
  }
  const back = document.querySelector(".list-background");
  console.log(e);
  back.innerHTML = `0` + (Number(e) + 1);
}

arrowRight_product.addEventListener("click", () => {
  const product_detail = document.querySelector(".product-detail");
  const maxValue = -264 * (box_product.length - 4);
  if (box_product.length > 4) {
    if (value > maxValue) {
      value = value + -264;
      fill_left_pro.style.fill = "#2B5AA9";
    }
    if (value === maxValue) fill_right_pro.style.fill = "#A5A8AA";
  }
  if (value >= maxValue) {
    product_detail.style.transform = `translateX(${value}px)`;
  }
});

arrowLeft_product.addEventListener("click", () => {
  const product_detail = document.querySelector(".product-detail");
  if (box_product.length > 4) {
    if (value < 0) {
      value = value + 264;
      fill_right_pro.style.fill = "#2B5AA9";
    }
    if (value === 0) fill_left_pro.style.fill = "#A5A8AA";
  }
  if (value <= 0) {
    product_detail.style.transform = `translateX(${value}px)`;
  }
});
