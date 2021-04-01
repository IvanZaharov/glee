$(function () {
  $('.info-slider').slick({
    arrows: false,
    dots: true
  });

  $('.insights-articles__partners-list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  })

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});