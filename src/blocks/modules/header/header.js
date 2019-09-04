import $ from  'jquery';

'use strict';

// const catalogLink = $('.header__bot_catalog_link');
// const catalogList = $('.header__bot_catalog_list');
const catalogContentLink = $('.header__bot_catalog_list_item_link');
const catalogContentList = $('.header__bot_catalog_list_item_content');

// Відкрити/закрити каталог товарів у Header
// catalogLink.on('click', function (e) {
//     e.preventDefault();
//     catalogList.slideToggle();
//     catalogContentLink.removeClass('active');
//     catalogContentList.slideUp();
//     catalogContentList.removeClass('active');
// });

// Відкрити/закрити боковий список у Каталозі Товарів
catalogContentLink.on('click', function (e) {
    e.preventDefault();
    let catalogContentListThis = $(this).attr('href');

    if (!$(this).hasClass('active')) {
        catalogContentLink.removeClass('active');
    }
    $(this).toggleClass('active');

    if (!$(catalogContentListThis).hasClass('active')) {
        catalogContentList.slideUp();
        catalogContentList.removeClass('active');
    }
    $(catalogContentListThis).slideToggle();
    $(catalogContentListThis).toggleClass('active');
});