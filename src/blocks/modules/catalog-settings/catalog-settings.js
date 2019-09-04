import $ from 'jquery';

'use strict';

const viewLink = $('.catalog-settings__view_link');

viewLink.on('click', function (e) {
    e.preventDefault();
    viewLink.removeClass('active');
    $(this).addClass('active');
});