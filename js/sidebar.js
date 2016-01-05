
$(document).ready(function(){/* activate scrollspy menu */

	$('#blackOverlay').hide();

	$('#myNavmenu').on('hidden.bs.offcanvas', function (e) {
		$('#blackOverlay').hide();
	});

	$('#myNavmenu').on('show.bs.offcanvas', function (e) {
		$('#blackOverlay').show();
	});

});
