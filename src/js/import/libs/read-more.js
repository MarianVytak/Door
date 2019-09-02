import $ from 'jquery';

'use strict';

$('.js-read-more').on('click', function(e){
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