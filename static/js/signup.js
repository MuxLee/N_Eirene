$(document).ready(function () {
    var getSignWindowW = $(window).width();
    var getSignWindowH = $(window).height();
    var getSignupW = $('#signup').width();
    var getSignupH = $('#signup').height();
    $('#signup').css('left', (getSignWindowW / 2) - (getSignupW / 2));
    $('#signup').css('top', (getSignWindowH / 2) - (getSignupH / 2));
    $('#signup').css('height', getSignupH);
    $('#signup').fadeIn(600);
    $(window).resize(function () {
        var getSignWindowW = $(window).width();
        var getSignWindowH = $(window).height();
        var getSignupW = $('#signup').width();
        var getSignupH = $('#signup').height();
        $('#signup').css('left', (getSignWindowW / 2) - (getSignupW / 2));
        $('#signup').css('top', (getSignWindowH / 2) - (getSignupH / 2));
        $('#signup').css('height', getSignupH);
        if (getSignWindowW <= 750) {
            $('#signup').fadeIn(600);
        }
    });
    var getFormDivW = $('#signup_form_div').width();
    var getLabelFieldDivW = $('.label_field_div').width();
    $('#signup_form_div').css('left', (getSignupW / 2) - (getFormDivW / 2));
    $('.label_field_div').css('left', (getFormDivW / 2) - (getLabelFieldDivW / 2));
});
