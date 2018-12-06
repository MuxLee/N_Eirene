$(document).ready(function () {
    // open_close Event
    var Open_Close_Click = -1;
    $('#open_close_button').click(function () {
        if (Open_Close_Click == -1) {
            $('#header').fadeOut(200);
            $('#open_close_menu').animate({
                top: 0,
            }, function() {
                $('.open_close_button_line').css('background-color', '#FFFFFF');
            });
            Open_Close_Click = Open_Close_Click * -1;
        } else {
            $('#header').fadeIn(200);
            $('#open_close_menu').animate({
                top: 137,
            }, function() {
                $('.open_close_button_line').css('background-color', '#FFFFFF');
            });
            Open_Close_Click = Open_Close_Click * -1;
        }
    });
    // mobile version menu line 중앙 정렬
    var getMOPwidth = $('#m_open_close_menu').width();
    var getMenuLine = $('.m_open_close_button_line').width();
    $('.m_open_close_button_line').css('left', (getMOPwidth / 2) - (getMenuLine / 1.9));
    // var getHtmlHeight = $('html').width();
    // $('#content').css('height', getHtmlHeight);
});
