$(document).ready(function() {
    var ProgressBar = require('progressbar.js');
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(1.0); // Number from 0.0 to 1.0
})