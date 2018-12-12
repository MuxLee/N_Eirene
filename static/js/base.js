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

    if (getWindowW <= 915) {
        $('#mobile_bottom_img').css('display', 'inline');
        $('#mobile_bottom_img').css('width', getWindowW);
    }

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
