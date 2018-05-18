$(document).ready(function(){
  $('.sliderm').slider({
    height:440,
    indicators:false
  });
  $('select').material_select();
  $('ul.tabs').tabs();
  $(".button-collapse").sideNav();

  $('.o-slider__next').click(function() {
    $('.sliderm').slider('next');
  });
  $('.o-slider__prev').click(function() {
    $('.sliderm').slider('prev');
  });

  $('.dropdown-button').dropdown({
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: true // Stops event propagation
    }
  );

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '3%' // Ending top style attribute
    }
  );
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });
  $(".novedades").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });

  $(".others-users").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });


  if ( $("#blog-landing").length > 0 ) {

    var atsize =180;

    if ($("#blog-landing").data( "atsize" ) == 3) {
      //console.log("3 columnas");
      atsize = 190;
    }
    
    $("#blog-landing").pinto({
        itemWidth: atsize
    });
  }
  if ( $("#product-img").length > 0 ) {
    $('#product-img').zoom();
  }

  


  $('.o-product__carousel img').click(function() {
    var image= $(this).attr('src');
    $('#product-img img').attr('src', image);
  });

  $('.o-product__count .o-product__count-plus').click(function() {
    var parent= $(this).parent();

    var input = $(parent).children('.input-field').children('input');
    var inputval = $(input).val();

    if($(this).index() > 1){
      inputval++;  
    }else{
      inputval--;
    }

    $(input).attr('value', inputval);


  });

});


$(document).ready(function(){
  var flag = false;
  var scroll;
  var bottomBody = $('body').height();
  //console.log(bottomBody);

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    

    if(scroll > bottomBody - 1000){
      if(!flag){
        $(".o-buttonTop").removeClass("scale-out");
        //console.log("llegue");
        flag = true;
      }
    }else{
      if(flag){
        $(".o-buttonTop").addClass("scale-out");
          
        flag = false;
      }
    }
  });

  $('.o-buttonTop a').click(function() {
    $('html, body').animate({scrollTop:0}, 800);

    //console.log('click');
  });
});