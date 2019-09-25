import $ from 'jquery';

'use strict';

$('.basket__sidebar_coupon_link').on('click', function (e) {
    e.preventDefault();
    $('.basket__sidebar_coupon').fadeToggle();
});