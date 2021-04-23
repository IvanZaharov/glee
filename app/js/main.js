$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",

    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

    }
  });

  $('.slider-top__items').slick({
    arrows: false,
    dots: true
  });

  $('.insights-articles__partners-list').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.filter-recent__star').rateYo({
    starWidth: '11px',
    spacing: "8px",
    readOnly: true,
    normalFill: "#d6d6d6",
    rating: 4,
    ratedFill: "#ffcc00"
  });

  $('.product-list__star').rateYo({
    starWidth: '18px',
    spacing: "13px",
    readOnly: true,
    normalFill: "#d6d6d6",
    rating: 4,
    ratedFill: "#ffcc00"
  });


  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});