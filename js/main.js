$(function(){
  $('.header-slider').slick({
     dots: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg"></button>',
     vertical: true,
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false,
  });
  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__content',
    focusOnSelect: true,
    vertical: true,
    prevArrow: '<button type="button" class="slick-prev1"><img src="images/prev1.svg"></button>',
    nextArrow: '<button type="button" class="slick-next1"><img src="images/Vnext1.svg"></button>',
  })
});
let x = true
function showMenu(){
  const menu = document.querySelector('.top__nav-list')
  if (x == false){
    menu.style.marginTop = '-285px'
    x = true
  }
  else {
    menu.style.marginTop = '100px'
    x = false
  }
}