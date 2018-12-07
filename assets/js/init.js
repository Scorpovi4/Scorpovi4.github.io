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

})