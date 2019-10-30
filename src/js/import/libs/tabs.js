import $ from "jquery";

$(function () {

    "use strict";

    // Tabs
    const tab = $('.tabs-link');
    const tab2 = $('.tabs-2-link');
    const tabLink = '.tabs-link';
    const tabLink2 = '.tabs-2-link';
    const tabContent = '.tabs-content';
    const tabContent2 = '.tabs-2-content';

    tab.on('click', function (e) {
        e.preventDefault();

        let thisTab = $(this).attr('aria-labelledby');
        let thisContent = $(this).attr('data-target');

        $(thisContent + ' ' + tabLink).removeClass('active');
        $(thisContent + ' ' + tabContent).removeClass('active');
        $(this).addClass('active');
        $(thisContent + ' ' + thisTab).addClass('active');
    });

    tab2.on('click', function (e) {
        e.preventDefault();

        let thisTab = $(this).attr('aria-labelledby');
        let thisContent = $(this).attr('data-target');

        if (!$(this).hasClass('active')) {
            $(thisContent + ' ' + tabLink2).removeClass('active');
        }
        $(this).toggleClass('active');

        if (!$(thisContent + ' ' + thisTab).hasClass('active')) {
            $(thisContent + ' ' + tabContent2).removeClass('active');
        }
        $(thisContent + ' ' + thisTab).toggleClass('active');
    });

});