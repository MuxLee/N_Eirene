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

    //
    var getUnLogin = $('#unlogin_div').width();
    var getUnLoginH = $('#unlogin_div').height();
    var getBodyWidth = $('body').width();
    var getBodyHeight = $('body').height();
    $('#unlogin_div').css('left', (getBodyWidth / 2) - (getUnLogin / 2));
    $('#unlogin_div').css('top', (getBodyHeight / 2) - (getUnLoginH / 2));

    // kakao
    // var firstImg = $('.imageblock:first-of-type img');
    // var content = "";
    // if (firstImg.attr("src")) {
    //     var firstImgSrc = firstImg.attr('src');
    //     var firstImgRatio = parseInt(firstImg.css('height')) / parseInt(firstImg.css('width'));
    //     if (firstImgRatio <= 0.27) var firstImgRatio = 0.27;
    // } else {
    //       var firstImgSrc = location.origin + '/favicon.ico';
    //       var firstImgRatio = 1;
    // }
    // kakao.init('e6f26aa3bd15becf15521cad6d4ddce7');
    // function sendLink() {
    //     kakao.Link.sendTalkLink({
    //         label:
    //             '[##_page_title_##]',
    //             image: {
    //                 src: firstImgSrc,
    //                 width: '300'
    //                 height: paresInt(300 * firstImgRatio)
    //             }
    //         webButton: {
    //             text: 'Eirene',
    //             url: document.URL
    //         }
    //     });
    // }

    var getWindowW = $(window).width();
    var getWindowH = $(window).height();
    var getTeamNameW = $('#Team_name').width();
    var getNameDeco = $('#name_deco').width();
    $('#open_close_menu, #search_nav').css('left', '93%');
    $('#Team_name').css('left', (getWindowW / 2) - (getTeamNameW / 2));
    $('#name_deco').css('left', (getWindowW / 2) + 100);
    if (getWindowW <= 500) {
        var getHeaderH = $('#header').height();
        $('#name_deco').css('left', (getWindowW / 2) + 70);
        $('#drop_down').css('top', getHeaderH);
        for (var count = 0; count < 3; count++) {
            if (count == 0)
                $('.drop_down_name').eq(count).text('J-US');
            else if (count == 1)
                $('.drop_down_name').eq(count).text('Makers');
            else if (count == 2)
                $('.drop_down_name').eq(count).text('Anointing');
        }
    }
    $('#m_open_close_menu').click(function () {
        $('#drop_down').fadeIn(600);
    });
    $('.list_value').eq(1).click(function () {
        $('.m_board_list_ul').eq(0).fadeIn(600);
        $('.m_board_list_ul').eq(1).css('display', 'none');
    });
    $('.list_value').eq(2).click(function () {
        $('.m_board_list_ul').eq(1).fadeIn(600);
        $('.m_board_list_ul').eq(0).css('display', 'none');
    });

    $(window).resize(function () {
          var getWindowW = $(window).width();
          var getWindowH = $(window).height();
          $('#Team_name').css('left', (getWindowW / 2) - (getTeamNameW / 2));
          $('#name_deco').css('left', (getWindowW / 2) + 100);
          if (getWindowW <= 1000) {
              $('#open_close_menu, #search_nav').css('left', '90%');
          }
    });
});
