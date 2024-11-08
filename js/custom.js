
$(document).ready(function(){
  $('.menuBar').click(function(){
    $('.nav-menu').toggleClass('active');  
  });

  // var agefunc = function(age){ 
    
  //   console.log('당신의 나이는 :' + age + '입니다' )};
  
  // setInterval(agefunc(20), 5000);
  var basePath = 'img/';
  var commonName = '색깔 바꿀거 ';

  // var changeHeadphoneFunc = function(){ 
  //   var imgValue = $('.BoseQCultra li:nth-child(3) img');
  //   var index = imgValue.attr('src').lastIndexOf('.');
  //   var number = parseInt(imgValue.attr('src').substring(index -1, index));
    
  //   number = (number + 1) % 5;

  //   imgValue.attr('src', basePath + commonName + (number).toString() + '.png');
  // }
  
  // $(~~).mouseEnter(function(){ 
  //   var imgValue = $('.BoseQCultra li:nth-child(3) img');
  //   var index = imgValue.attr('src').lastIndexOf('.');
  //   var number = parseInt(imgValue.attr('src').substring(index -1, index));
    
  //   number = (number + 1) % 5;

  //   imgValue.attr('src', basePath + commonName + (number).toString() + '.png'))

  setInterval(function(){ 
    var imgValue = $('.BoseQCultra li:nth-child(3) img');
    var index = imgValue.attr('src').lastIndexOf('.');
    var number = parseInt(imgValue.attr('src').substring(index -1, index));
    
    number = (number + 1) % 5;

    imgValue.attr('src', basePath + commonName + (number).toString() + '.png')
  }, 3000);

});

var mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 2,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

