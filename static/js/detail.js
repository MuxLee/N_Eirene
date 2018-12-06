$(document).ready(function () {
    var getContentSize = $('#content').width();
    var getFreeBoard_divSize = $('#free_board_detail_div').width();
    $('#free_board_detail_div').css('left', (getContentSize / 2) - (getFreeBoard_divSize / 2));

    //
    var getDetailContentWidth = $('#detail_content').width();
    var getP_Height = $('#detail_content > p').height();
    var getContentHeight = $('#content').height();
    $('#detail_content').css('left', (getFreeBoard_divSize / 2) - (getDetailContentWidth / 2));

    var getFreeBoard_contentWidth = $('#free_board_detail_content').width();
    var getFreeBoard_contentHeight = $('#free_board_detail_content').height();
    var getDetailContentHeight = $('#detail_content').height();
    $('#free_board_detail_content').css('left', (getContentSize / 2) - (getFreeBoard_contentWidth / 2));
    if (getP_Height >= getDetailContentHeight) {
        $('#detail_content').css('height', 'auto');
    }
    var getreDetailContentHeight = $('#detail_content').height();
    if (getFreeBoard_contentHeight <= getreDetailContentHeight) {
        $('#free_board_detail_content').css('height', getreDetailContentHeight + 100);
    }
    var getfreeBoard = $('#free_board_detail_content').height();
    var getCommentH = $('#comment').height();
    var getMiniBoardH = $('#mini_board').height();
    $('#content').css('height', (getfreeBoard + getCommentH + getMiniBoardH) + 500);

    var getD_Content = $('#detail_content').height()
    $('#next_prev_button').css('top', getD_Content + 30);
    $('#next_prev_button').css('left', getDetailContentWidth - 50);

    var getComment = $('#comment').width();
    $('#comment').css('left', (getContentSize / 2) - (getComment / 2));

    var getMiniBoard = $('#mini_board').width();
    var getMiniBoardH = $('#mini_board').height();
    $('#mini_board').css('left', (getContentSize / 2) - (getMiniBoard / 2));

    var getMiniList = $('#mini_list').width();
    var getMiniListH = $('#mini_list').height();
    $('#mini_list').css('left', (getMiniBoard / 2) - (getMiniList / 2));
    $('#mini_list').css('top', (getMiniBoardH / 2) - (getMiniListH / 2));

    var getMiniTable = $('#mini_table').width();
    var getMiniTableH = $('#mini_table').height();
    $('#mini_table').css('left', (getMiniList / 2) - (getMiniTable / 2));
    $('#mini_table').css('top', (getMiniListH / 2) - (getMiniTableH / 2));
});
