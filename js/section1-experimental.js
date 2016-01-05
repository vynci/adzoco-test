
$(document).ready(function(){/* activate scrollspy menu */

	if($(window).width() > 768){
		$(".test-title").css( { marginLeft : (0.185048113 * $(window).width()) } );
		$("#mobile-view").hide();
		$("#desktop-view").show();
	} else {
		$("#mobile-view").show();
		$("#desktop-view").hide();
	}

	$('#section1').css({
		'background-size'  : $(window).width()
	});

	$('.resize-drag-mobile').css({
		'background-size'  : $(window).width()
	});

	$('.resize-drag').css({
		'background-size'  : $(window).width()
	});

	interact('.resize-drag')
	.resizable({
		preserveAspectRatio: false,
		edges: { left: false, right: true, bottom: false, top: false }
	})
	.on('resizemove', function (event) {
		var target = event.target,

		x = (parseFloat(target.getAttribute('data-x')) || 0),
		y = (parseFloat(target.getAttribute('data-y')) || 0);

		// update the element's style
		target.style.width  = event.rect.width + 'px';

		// translate when resizing from top or left edges
		x += event.deltaRect.left;

		target.style.webkitTransform = target.style.transform =
		'translate(' + x + 'px,' + y + 'px)';

		target.setAttribute('data-x', x);
		// target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
	});

	interact('.resize-drag-mobile')
	.resizable({
		preserveAspectRatio: false,
		edges: { left: false, right: true, bottom: false, top: false }
	})
	.on('resizemove', function (event) {
		var target = event.target,

		x = (parseFloat(target.getAttribute('data-x')) || 0),
		y = (parseFloat(target.getAttribute('data-y')) || 0);

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

		$('#resize-content-mobile').animate({
			width: cursorX,
		}, 1000, function() {
			// Animation complete.
		});
	}

	function touchStart(e){
		console.log(e);
		var cursorX = e.originalEvent.changedTouches[0].clientX;


		$('#resize-content').animate({
			width: cursorX,
		}, 1000, function() {
			// Animation complete.
		});

		$('#resize-content-mobile').animate({
			width: cursorX,
		}, 1000, function() {
			// Animation complete.
		});
	}

	function touchMove(){
		console.log('move!');
		// $(document).scrollTop($("#section2").offset().top);
		$('html, body').animate({
			scrollTop: $("#pre-section").offset().top
		}, 2000);
	}

	$('#resize-content').animate({
		width: ($(window).width()/2),
	}, 1500, function() {
		// Animation complete.
	});

	$('#resize-content-mobile').animate({
		width: ($(window).width()/1.875),
	}, 1500, function() {
		// Animation complete.
	});



	var startX,
	startY,
	tap;

	function getCoord(e, c) {
		return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
	}

	function setTap() {
		tap = true;
		setTimeout(function () {
			tap = false;
		}, 500);
	}

	$('#section1').on('touchstart', function (ev) {
		startX = getCoord(ev, 'X');
		startY = getCoord(ev, 'Y');
	}).on('touchend', function (ev) {
		// If movement is less than 20px, execute the handler
		if ( Math.abs(getCoord(ev, 'Y') - startY) < 20) {
			// Prevent emulated mouse events
			ev.preventDefault();
			touchStart(ev);
		} else {
			//touchMove();
		}
		setTap();
	}).on('click', function (ev) {
		if (!tap) {
			// If handler was not called on touchend, call it on click;
			printMousePos(ev);
		}
		ev.preventDefault();
	});

});
