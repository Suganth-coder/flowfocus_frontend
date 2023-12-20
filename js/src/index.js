$(document).ready(function() {

    $('.continue').hide();
    var ProgressBar = require('progressbar.js');
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: 3600000,
        color: 'rgb(83,179,242)',
        trailColor: '#D5E6FA',
        trailWidth: 11,
        svgStyle: null
    });


    console.log('testing');

    $('#runner').runner();

    $('.start').click(function() {
        $('#runner').runner('start');
        bar.animate(1.0);
        $('.start').hide();
        $('.continue').show();

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