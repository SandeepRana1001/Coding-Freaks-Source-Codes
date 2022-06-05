$(document).ready(function($) {
	$("#toggler").click(function(event) {
		event.preventDefault();
		$(".sidebar").toggleClass('active');
	});	
});