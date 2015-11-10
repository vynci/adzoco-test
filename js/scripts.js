
$(document).ready(function(){/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

var targetOffset = $("#section1").offset().top;
console.log(targetOffset);
$('#scrolled-nav-bar').hide();
$('#initial-nav-bar').show();

var $w = $(window).scroll(function(){
  if ( $w.scrollTop() > 200 ) {
    $('#scrolled-nav-bar').fadeIn( 'fast' );
    $('#initial-nav-bar').hide();
    console.log('here');
  } else {
    $('#scrolled-nav-bar').hide();
    $('#initial-nav-bar').fadeIn( 'fast' );
    console.log('there');
  }
});

});
