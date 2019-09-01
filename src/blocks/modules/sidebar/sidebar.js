import $ from 'jquery';

'use strict';

$('.sidebar__colors .custom-control').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});