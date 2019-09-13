import $ from 'jquery';
'use strict';

$('.modal-card').on('shown.bs.modal', function (e) {
    $('.commodity__slider').slick('reinit');
    $('.commodity__slider_small').slick('reinit');
});