$(document).ready(function () {
    var getHtmlW = $('html').width();
    var getHtmlH = $('html').height();
    var getSignupW = $('#signup').width();
    var getSignupH = $('#signup').height();
    $('#signup').css('left', (getHtmlW / 2) - (getSignupW / 2));
    $('#signup').css('top', (getHtmlH / 2) - (getSignupH / 2));
    $('#signup').fadeIn(600);

    var getFormDivW = $('#signup_form_div').width();
    var getLabelFieldDivW = $('.label_field_div').width();
    $('#signup_form_div').css('left', (getSignupW / 2) - (getFormDivW / 2));
    $('.label_field_div').css('left', (getFormDivW / 2) - (getLabelFieldDivW / 2));
});
