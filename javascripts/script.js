var accordionExpanded = false;

$(function () {

	$("#accordion").accordion({
		autoHeight: false,
		collapsible: true,
		active: false,
		change: function (event, ui) {
		
			// Animate logo?
			var active = $('#accordion').accordion('option', 'active');
			accordionExpanded = (active === false ? false : true);
			if (accordionExpanded === false) {
				$('#logo').animate({ marginTop: 10 }); // slide down
				$('#text').animate({ marginTop: 200 }); // slide down
			}
		}
	});
	
	$('.ui-accordion-header a').click(function () {
		if (!accordionExpanded) {
			$('#logo').animate({ marginTop: 0 }); // slide up
			$('#text').animate({ marginTop: 0 }); // slide up
			accordionExpanded = true;
		}
	});
})