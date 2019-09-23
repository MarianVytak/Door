import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';
import '../../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';

'use strict';

$('.commodity__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.commodity__slider_small',
    infinite: false
});
$('.commodity__slider_small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.commodity__slider',
    dots: false,
    centerMode: false,
    centerPadding: 0,
    focusOnSelect: true,
    infinite: false
});

$('.commodity__doors').slick({
    rows: 3,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
    fade: false,
    //infinite: false
});

// Custom Scrollbar
(function($){
    $(window).on("load",function(){
        $(".custom-scrollbar").mCustomScrollbar({
            theme:"dark-3"
        });
    });
})(jQuery);