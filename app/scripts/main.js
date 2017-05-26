

;(function() {
// var didScroll;
// window.onscroll = scrollListener;

// function scrollListener(){
// 	didScroll = true;
// }
// setInterval(function() {
//     if(didScroll) {
//         didScroll = false;
        // closeHeroNav();
        // var viewportTop = $(window).scrollTop();
        // var viewportHeight = $(window).height();
        // var headHeight = $('#head').height();
        // var nav = $('#fixed-nav');
        // var navHeight = nav.height();
        // if(viewportTop >= (headHeight-navHeight)){
        	
        // 	nav.addClass('background');
        // }
        // if(nav.hasClass('background')){
        // 	if(viewportTop < headHeight-navHeight){
        // 		nav.removeClass('background');
        // 	}
        // }


//     }
// }, 100);




 window.removeEventListener( 'scroll', noscroll );

         function noscroll() {
           window.scrollTo( 0, 0 );
         }





	var init;


	init = function(){
		console.log("init");
		draw();
	}

	/* 

	   Parallaxing JS 
	   sourced from: 
	   http://morris-digital.co.uk/blog/super-simple-60-fps-parallax/
	
	*/
        
        function draw() {
              requestAnimationFrame(draw);
              // Drawing code goes here
              scrollEvent();
    	}


        function scrollEvent(){
        	var viewportTop, windowHeight, viewportBottom, distance, sym;
            // if(!is_touch_device()){
                viewportTop = $(window).scrollTop();
                windowHeight = $(window).height();
                viewportBottom = windowHeight+viewportTop;
  
                if($(window).width())
  
                $('[data-parallax="true"]').each(function(){
                	  
  
                    distance = viewportTop * $(this).attr('data-speed');
                    var elOffset = 300;
                    var opacity = 1-viewportTop/(windowHeight*.5-elOffset);
                    if(opacity < 0) opacity = 0;
                    if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; };
                  
                    $(this).css('transform','translate3d(0, ' + sym + distance +'px,'+  (distance*100) +'px)');
                    $('#lp-header').css('opacity', opacity);
                });
  
            // }
        }   

      function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
            || 'onmsgesturechange' in window; // works on ie10
      }

      init();



})();