

//variables selección de objetos  
var target = $('#animate1');
var target2 = $('#animate2');
 
//obtener el alto de cada objeto
var objetHeight = function height(objet){  
    if (objet === target ){
        return  objet.outerHeight();   
    }  
    if (objet === target2 ){
         return  objet.outerHeight();  
    }
 }

 objetHeight(target);
 objetHeight(target2);


// función .scroll
$(document).scroll(function(){

 //variables de alturas de objetos
 var objetA =  objetHeight(target);
 var objetB =  objetHeight(target2);

 //obtner ecuación = animación
 function totalHeight(height){
    return (height - window.scrollY) / height;
  }

  totalHeight(objetA);
  totalHeight(objetB);

 
  //Animaciónes
  var opacityPercent = function equationOpacity(less,multi){
     return (less - totalHeight(objetA)) * multi;
  }
   
  var topPercent = function equationTop (multi){
     return totalHeight(objetA) * multi ; 
  }
   
    // Añadiendo efectos a animación
    if(totalHeight(objetA) >= 0){
        target.css({ 
           "opacity": opacityPercent(1,1), 
            "bottom" : topPercent(-20)  + "vh", 
            "display" : "inherit"}
            );
    }
     if(totalHeight(objetB) >= 0){
        target2.css({ 
           "opacity": opacityPercent(1,1), 
            "bottom" : topPercent(-20)  + "vh", 
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
