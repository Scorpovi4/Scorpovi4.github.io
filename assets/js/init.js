$(document).ready(function() {
	$('[data-slick]').slick();

	$('.js-tab').on('click', function (e) {
		e.preventDefault();
		const href = $(this).attr('href'),
			  	whole = $('[data-tabContent]');

			  $('.js-tab').each(function (i, el) {
				$(el).removeClass('active-tab');
				$(el).addClass('active');
				$(el).prop("disabled", false);
			  });
			  $(this).prop( "disabled", true );
			  $(this).removeClass('active');
			  $(this).addClass('active-tab');

				whole.each(function(i, el) {
					value = $(el).attr('data-tabContent');
					$(el).slideUp(700);
					if (href === value) {
						$(el).slideDown(700);
					}
				});
	});

	setTimeout(function () {
		$('body').addClass('show-page');
	}, 400);

	if($('.double-slider').length > 0) {
		$('.double-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.double-slider-nav'
		  });
		  $('.double-slider-nav').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.double-slider',
				dots: false,
				focusOnSelect: true,
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}

	new WOW().init();

	function appear (el, delay = 500) {
		const childWidth = $(el).width(),
				childHeight = $(el).height(),
				parent = $(el).parent(),
				parentWidth = parent.width();

		$(el).css({
			width: 0,
			height: childHeight,
			overflow: 'hidden'
		});

		parent.css({
			background: '#fff',
			width: 0,
			overflow: 'hidden'
		});
		
		parent.animate({
			width: parentWidth,
		}, 1000, 'easeInQuart', function() {
			setTimeout(function() {
				$(el).animate({
					width: childWidth,
					overflow: 'auto'
				}, 400, 'easeInQuart', function() {
					parent.css({
						background: 'none',
						width: 'auto',
					});
					$(el).css({
						width: 'auto',
						height: 'auto',
						overflow: 'hidden'
					});
				});
			}, delay);
		} );
	}

	$('.js-animation').each(function (i, el) {
		
		if ($(el).hasClass('appear')) {
			appear(el);
		}

	});

})