$(document).ready(function () {
    var getHtmlW = $('html').width();
    var getHtmlH = $('html').height();
    var getLoginW = $('#login').width();
    var getLoginH = $('#login').height();
    $('#login').css('left', (getHtmlW / 2) - (getLoginW / 2));
    $('#login').css('top', (getHtmlH / 2) - (getLoginH / 2));
    $('#login').fadeIn(600);

    var getLoginForm = $('#login_form').width();
    $('#login_form').css('left', (getLoginW / 2) - (getLoginForm / 2));

    //
    $('label').addClass('label_class');
    $('label').eq(0).text('ID').css('color', '#65BAFB');
    $('label').eq(1).text('PW').css('color', '#FB9565');
});
