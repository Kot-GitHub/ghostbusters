$(document).ready(function () {
  const mMenuButton = $(".m-menu-burger");
  const mMenu = $(".m-menu")
  mMenuButton.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      },
    },
  })
});