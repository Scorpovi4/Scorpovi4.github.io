$(window).on('load', function () {
    console.log('gg');
    $('.js-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
});
