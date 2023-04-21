const expand_options = document.querySelector(".expand-option");
const expand_btn = document.querySelector(".expand-btn");
const expand_text = document.querySelector(".text-expand");
const products_content = document.querySelector(".products-content");
const searchValue = document.querySelector(".search-input");
const fill_left = document.querySelector(".fill_left_carousel");
const fill_right = document.querySelector(".fill_right_carousel");
const overlay = document.querySelector(".overlay");
console.log(overlay);
let countPage = 1;
let maxPage = 4;
const listProduct = [
  {
    name: "Bạc hàn",
    img: "../../assets/imgs/bac-han.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc thúc",
    img: "../../assets/imgs/bac-thuc.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ Toyota",
    img: "../../assets/imgs/auto_by.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ xe máy",
    img: "../../assets/imgs/bo-dung-cu-xe-may.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc hàn",
    img: "../../assets/imgs/bac-han.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc thúc",
    img: "../../assets/imgs/bac-thuc.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ Toyota",
    img: "../../assets/imgs/auto_by.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ xe máy",
    img: "../../assets/imgs/bo-dung-cu-xe-may.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc hàn",
    img: "../../assets/imgs/bac-han.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc thúc",
    img: "../../assets/imgs/bac-thuc.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ Toyota",
    img: "../../assets/imgs/auto_by.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ xe máy",
    img: "../../assets/imgs/bo-dung-cu-xe-may.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc hàn",
    img: "../../assets/imgs/bac-han.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bạc thúc",
    img: "../../assets/imgs/bac-thuc.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ Toyota",
    img: "../../assets/imgs/auto_by.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
  {
    name: "Bộ dụng cụ xe máy",
    img: "../../assets/imgs/bo-dung-cu-xe-may.png",
    text: "Lorem ipsum dolor sit amet consectetur. Fusce volutpat faucibus viverra laoreet ",
  },
];

expand_options.style.display = "none";
renderProduct();

expand_btn.addEventListener("click", () => {
  if (expand_options.style.display !== "none") {
    expand_options.style.display = "none";
    overlay.style.display = "none";
  } else {
    expand_options.style.display = "block";
    overlay.style.display = "block";
  }
});

function selectFilterFnc(type) {
  if (type === "AtZ") {
    expand_text.innerHTML = "Alphabetically: A to Z";
    expand_options.style.display = "none";
    overlay.style.display = "none";
  }
  if (type === "ZtA") {
    expand_text.innerHTML = "Alphabetically: Z to A";
    expand_options.style.display = "none";
    overlay.style.display = "none";
  }
}

function renderProduct() {
  listProduct.forEach((value) => {
    products_content.innerHTML += `<a href="#">
        <div class="box-goods">
          <img alt="" src='${value.img}' />
          <div>${value.name}</div>
          <div class="product-content-text">${value.text}</div>
        </div>
      </a>`;
  });
}

function searchFnc() {
  products_content.innerHTML = "";
  console.log(searchValue.value);
  const valueS = searchValue.value;
  listProduct.forEach((value) => {
    if (value.name.toUpperCase().indexOf(valueS.toUpperCase()) > -1) {
      products_content.innerHTML += `<a href="#">
        <div class="box-goods">
          <img alt="" src='${value.img}' />
          <div>${value.name}</div>
          <div> asdds${value.text}</div>
        </div>
      </a>`;
    }
  });
}

function changePaginator(numberPage) {
  const numberPages = document.getElementById(`${numberPage}`);
  const numberPagesOld = document.querySelector(".selected_pag");
  countPage = numberPage;
  if (Number(numberPagesOld.id) === numberPage) {
    return;
  } else {
    numberPagesOld.classList.remove("selected_pag");
    numberPages.classList.add("selected_pag");
    fill_left.style.fill = "#2B5AA9";
    fill_right.style.fill = "#2B5AA9";
  }

  if (numberPage === 1) fill_left.style.fill = "#A5A8AA";
  if (numberPage === maxPage) fill_right.style.fill = "#A5A8AA";
}

function backPage() {
  let numberPage;
  if (countPage > 1) {
    numberPage = document.getElementById(`${countPage - 1}`);
  } else {
    numberPage = document.getElementById(`${countPage}`);
  }
  const numberPagesOld = document.querySelector(".selected_pag");
  if (Number(numberPage.id) < 1) {
    return;
  } else if (Number(numberPage.id) === 1) {
    fill_left.style.fill = "#A5A8AA";
    numberPagesOld.classList.remove("selected_pag");
    numberPage.classList.add("selected_pag");
  } else {
    numberPagesOld.classList.remove("selected_pag");
    numberPage.classList.add("selected_pag");
    countPage = Number(numberPage.id);
    fill_right.style.fill = "#2B5AA9";
  }
}

function nextPage() {
  let numberPage;
  if (countPage < maxPage) {
    numberPage = document.getElementById(`${countPage + 1}`);
  } else {
    numberPage = document.getElementById(`${countPage}`);
  }
  const numberPagesOld = document.querySelector(".selected_pag");
  if (Number(numberPage.id) > maxPage) {
    return;
  } else if (Number(numberPage.id) === maxPage) {
    fill_right.style.fill = "#A5A8AA";
    numberPagesOld.classList.remove("selected_pag");
    numberPage.classList.add("selected_pag");
  } else {
    numberPagesOld.classList.remove("selected_pag");
    numberPage.classList.add("selected_pag");
    countPage = Number(numberPage.id);
    fill_left.style.fill = "#2B5AA9";
  }
}
overlay.addEventListener("click", () => {
  console.log("abc");
  expand_options.style.display = "none";
  overlay.style.display = "none";
});
