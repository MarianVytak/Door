import $ from 'jquery';
import '../../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';

'use strict';

$('.sidebar__colors .custom-control').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

(function($){
    $(window).on("load",function(){
        $(".sidebar__check_list").mCustomScrollbar({
            theme:"dark-3"
        });
    });
})(jQuery);