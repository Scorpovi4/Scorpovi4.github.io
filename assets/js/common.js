$(window).on('load', function () {
    console.log('gg');
    $('.js-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
