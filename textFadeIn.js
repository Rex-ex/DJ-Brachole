$(document).ready(function() {
	/*Set element opacity to 0 if JQuery - progressive improvement  */
     $(".hideme").css("opacity", "0");
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){   
        /* Check the location of each desired element */
        $('.hideme').each( function(){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
            }
         }); 
    });
 });