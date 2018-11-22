$(function() {

	$(".fancybox").fancybox();
	$.extend($.fancybox.defaults, {
		padding: 0,
		margin: 0
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
	
	/*$('#plan-2 .days li').on('mouseover', function() {
		$(this).parents('.block').find('.days-text').slick('goTo', $(this).index());
	});*/
	
	smoothScroll.init({
		updateURL: 0,
		offset: 0
	});
	
	
	
	
});