$(document).ready(function() {

    $('.continue').hide();
    var ProgressBar = require('progressbar.js');
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 11,
        easing: 'easeInOut',
        duration: 3600,
        color: "#418DEC",
        trailColor: '#D5E6FA',
        trailWidth: 11,
        svgStyle: null
    });


    $('#runner').runner();

    $('.start').click(function() {
        $('#runner').runner('start');
        bar.animate(1.0);
        // $('.start').hide();
        // $('.continue').show();

    })

    $('.continue').click(function() {
        $('#runner').runner('start');
        bar.resume();
    })

    $('.stop').click(function() {
        $('#runner').runner('stop');
        bar.pause();
    })

    $('.reset').click(function() {
        $('#runner').runner('reset');
        bar.set(0.0);
        $('.start').show();
        $('.continue').hide();
    })
})