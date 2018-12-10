$(document).ready(function () {
    var getHtmlW = $('html').width();
    var getHtmlH = $('html').height();
    var getLoginDivW = $('#login_div').width();
    $('#login_div').css('left', (getHtmlW / 2) - (getLoginDivW / 2));
    $('#login_div').css('top', (getHtmlH / 2) - 257.594);
    $('#login_div').fadeIn(600);
});
