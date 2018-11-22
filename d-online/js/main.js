$(function() {
	
	$('#for-you .items li').matchHeight();
	$('#video-stream iframe').matchHeight();
	$('#title-stream .img, #title-stream .text').matchHeight();
	
	$(".fancybox").fancybox();
	$.extend($.fancybox.defaults, {
		padding: 0,
		margin: 0
	});
	
	smoothScroll.init({
		updateURL: 0,
	});
	
	//Таймер
	$('.count span').countdown({
		until: new Date(2017, 7-1, 28, 23, 59),
		timezone: 3,
		padZeroes: true,
		format: 'DHMS',
		alwaysExpire: true
	});
	
	$('#plan-2 .days-text').each(function() {
	  	$(this).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true,
			adaptiveHeight: true,
			customPaging : function(slider, i) {
				var title = $(slider.$slides[i]).find('.polygon').text();
				return title;
			},
			appendDots: $(this).siblings('.days')
		});
    });
	
});