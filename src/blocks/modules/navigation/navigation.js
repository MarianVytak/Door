import $ from  'jquery';

'use strict';

const catalogContentLink = $('.js-navigation-link');
const catalogContentList = $('.navigation__list_item_content');

// Відкрити/закрити боковий список у Каталозі Товарів
catalogContentLink.on('click', function (e) {
    e.preventDefault();
    let catalogContentListThis = $(this).attr('data-target');

    // if (!$(this).hasClass('active')) {
    //     catalogContentLink.removeClass('active');
    // }
    $(this).toggleClass('active');

    // if (!$(catalogContentListThis).hasClass('active')) {
    //     catalogContentList.slideUp();
    //     catalogContentList.removeClass('active');
    // }
    $(catalogContentListThis).slideToggle();
    $(catalogContentListThis).toggleClass('active');
});