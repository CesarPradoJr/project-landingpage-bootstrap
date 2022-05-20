$('#menu-collapse').on('show.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');
});

$('#menu-collapse').on('hide.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});