
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
  $('#blackOverlay').hide();

  $('#myNavmenu').on('hidden.bs.offcanvas', function (e) {
    $('#blackOverlay').hide();
  });

  $('#myNavmenu').on('show.bs.offcanvas', function (e) {
    $('#blackOverlay').show();
  });

  var targetOffset = $("#section1").offset().top;
  $('#scrolled-nav-bar').hide();
  $('#initial-nav-bar').show();

  $('#sec1-window').hide();
  $('#sec1-plus').hide();
  $('#sec1-adv').hide();
  $('#sec1-equal').hide();
  $('#sec1-money').hide();

  $('#sec2-img1').hide();
  $('#sec2-img2').hide();
  $('#sec2-img3').hide();
  $('#sec2-img4').hide();

  $('#sec3-img1').hide();
  $('#sec3-img2').hide();
  $('#sec3-img3').hide();
  $('#sec3-img4').hide();

  $('#sec4-img1').hide();
  $('#sec4-img2').hide();

  $('#sec1-window').fadeIn('slow', function(){
    $('#sec1-plus').fadeIn('slow', function(){
      $('#sec1-adv').fadeIn('slow', function(){
        $('#sec1-equal').fadeIn('slow', function(){
          $('#sec1-money').fadeIn('slow', function(){

          });
        });
      });
    });
  });

  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 150 ) {
      $('#scrolled-nav-bar').slideDown( 'fast' );
      $('#initial-nav-bar').slideUp('fast');
    } else {
      $('#scrolled-nav-bar').slideUp('fast');
      $('#initial-nav-bar').slideDown( 'fast' );
    }

    if ( $w.scrollTop() >= ( $('#section2').position().top - 100 ) ) {
      $('#sec2-img1').fadeIn('slow', function(){
        $('#sec2-img2').fadeIn('slow', function(){
          $('#sec2-img3').fadeIn('slow', function(){
            $('#sec2-img4').fadeIn('slow', function(){
            });
          });
        });
      });
    }

    if ( $w.scrollTop() >= ( $('#section3').position().top - 100 ) ) {
      $('#sec3-img1').fadeIn('slow', function(){
        $('#sec3-img2').fadeIn('slow', function(){
          $('#sec3-img3').fadeIn('slow', function(){
            $('#sec3-img4').fadeIn('slow', function(){
            });
          });
        });
      });
    }

    if ( $w.scrollTop() >= ( $('#section4').position().top - 100 ) ) {
      $('#sec4-img1').fadeIn('slow', function(){
        $('#sec4-img2').fadeIn('slow', function(){
        });
      });
    }
  });

});

// $("#flashes").animate({ top: "1px" }, "slow", "swing", animDown);
//
// function animDown() {
//   $("#flashes").animate({ top: "5px" }, "slow", "swing", animUp);
// }
//
// function animUp() {
//   $("#flashes").animate({ top: "1px" }, "slow", "swing", animDown);
// }
//
// $("#flashes2").animate({ top: "1px" }, "slow", "swing", animDown2);
//
// function animDown2() {
//   $("#flashes2").animate({ top: "5px" }, "slow", "swing", animUp2);
// }
//
// function animUp2() {
//   $("#flashes2").animate({ top: "1px" }, "slow", "swing", animDown2);
// }

interact('.resize-drag')
.draggable({
  onmove: window.dragMoveListener
})
.resizable({
  preserveAspectRatio: false,
  edges: { left: false, right: true, bottom: false, top: false }
})
.on('resizemove', function (event) {
  var target = event.target,

  x = (parseFloat(target.getAttribute('data-x')) || 0),
  y = (parseFloat(target.getAttribute('data-y')) || 0);
  console.log(event);

  // update the element's style
  target.style.width  = event.rect.width + 'px';

  // translate when resizing from top or left edges
  x += event.deltaRect.left;

  target.style.webkitTransform = target.style.transform =
  'translate(' + x + 'px,' + y + 'px)';

  target.setAttribute('data-x', x);
  // target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
});


function printMousePos(e) {
  var cursorX = e.clientX;

  $('#resize-content').animate({
    width: cursorX,
  }, 1000, function() {
    // Animation complete.
  });
}
$(".test-title").css( { marginLeft : (0.185048113 * $(window).width()) } );
console.log($(window).width());
document.addEventListener("click", printMousePos);
