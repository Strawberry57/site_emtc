const header = document.querySelector(".header-sub-service");
const content = document.querySelector(".content-sub-service");

function selectFnc(e) {
  const li_selected = document.getElementById(`${e}`);
  const li_selected_before = document.querySelector(".selected_li");
  if (li_selected.id === li_selected_before.id) {
    return;
  } else {
    li_selected.classList.add("selected_li");
    li_selected_before.classList.remove("selected_li");
    header.innerHTML = "Header Test";
    content.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse eu tristique tempor habitasse pharetra arcu eu tempus justo. Et sed elit mauris eget. Aliquam ut viverra nisl, nam duis enim arcu cursus. Nunc tortor id vehicula quis et pellentesque. Aliquet egestas elit mi risus amet convallis vitae. Aliquet nibh mus mauris, eget ullamcorper dui pellentesque. Tellus bibendum pharetra, bibendum quis. Eget mi sapien, cursus justo, dictumst aliquam egestas feugiat eget. Mattis interdum id cursus id. Ac pellentesque ac diam nec amet. In aenean vitae neque adipiscing dui elit, nibh molestie neque. Ut cursus malesuada vestibulum feugiat lacinia eget enim. Praesent varius scelerisque lorem nunc. Aliquam dui, mattis placerat sit euismod eget amet tortor non. <br /><br /> Et purus curabitur magna enim nisi, nisl eget.Pharetra tincidunt convallis placerat in tempor pretium en imgravida. Arcu sed arcu, a, lacus, diam a. Feugiat vitaeconvallis gravida imperdiet tempor. Et aliquet a rutrum enim volutpat. Diam donec diam viverra libero. <br /><br />";
  }
}
