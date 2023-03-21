const arrowLeft = document.querySelector(".left-carousel");
const arrowRight = document.querySelector(".right-carousel");
const imageShow = document.querySelector(".image-show");
const textShow = document.querySelector(".text-show");

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
    text: "hello hello, testing",
    src: "../../assets/imgs/preview-2.png",
  },
];

let count = 0;
let position = 0;
arrowLeft.addEventListener("click", () => {
  position = position - 1;
  count = position;
  if (count < 0) {
    count = listImage.length - 1;
  }
  imageShow.src = listImage[count].src;
  textShow.innerHTML = listImage[count].text;
  position = count;
});

arrowRight.addEventListener("click", () => {
  position = position + 1;
  count = position;
  if (count > listImage.length - 1) {
    count = 0;
  }
  imageShow.src = listImage[count].src;
  textShow.innerHTML = listImage[count].text;
  position = count;
});
