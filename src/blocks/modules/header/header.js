import $ from  'jquery';

'use strict';

$('.header__bot_catalog_link').on('click', function (e) {
    e.preventDefault();
    $('.header__bot_catalog_list').slideToggle();
});