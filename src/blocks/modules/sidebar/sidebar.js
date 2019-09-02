import $ from 'jquery';
import '../../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';

'use strict';

// Toggle class 'active' for Sidebar Colors icon.
$('.sidebar__colors .custom-control').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

// Custom Scrollbar
(function($){
    $(window).on("load",function(){
        $(".sidebar__check_list").mCustomScrollbar({
            theme:"dark-3"
        });
    });
})(jQuery);

// Show/hide hidden content for Reviews Card
$('.sidebar__reviews_list_card_footer_link').on('click', function(e){
    e.preventDefault();
    const postId = $(this).attr('href');
    const text = $(this).text();

    if (text == 'Подробнее') {
        $(this).text('Скрыть');
    } else {
        $(this).text('Подробнее');
    }

    $(postId).fadeToggle();
});

// Show/hide hidden content for Reviews List
$('.sidebar__reviews_watch-all_link').on('click', function(e){
    e.preventDefault();
    const postId = $(this).attr('href');
    const text = $(this).text();

    if (text == 'Показать все') {
        $(this).text('Скрыть');
    } else {
        $(this).text('Показать все');
    }

    $(postId).fadeToggle();
});