/* 
	Author: Maurice Krijtenberg
*/
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
	
	$('#send').click(function (e) {
		e.preventDefault();
		
		var name    = $('#name').val();
		var email   = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		
		var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
		
		$.ajax({
			type: 'POST',
			url: 'send.php',
			data: dataString,
			success: function (html) {
				if (html == "OK") {
					alert("Thank you! You're message has been sent!");
					$('#reset').trigger('click');
				} else {
					alert(html);
				}	
			}
		});	
	});
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		padding: 0,
		margin: 50,
		maxHeight: 900,
		closeBtn: false,
		closeClick: true
	});
});
