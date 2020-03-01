$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        dots:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            575:{
                items: 2
            },
            768:{
                items: 3
            },
            1000: {
                items: 3
            }
        } 
    });

  });