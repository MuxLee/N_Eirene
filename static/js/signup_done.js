$(document).ready(function () {
    var getHtmlW = $('html').width();
    var getHtmlH = $('html').height();
    var getSignupDoneW = $('#signup_done').width();
    var getSignupDoneH = $('#signup_done').height();
    $('#signup_done').css('left', (getHtmlW / 2) - (getSignupDoneW / 2));
    $('#signup_done').css('top', (getHtmlH / 2) - (getSignupDoneH / 2));
    $('#signup_done').fadeIn(600);
});
