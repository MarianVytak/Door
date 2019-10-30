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
});

$('.commodity__doors_mobile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    infinite: false
});

$('.commodity__choice').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    infinite: false,
});

const commodityDoorsLink = $('.commodity__doors_item');
const commodityDoorsContent = $('.commodity__slider_2 > .commodity__slider_item');
commodityDoorsLink.on('click', function (e) {
    e.preventDefault();
    commodityDoorsLink.removeClass('active');
    $(this).addClass('active');
    let commodityDoorsContentThis = $(this).attr('data-target');
    commodityDoorsContent.removeClass('active');
    $(commodityDoorsContentThis).addClass('active');
});

// Show/hide hidden content for Reviews List
$('.commodity__add_link .link').on('click', function(e){
    e.preventDefault();
    const postId = $(this).attr('href');
    const text = $(this).text();

    if (text == 'Показать все') {
        $(this).text('Скрыть');
    } else {
        $(this).text('Показать все');
    }

    $(postId).toggleClass('hide');
});

// Card 4 colors
const colorItem = $('.commodity__color_list_item');
colorItem.on('click', function (e) {
    e.preventDefault();
    let colorItemThis = $(this).attr('data-class');
    $(colorItemThis).removeClass('active');
    $(this).addClass('active');
    let thisColorItemName = $(this).children('.commodity__color_list_item_name').text();
    let colorInput = $(this).attr('data-id');
    $(colorInput).children('input').attr('placeholder', thisColorItemName);
});

$('.commodity__execution_deaf').on('click', function () {
    $('.commodity__execution_glass_content').removeClass('active');
    $('.commodity__door_glass_options').removeClass('active');
    $('.commodity__door_glass_lattice').removeClass('active');
});
$('.commodity__execution_glass').on('click', function () {
    $('.commodity__execution_glass_content').addClass('active');
});

// Custom Scrollbar
(function($){
    $(window).on("load",function(){
        $(".custom-scrollbar").mCustomScrollbar({
            theme:"dark-3"
        });
    });
})(jQuery);