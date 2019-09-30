import $ from  'jquery';

'use strict';

const catalogLink = $('.header__bot_catalog_link');
const catalogList = $('.header__bot_navigation_menu');

// Відкрити/закрити каталог товарів у Header
catalogLink.on('click', function (e) {
    e.preventDefault();
    catalogList.slideToggle();
});