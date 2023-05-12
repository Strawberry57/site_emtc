const timelineBlocks = document.querySelectorAll(".timeline-content");
const timeimg = document.querySelectorAll(".timeline-img");
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  for (let i = 0; i < timelineBlocks.length; i++) {
    const timelineBlock = timelineBlocks[i];
    // Kiểm tra nếu phần tử không có lớp 'is-hidden'
    if (!timelineBlock.classList.contains("is-hidden")) {
      continue; // Chuyển sang phần tử tiếp theo nếu đã hiển thị
    }

    const timelineBlockPosition = timelineBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Kiểm tra nếu phần tử nằm trong khung hiển thị
    if (timelineBlockPosition.top <= windowHeight * 0.8) {
      timelineBlock.classList.remove("is-hidden");
      timelineBlock.classList.add("bounce-in"); // Xóa lớp 'is-hidden'
    }
  }
  for (let i = 0; i < timeimg.length; i++) {
    const timelineBlock = timeimg[i];
    // Kiểm tra nếu phần tử không có lớp 'is-hidden'
    if (!timelineBlock.classList.contains("is-hidden")) {
      continue; // Chuyển sang phần tử tiếp theo nếu đã hiển thị
    }

    const timelineBlockPosition = timelineBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Kiểm tra nếu phần tử nằm trong khung hiển thị
    if (timelineBlockPosition.top <= windowHeight * 0.8) {
      timelineBlock.classList.remove("is-hidden");
      timelineBlock.classList.add("bounce-in"); // Xóa lớp 'is-hidden'
    }
  }
}
