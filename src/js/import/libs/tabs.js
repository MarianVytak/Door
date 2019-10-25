import $ from "jquery";

$(function () {

    "use strict";

    // Tabs
    const tab = $('.tabs-link');
    const tab2 = $('.tabs-2-link');
    const tabLink = '.tabs-link';
    const tabLink2 = '.tabs-2-link';
    const tabContent = '.tabs-content';

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

        // $(thisContent + ' ' + tabLink2).removeClass('active');
        $(thisContent + ' ' + tabContent).removeClass('active');
        if (!$(this).hasClass('active')) {
            $(thisContent + ' ' + tabLink2).removeClass('active');
        }
        $(this).toggleClass('active');
        $(thisContent + ' ' + thisTab).addClass('active');
    });

});