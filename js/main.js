$( document ).ready(function() {

              $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
                  entrar()
});


   var wi = $(window).width();
var al = $(window).height();

    // wow
 new WOW().init();

$("#nav-toggle").click(

function(e){
    e.preventDefault();

if($(this).hasClass("active")){
 $(".menu_cel").slideToggle()
}else{

    $(".menu_cel").slideToggle()
    }
    $(this).toggleClass("active")
}
)

 $(window).scroll(function () {

     if ($(this).scrollTop() > al) {
         pausa();
     }

        if ($(this).scrollTop() > 250) {
            $('.fija').addClass("menu_a");
            $("#menu").addClass("menu-scroll");
            $('.logo').addClass("logo-scroll");

        } else {
            $('.fija').removeClass("menu_a");
            $("#menu").removeClass("menu-scroll");
            $('.logo').removeClass("logo-scroll");

        }

    });


       $(".scroll").click(function(e){
        e.preventDefault();
        //var eldiv ="#pqt"
        var destino = $(this).attr("href");

    ira(destino)
    }
    )
    
       function ira(eldiv){
 $('html,body').animate({scrollTop: $( eldiv ).offset().top});
    }



    // -----------------------------------------------------------------------------------------------------funcion entrar
entrar = function(){

var owl = $("#slider-home").data('owlCarousel');
var actual = owl.currentItem;

if(actual=="0"){
$("#mob img").addClass("animate")
//$("#controles").fadeIn();
        pausa();
}else if(actual != "1"){
    $("#mob img").removeClass("animate")
}

    if(actual=="1"){
$("#banner1 img").addClass("animate")
//$("#controles").fadeIn();
        pausa();
}else if(actual != "2"){
    $("#banner1 img").removeClass("animate")
}

       if(actual=="2"){
$("#banner2 img").addClass("animate")
}else if(actual != "3"){
    $("#banner2 img").removeClass("animate")
}

       if(actual=="3"){
$("#banner3 #playa_bann").addClass("animate")
}else if(actual != "3"){
    //$("#banner3 img").removeClass("animate")
}

}



  $("#slider-home").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
         navigation: false,
         pagination: false,
         autoHeight:false,
      autoPlay: 8000,
      stopOnHover: true,
      slideSpeed : 1000,
    paginationSpeed : 3000,
    rewindSpeed : 2000,
 afterMove: entrar,
  });





    $("#adela").click(function(e){
        e.preventDefault();
        $("#slider-home").trigger('owl.next');
    })

    $("#atras").click(function(e){
         e.preventDefault();
        $("#slider-home").trigger('owl.prev');
    })
//play
    $("#play").click(function(e){
        e.preventDefault();
   $("#video-home").get(0).play();

        $("#skip, #play").fadeOut()
})

    //play mob

       $("#playMob").click(function(e){
        e.preventDefault();
           $(".videoPop").fadeIn();
   $("#video-home-mob").get(0).play();
           $("#slider-home").trigger('owl.stop');

})


    //pausa
    $("video, #cerrarV").click(function(e){
        e.preventDefault()
$("#slider-home").trigger('owl.next');
pausa();



    });

    pausa =function(){

        $(".videoPop").fadeOut();
               $("video").each(function(){
    $(this).get(0).pause();
            $("#play").fadeIn();
            $("#skip").fadeIn();
});
    }

        $("#skip, #skipMob").click(function(e){
        e.preventDefault();
     $("#slider-home").trigger("owl.goTo","1");
})

     $('#video-home').on('ended',function(){
         $("#slider-home").trigger("owl.goTo","1");
    });

//animaciones home

    //detecto si entro:

 var waypoints = $('#borde1').waypoint(function(direction) {
  //notify(this.element.id + ' hit 25% from top of window')
$("#sec-mapa h3 ").addClass("bordes-animados");
     //alert("hola");

}, {
  offset: '55%'
})
 ////
  var borde2 = $('.bloque3').waypoint(function(direction) {
  //notify(this.element.id + ' hit 25% from top of window')
$(".bloque3 .contenedor ").addClass("bordes-animados");
     //alert("hola");

}, {
  offset: '55%'
})


// costa canuva sec

      $("#slide_canuva").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
         navigation: false,
         pagination: true,
         autoHeight:false,
      autoPlay: 8000,
      stopOnHover: true,
      slideSpeed : 1000,
    paginationSpeed : 3000,
    rewindSpeed : 2000,
  });


//fin ready
});
