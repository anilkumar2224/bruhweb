/*  ---------------------------------------------------
  Template Name: DJoz
  Description:  DJoz Music HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */



(function($) {
 
      
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
  
    /*------------------
		Barfiller
	

    /*-------------------
		Nice Scroll
	--------------------- */
    // $(".nice-scroll").niceScroll({
    //     cursorcolor: "#111111",
    //     cursorwidth: "5px",
    //     background: "#e1e1e1",
    //     cursorborder: "",
    //     autohidemode: false,
    //     horizrailenabled: false
    // });




    $("#search-icon").click(function() {
          
        $(".nav").toggleClass("search");
        $(".nav").toggleClass("no-search");
        $(".search-input").toggleClass("search-active");
      });
      
      $('.menu-toggle').click(function(){
         $(".nav").toggleClass("mobile-nav");
         $(this).toggleClass("is-active");
      });


      
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');
        
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        
        // Check all animatables and animate them if necessary
            $animatables.each(function(i) {
           var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 150) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
                }
        });
    
        };
      
      // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
      $(window).trigger('scroll');



      $('.card-header').on("click", function() {
        $(this).find('span').toggleClass("fa-caret-up fa-caret-down");
        $('.card-header').removeClass("active");
        $(this).toggleClass("active");
      });

})(jQuery);
