import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

'use strict';

$('.cooperation__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});