import $ from  'jquery';

'use strict';

const catalogContentLinkLvl_1 = $('.js-navigation-link');
const catalogContentLinkLvl_2 = $('.js-sub-navigation-link');
const catalogContentLinkLvl_3 = $('.js-sub2-navigation-link');
const catalogContentListLvl_1 = $('.navigation__list_item_content');
const catalogContentListLvl_2 = $('.navigation__list_item_sub_content');
const catalogContentListLvl_3 = $('.navigation__list_item_sub2_content');

// Відкрити/закрити боковий список у Каталозі Товарів
catalogContentLinkLvl_1.on('click', function (e) {
    e.preventDefault();
    let catalogContentListThis = $(this).attr('data-target');

    if (!$(this).hasClass('active')) {
        catalogContentLinkLvl_1.removeClass('active');
    }
    $(this).toggleClass('active');

    if (!$(catalogContentListThis).hasClass('active')) {
        catalogContentListLvl_1.slideUp();
        catalogContentListLvl_1.removeClass('active');
    }
    $(catalogContentListThis).slideToggle();
    $(catalogContentListThis).toggleClass('active');
});

catalogContentLinkLvl_2.on('click', function (e) {
    e.preventDefault();
    let catalogSubContentListThis = $(this).attr('data-target');

    if (!$(this).hasClass('active')) {
        catalogContentLinkLvl_2.removeClass('active');
    }
    $(this).toggleClass('active');

    if (!$(catalogSubContentListThis).hasClass('active')) {
        catalogContentListLvl_2.slideUp();
        catalogContentListLvl_2.removeClass('active');
    }
    $(catalogSubContentListThis).slideToggle();
    $(catalogSubContentListThis).toggleClass('active');
});

catalogContentLinkLvl_3.on('click', function (e) {
    e.preventDefault();
    let catalogSubContentListThis = $(this).attr('data-target');

    if (!$(this).hasClass('active')) {
        catalogContentLinkLvl_3.removeClass('active');
    }
    $(this).toggleClass('active');

    if (!$(catalogSubContentListThis).hasClass('active')) {
        catalogContentListLvl_3.slideUp();
        catalogContentListLvl_3.removeClass('active');
    }
    $(catalogSubContentListThis).slideToggle();
    $(catalogSubContentListThis).toggleClass('active');
});