import wNumb from 'wnumb';
import noUiSlider from 'nouislider';

'use strict';

// Range slider noUiSlider  https://refreshless.com/nouislider/
const rangeSlider = document.getElementById('range'),
    rangeValueOne = $('#range-value-1'),
    rangeValueTwo = $('#range-value-2');

noUiSlider.create(rangeSlider, {
    start: [10000, 40000],
    connect: true,
    step: 10,
    range: {
        'min': 0,
        'max': 50000
    },
    format: wNumb({
        decimals: 0,
    })
});

rangeSlider.noUiSlider.on('update', function( values, handle ) {
    rangeValueOne.val(values[0]);
    rangeValueTwo.val(values[1]);
});

rangeValueOne.on('change', function () {
    rangeSlider.noUiSlider.set([this.value, null]);
});
rangeValueTwo.on('change', function () {
    rangeSlider.noUiSlider.set([null, this.value]);
});