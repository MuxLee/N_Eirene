$(document).ready(function () {
    $('html').css('width', $(window).width());
    $(window).resize(function () {
        $('html').css('width', $(window).width());
    });
    var getHtmlH = $('html').height();
    var getScreenW = screen.availWidth;
    var getLoginDivW = $('#login_div').width();
    $('#login_div').css('left', (getScreenW / 2) - (getLoginDivW / 2));
    $('#login_div').css('top', (getHtmlH / 2) - 257.594);
    $('#login_div').fadeIn(600);
});
