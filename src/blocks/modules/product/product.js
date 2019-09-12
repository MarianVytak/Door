import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

'use strict';

$('.commodity__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.commodity__slider_small'
});
$('.commodity__slider_small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.commodity__slider',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true
});