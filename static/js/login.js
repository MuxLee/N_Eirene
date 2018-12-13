$(document).ready(function () {
    var getLogWindowW = $(window).width();
    var getLogWindowH = $(window).height();
    var getLoginW = $('#login').width();
    var getLoginH = $('#login').height();
    $('#login').css('left', (getLogWindowW / 2) - (getLoginW / 2));
    $('#login').css('top', (getLogWindowH / 2) - (getLoginH / 2));
    $('#login').css('width', getLoginH);
    $('#login').fadeIn(600);
    $(window).resize(function () {
        var getLogWindowW = $(window).width();
        var getLogWindowH = $(window).height();
        var getLoginW = $('#login').width();
        var getLoginH = $('#login').height();
        $('#login').css('left', (getLogWindowW / 2) - (getLoginW / 2));
        $('#login').css('top', (getLogWindowH / 2) - (getLoginH / 2));
        $('#login').css('width' getLoginH);
        if (getLogWindowW <= 750) {
            $('#login').fadeIn(600);
        }
    });
    $('.form-control').eq(0).click(function () {
        $('.form-control').eq(0).css('background', '#F3F3F3');
        $('.form-control').eq(1).css('background', '#FFFFFF');
    });
    $('.form-control').eq(1).click(function () {
        $('.form-control').eq(1).css('background', '#F3F3F3');
        $('.form-control').eq(0).css('background', '#FFFFFF');
    });
    //
    $('label').addClass('label_class');
    $('label').eq(0).text('ID').css('color', '#65BAFB');
    $('label').eq(1).text('PW').css('color', '#FB9565');
});
