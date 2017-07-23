$(document).ready(function(){

  $('.carousel').on('init', function(event, slick){
      console.log("initialized")
  });

  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});
