const expand_options = document.querySelector(".expand-option");
const expand_btn = document.querySelector(".expand-btn");
const expand_text = document.querySelector(".text-expand");
const products_content = document.querySelector(".products-content");
const searchValue = document.querySelector(".search-input");
const fill_left = document.querySelector(".fill_left_carousel");
const fill_right = document.querySelector(".fill_right_carousel");
const overlay = document.querySelector(".overlay");
let countPage = 1;
let maxPage = 4;

expand_options.style.display = "none";
// renderProduct();
let text = "";
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
  const eRemoveClass = document.querySelector(".select-all");
  eRemoveClass.classList.remove("select-all");
  const loading = document.querySelector(".loading");
  loading.style.display = "flex";
  setTimeout(() => {
    const url = urlParams.get("value");
    const urlPage = urlParams.get("page");
    if (type === "AtZ") {
      expand_text.innerHTML = "Alphabetically: A to Z";
      expand_options.style.display = "none";
      overlay.style.display = "none";
      if (url && !urlPage) {
        window.location.href = `products-list.html?value=${url}&sort=AtZ`;
      } else if (!url && urlPage) {
        window.location.href = `products-list.html?sort=AtZ&page=${urlPage}`;
      } else if (url && urlPage) {
        window.location.href = `products-list.html?value=${url}&sort=AtZ&page=${urlPage}`;
      } else {
        window.location.href = `products-list.html?sort=AtZ`;
      }
    }
    if (type === "ZtA") {
      expand_text.innerHTML = "Alphabetically: Z to A";
      expand_options.style.display = "none";
      overlay.style.display = "none";
      if (url && !urlPage) {
        window.location.href = `products-list.html?value=${url}&sort=ZtA`;
      } else if (!url && urlPage) {
        window.location.href = `products-list.html?sort=ZtA&page=${urlPage}`;
      } else if (url && urlPage) {
        window.location.href = `products-list.html?value=${url}&sort=ZtA&page=${urlPage}`;
      } else {
        window.location.href = `products-list.html?sort=ZtA`;
      }
    }
  }, 2000);
}

// function renderProduct() {
//   listProduct.forEach((value) => {
//     products_content.innerHTML += `<a href="#">
//         <div class="box-goods">
//           <img alt="" src='${value.img}' />
//           <div style="padding-top: 16px">${value.name}</div>
//           <div class="product-content-text">${value.text}</div>
//         </div>
//       </a>`;
//   });
// }
render();
function render() {
  urlParams = new URLSearchParams(window.location.search);
  const urlsort = urlParams.get("sort");
  if (urlsort === "ZtA") {
    expand_text.innerHTML = "Alphabetically: Z to A";
    expand_options.style.display = "none";
    overlay.style.display = "none";
  }
  const urlValue = urlParams.get("value");
  if (urlValue) {
    searchValue.value = urlValue;
    text = urlValue;
  }
  const urlPage = urlParams.get("page");
  if (urlPage) {
    const numberPages = document.getElementById(`${urlPage}`);
    const numberPagesOld = document.querySelector(".selected_pag");
    countPage = urlPage;
    if (Number(numberPagesOld.id) === urlPage) {
      return;
    } else {
      numberPagesOld.classList.remove("selected_pag");
      numberPages.classList.add("selected_pag");
      fill_left.style.fill = "#2B5AA9";
      fill_right.style.fill = "#2B5AA9";
    }

    if (urlPage === 1) fill_left.style.fill = "#A5A8AA";
    if (urlPage === maxPage) fill_right.style.fill = "#A5A8AA";
  }
}
function ChangeText(e) {
  text = e;
}

function searchFnc() {
  const urlsort = urlParams.get("sort");
  if (urlsort) {
    window.location.href = `products-list.html?value=${text}&sort=${urlsort}`;
  } else {
    window.location.href = `products-list.html?value=${text}`;
  }
}

function selectSub(e, type) {
  const textSelect = document.querySelector(".select-sub-cate");
  textSelect.classList.remove("select-sub-cate");
  e.classList.add("select-sub-cate");
  const eRemoveClass = document.querySelector(".select-all");
  eRemoveClass.classList.remove("select-all");
  const idType = document.querySelector(`#${type}`);
  idType.classList.add("select-all");
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
  const urlValue = urlParams.get("value");
  const urlSort = urlParams.get("sort");
  if (urlValue && !urlSort) {
    window.location.href = `products-list.html?value=${urlValue}&page=${numberPage}`;
  } else if (!urlValue && urlSort) {
    window.location.href = `products-list.html?sort=${urlSort}&page=${numberPage}`;
  } else if (urlValue && urlSort) {
    window.location.href = `products-list.html?value=${urlValue}&sort=${urlSort}&page=${numberPage}`;
  } else {
    window.location.href = `products-list.html?page=${numberPage}`;
  }
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
  expand_options.style.display = "none";
  overlay.style.display = "none";
});

function keydownFnc(value, e) {
  text = value;
  if (e.keyCode === 13) {
    searchFnc();
  }
}
