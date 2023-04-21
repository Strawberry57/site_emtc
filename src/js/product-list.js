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
console.log(wrapperBox);
function renderProduct() {
  listProduct.map((value, index) => {
    return (wrapperBox.innerHTML += `<a >
        <div class="product-box-content ${index % 2 !== 0 && "row-reverse"}">
        <div class="box-content-text">
          <h1>${value.name}</h1>
          <div class="text">
            ${value.text}
          </div>
          <div class="btn-read"><a href="../products-list/products-list.html">READ MORE</a></div>
        </div>
        <div class="box-content-image">
          <img alt="" src="${value.image}" />
          <div class="select-box-image">
          ${value.data.map(
            (item, i) =>
              `<img
              class="${item.isSelect && "selected"}"
              alt=""
              src="${item.src}"
              onClick="handleClick(${i},${index})"
            />`
          )}
          </div>
        </div>
      </div>
          </a>`);
  });
}
const isFirst = false;
renderProduct();
function handleClick(i, index) {
  const productItem = listProduct[index].data.map((value) => {
    if (value.isSelect === true) value.isSelect = false;
  });
  console.log(productItem);
  wrapperBox.innerHTML = ``;
  listProduct[index].data[i].isSelect = true;
  listProduct[index].image = listProduct[index].data[i].src;
  renderProduct();
}
