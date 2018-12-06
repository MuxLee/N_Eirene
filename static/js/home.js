$(document).ready(function () {
    // base.css > imae_link Attribute display: inline 설정
    $('#image_link').css('display', 'block');

    var text_left = $('.link').width();
    var text_top = $('.link').height();
    var jus_text_width = $('#jus_text').width();
    var same_text_height = $('.image_hover_text').height();
    var makers_text_width = $('#makers_text').width();
    var anointing_text_width = $('#anointing_text').width();
    var getIphonePlusWidth = $('html').width();

    // image_hover_text image mobile 위치 구현
    if (getIphonePlusWidth <= 430) {
        $('#jus_text').css('left', (text_left / 2) - (jus_text_width / 2));
        $('#jus_text').css('top', (text_top / 2) - same_text_height / 2);
        $('#makers_text').css('left', (text_left / 2) - (makers_text_width / 2));
        $('#makers_text').css('top', (text_top / 2) - (same_text_height / 2));
        $('#anointing_text').css('left', (text_left / 2) - (anointing_text_width / 2));
        $('#anointing_text').css('top', (text_left / 2) - (anointing_text_width / 2));
    } else {
    // image_hover_text image 위치 구현
        $('#jus_text').css('left', (text_left / 2) - (jus_text_width / 2));
        $('#jus_text').css('top', (text_top / 2) - same_text_height / 2);
        $('#makers_text').css('left', ((text_left * 2) - (text_left / 2)) - (makers_text_width / 2));
        $('#makers_text').css('top', (text_top / 2) - same_text_height / 2);
        $('#anointing_text').css('left', ((text_left * 3) - (text_left / 2)) - (anointing_text_width / 2));
        $('#anointing_text').css('top', (text_top / 2) - same_text_height / 2);
    }
    // ???_link > text mobile 구현
    if (getIphonePlusWidth <= 430) {
        var getPhoneWidth = $('html').width();
        var image = $('.link');
        var image_count = 0;
        var max = image.length-1;

        setInterval(function () {
            if ($(image[image_count]).is(':animated')) return;
            $(image).eq(image_count).animate({'left': getPhoneWidth}, 800, function () {
                $(this).css({'left': -getPhoneWidth});
            });
            image_count++;
            if (image_count > max) image_count = 0;
            $(image[image_count]).animate({'left': '0px'}, 800);
        }, 2000);
      } else {
            // mouseOver & moustOut효과 구현
            $('#jus_link').mouseover(function () {
                $('#jus_text').fadeIn(600);
                $(this).css('opacity', '0.5');
            });
            $('#jus_link').mouseout(function () {
                $('#jus_text').fadeOut(100);
                $(this).css('opacity', '1.0');
            });
            $('#makers_link').mouseover(function () {
                $('#makers_text').fadeIn(600);
                $(this).css('opacity', '0.3');
            });
            $('#makers_link').mouseout(function () {
                $('#makers_text').fadeOut(100);
                $(this).css('opacity', '1.0');
            });
            $('#anointing_link').mouseover(function () {
                $('#anointing_text').fadeIn(600);
                $(this).css('opacity', '0.5');
            });
            $('#anointing_link').mouseout(function () {
                $('#anointing_text').fadeOut(100);
                $(this).css('opacity', '1.0');
            });
        }
      // free_board_div div 중앙 조절
      var getContentSize = $('#content').width();
      var getFreeBoard_divSize = $('#free_board_div').width();
      $('#free_board_div').css('left', (getContentSize / 2) - (getFreeBoard_divSize / 2));

      // page_ul UL 중앙 조절
      var getPageUl = $('#page_ul').width();
      if (getPhoneWidth <= 430) {
          $('#page_ul').css('left', (getPhoneWidth / 2) - (getPageUl / 2));
      } else {
            var getPaging = $('#paging').width();
            $('#page_ul').css('left', (getPaging / 2) - (getPageUl / 2));
      }
      // page_button LI 중앙 조절
      var getPageLi = $('.page_button').width();
      var PageButtonCount = $('.page_button').length;
      if (getPhoneWidth <= 430) {
          $('.page_button').css('left', (getPageUl / 2) - (getPageLi * PageButtonCount) / 2);
      } else {
            $('.page_button').css('left', (getPageUl / 2) - ((getPageLi * PageButtonCount) / 2));
      }
  });
