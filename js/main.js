
$(document).ready(function(){/* activate scrollspy menu */

  $('#money-splash').hide();

  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 150 ) {
      $('#scrolled-nav-bar').slideDown( 'fast' );
      $('#initial-nav-bar').slideUp('fast');
    } else {
      $('#scrolled-nav-bar').slideUp('fast');
      $('#initial-nav-bar').slideDown( 'fast' );
    }

    if ( $w.scrollTop() >= ( $('#section2').position().top - 50 ) ) {
      $('#section2-header').addClass('animated rubberBand');
    }

    if ( $w.scrollTop() >= ( $('#section3').position().top - ($(window).height()/1.6) ) ) {
      $('#money-splash').show();
      $('#money-splash').addClass('animated bounceInDown');
    }
  });

});
