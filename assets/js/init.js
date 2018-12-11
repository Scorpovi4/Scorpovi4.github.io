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
					$(el).slideUp();
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

	function appear (el) {
		const containerWidth = $(el).outerWidth(),
			  containerHeight = $(el).outerHeight(),
			  child = $(el).find('.child'),
			  childWidth = child.width();

		$(el).css({
			width: 0,
			height: containerHeight,
			background: '#fff',
			overflow: 'hidden'
		});

		child.css({
			width: 0,
			overflow: 'hidden'
		});

		$(el).animate({
			width: containerWidth
		}, 1200, 'easeInQuart', function () {
			child.animate({
				width: childWidth
			}, 500, 'easeInQuart', function() {
				$(el).css({
					width: 'auto',
					height: 'auto',
					background: 'none',
					overflow: 'inherit'
				});
				child.css({
					width: 'auto',
					overflow: 'inherit'
				});
			});
		});
	}

	$('.js-animation').each(function (i, el) {
		
		if ($(el).hasClass('appear')) {
			appear(el);
		}

	});

})