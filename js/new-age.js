
//variables selección de objetos  
var target = $('#animate1');
var target2 = $('#animate2');
 
//obtener el alto de cada objeto
var objetHeight = function height(objet){  
<<<<<<< HEAD
        return  objet.outerHeight();   
    }  


// función .scroll
=======
      return  objet.outerHeight();   
 }

>>>>>>> e64b2270dc6d2d65b6267c490092eeed375fd3be
$(document).scroll(function(){

 //variables de alturas de objetos
 var objetA =  objetHeight(target);
 var objetB =  objetHeight(target2);

 //obtner ecuación = animación
 function totalHeight(height){
    return (height - window.scrollY) / height;
  }
<<<<<<< HEAD

  //Animaciónes
  var opacityPercent = function equationOpacity(less,kindObjet,multi){
     return (less - kindObjet) * multi;

  } 
  var topPercent = function equationTop (multi,kindObjet){
     return kindObjet * multi ; 
=======
 
  //Animaciónes
  var opacityPercent = function equationOpacity(multi){
    while(totalHeight()){
     return (100 - totalHeight(objetA)) * multi;
     } totalHeight == false;
    while(totalHeight(objetB)){
     return (1 - totalHeight(objetB)) * multi;
     } totalHeight == false;
  }
   
  var topPercent = function equationTop (multi){
     return totalHeight(objetB) * multi ; 
>>>>>>> e64b2270dc6d2d65b6267c490092eeed375fd3be
  }
   
    // Añadiendo efectos a animación
    if(totalHeight(objetA) >= 0){
        target.css({ 
<<<<<<< HEAD
           "opacity": opacityPercent(1,totalHeight(objetA),1), 
            "bottom" : topPercent(totalHeight(objetA),-20)  + "vh", 
=======
           "opacity": opacityPercent(1), 
            "bottom" : topPercent(-20)  + "vh", 
>>>>>>> e64b2270dc6d2d65b6267c490092eeed375fd3be
            "display" : "inherit"}
            );
    }
     if(totalHeight(objetB) >= 0){
        target2.css({ 
<<<<<<< HEAD
           "opacity": opacityPercent(1,totalHeight(objetB),1), 
            "bottom" : topPercent(totalHeight(objetB),-50)  + "vh", 
=======
           "opacity": opacityPercent(1), 
            "bottom" : topPercent(-80)  + "vh", 
>>>>>>> e64b2270dc6d2d65b6267c490092eeed375fd3be
            "display" : "inherit"}

            );
    }
});




 
(function($) {

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
     
  

})(jQuery); // End of use strict
