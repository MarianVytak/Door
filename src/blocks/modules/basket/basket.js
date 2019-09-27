import $ from 'jquery';

'use strict';

$('.basket__sidebar_coupon_link').on('click', function (e) {
    e.preventDefault();
    $('.basket__sidebar_coupon').fadeToggle();
});

const basketPaymentLink = $('.basket__payment_link');
const basketPaymentContent = $('.basket__payment_content');
basketPaymentLink.on('click', function () {
    basketPaymentContent.removeClass('active');
    let thisBasketPaymentContent = $(this).attr('data-target');
    $(thisBasketPaymentContent).addClass('active');
});
const basketPaymentLinkChild = $('.basket__payment_link_child');
const basketPaymentContentChild = $('.basket__payment_content_child');
basketPaymentLinkChild.on('click', function () {
    basketPaymentContentChild.removeClass('active');
    let thisBasketPaymentContentChild = $(this).attr('data-target');
    $(thisBasketPaymentContentChild).addClass('active');
});