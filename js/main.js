$(document).ready(function () {
  $(".side_menu img:last-child").click(function () {
    $(".hide_menu").addClass("show_menu"),
      $("header").css({
        display: "none",
      });
  });

  $(".hide_menu i").click(function () {
    $(".hide_menu").removeClass("show_menu");
  });

  const swiper1 = new Swiper(".swiper1", {
    // Optional parameters
    // direction: 'vertical', -> 방향
    loop: true,
    scrollbar: {
      el: ".scrollbar1",
      draggable: true,
    },
  });

  var swiper3 = new Swiper(".Swiper3", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: ".scrollbar3",
      draggable: true,
    },
  });
});
