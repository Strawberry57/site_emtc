$(document).ready(function () {
  var yearElements = $(".timeline-year");

  $(".timeline-item").each(function (index) {
    if (index % 2 === 0) {
      $(this).addClass("left");
    } else {
      $(this).addClass("right");
    }
  });

  yearElements.each(function (index) {
    if (index % 2 === 0) {
      $(this).addClass("right");
    } else {
      $(this).addClass("left");
    }
  });
});
