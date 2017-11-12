$(document).ready(function($) {

	/* Phone mask */
	$('.input.input_phone input').mask('+7 (999) 999-99-99');
	
	$('.nav a').click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top - 50;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});
});