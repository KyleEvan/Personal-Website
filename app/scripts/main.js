


var didScroll;
window.onscroll = scrollListener;

function scrollListener(){
	didScroll = true;
}
setInterval(function() {
    if(didScroll) {
        didScroll = false;
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


    }
}, 100);


// function closeHeroNav(){
// 	if ($('#toggle').is(':checked')) {
// 		$('#toggle').prop('checked', false);
// 	}
// }


/* 
   Parallaxing JS 
   sourced from: 
   http://morris-digital.co.uk/blog/super-simple-60-fps-parallax/
*/

      $(document).ready(function(){

          function draw() {
              requestAnimationFrame(draw);
              // Drawing code goes here
              scrollEvent();
          }
          draw();

      });

      function scrollEvent(){
      	console.log("called")
      	var viewportTop, windowHeight, viewportBottom, distance, sym;
          // if(!is_touch_device()){
              viewportTop = $(window).scrollTop();
              windowHeight = $(window).height();
              viewportBottom = windowHeight+viewportTop;

              if($(window).width())

              $('[data-parallax="true"]').each(function(){
              	  

                  distance = viewportTop * $(this).attr('data-speed');
                  var elOffset = 200;
                  var opacity = 1-viewportTop/(windowHeight*.5-elOffset);
                  if(opacity < 0) opacity = 0;
                  console.log(opacity);
                  if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; };
                
                  $(this).css('transform','translate3d(0, ' + sym + distance +'px,'+  (distance*100) +'px)');
                  $('#pic-of-me-border').css('opacity', opacity);
              });

          // }
      }   

      function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
            || 'onmsgesturechange' in window; // works on ie10
      }


