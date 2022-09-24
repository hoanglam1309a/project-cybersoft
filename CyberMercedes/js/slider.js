// Custom for Slider Header
$(".slider-list").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});

// Custom for Slider Vehicles
$slick_slider = $(".vehicles-list");
settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
};
$slick_slider.slick(settings);
$window = $(window);
$window.on("resize", function () {
  if ($window.width() < 767) {
    if ($slick_slider.hasClass("slick-initialized"))
      $slick_slider.slick("unslick");
    return;
  }
  if (!$slick_slider.hasClass("slick-initialized"))
    return $slick_slider.slick(settings);
});
// Responsize Slider Vehicles (Unslick when resize < 767px)
$(".slider-list").on("beforeChange", function () {
  $(".slider-heading")
    .removeClass("animate__animated animate__fadeInDown")
    .hide();
  $(".slider-btn")
    .removeClass("animate__animated animate__fadeInDown animate__delay-1s")
    .hide();
  $(".slider-desc")
    .removeClass("animate__animated animate__fadeInDown animate__delay-1s")
    .hide();
  setTimeout(() => {
    $(".slider-heading")
      .addClass("animate__animated animate__fadeInDown")
      .show();
    $(".slider-btn")
      .addClass("animate__animated animate__fadeInDown animate__delay-1s")
      .show();
    $(".slider-desc")
      .addClass("animate__animated animate__fadeInDown animate__delay-1s")
      .show();
  }, 1000);
});

// Bootstrap 4. You need to trigger the position change on the tab shown event.
$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  $(".vehicles-list").slick("setPosition");
});
