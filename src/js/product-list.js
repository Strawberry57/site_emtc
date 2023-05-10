const wrapperBox = document.querySelector(".wrapper-box");
const listProduct = [
  {
    name: "Phụ tùng ô tô, xe máy",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet vestibulum lorem. Non neque nibh quis blandit felis in suscipit ultricies accumsan. Maecenas ac at tortor lacus elit aenean tortor amet. Suscipit at dolor vel egestas adipiscing eleifend. Nisl scelerisque sem tortor enim.",
    image: "../../assets/imgs/product_1.png",
    data: [
      { isSelect: true, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
    ],
  },
  {
    name: "Dụng cụ cầm tay",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet vestibulum lorem. Non neque nibh quis blandit felis in suscipit ultricies accumsan. Maecenas ac at tortor lacus elit aenean tortor amet. Suscipit at dolor vel egestas adipiscing eleifend. Nisl scelerisque sem tortor enim.",
    image: "../../assets/imgs/product_2.png",
    data: [
      { isSelect: true, src: "../../assets/imgs/product_2.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
    ],
  },
  {
    name: "Bếp nướng BBQ",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet vestibulum lorem. Non neque nibh quis blandit felis in suscipit ultricies accumsan. Maecenas ac at tortor lacus elit aenean tortor amet. Suscipit at dolor vel egestas adipiscing eleifend. Nisl scelerisque sem tortor enim.",
    image: "../../assets/imgs/product_3.png",
    data: [
      { isSelect: true, src: "../../assets/imgs/product_3.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
    ],
  },
  {
    name: "Điện gió",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet vestibulum lorem. Non neque nibh quis blandit felis in suscipit ultricies accumsan. Maecenas ac at tortor lacus elit aenean tortor amet. Suscipit at dolor vel egestas adipiscing eleifend. Nisl scelerisque sem tortor enim.",
    image: "../../assets/imgs/product_4.png",
    data: [
      { isSelect: true, src: "../../assets/imgs/product_4.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
    ],
  },
  {
    name: "Thang máy",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet vestibulum lorem. Non neque nibh quis blandit felis in suscipit ultricies accumsan. Maecenas ac at tortor lacus elit aenean tortor amet. Suscipit at dolor vel egestas adipiscing eleifend. Nisl scelerisque sem tortor enim.",
    image: "../../assets/imgs/product_5.png",
    data: [
      { isSelect: true, src: "../../assets/imgs/product_5.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
      { isSelect: false, src: "../../assets/imgs/product_1.png" },
    ],
  },
];
function clickSubImg(e, id) {
  const boxItem = document.getElementById(`box-${id}`);
  const selected = boxItem.querySelector(".selected");
  selected.classList.remove("selected");
  const idElement = document.getElementById(`main-${id}`);
  e.classList.add("selected");
  idElement.src = e.src;
}
