$(document).ready(function() {

    var ProgressBar = require('progressbar.js');
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 11,
        easing: 'easeInOut',
        duration: 6000,
        color: "#418DEC",
        trailColor: '#D5E6FA',
        trailWidth: 11,
        svgStyle: null
    });


    $('#runner').runner();

    $('.start-div').delegate('.start', 'click', function() {
        $('#runner').runner('start');
        bar.animate(1.0);
        $('.pause-reset').removeClass('d-none');
        $('.start-div').css({ "opacity": 0.0, "pointer-events": "none" });

        if ($(".pause-continue-img").attr("src") != "./assets/image/pause.svg") {
            $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
            $('.continue').removeClass("continue").addClass("pause");

        }

    })

    $('.pause-reset').delegate('.continue', 'click', function() {
        $('#runner').runner('start');
        bar.resume();

        // changing continue to pause
        $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
        $('.continue').removeClass("continue").addClass("pause");

    })


    $('.pause-reset').delegate('.pause', 'click', function() {
        $('#runner').runner('stop');
        bar.pause();

        // change pause to continue
        $(".pause-continue-img").attr("src", "./assets/image/start.svg");
        $('.pause').removeClass("pause").addClass("continue");

    })

    $('.pause-reset').delegate('.reset', 'click', function() {
        // TODO: to show blur dialogue box
        $('#runner').runner('reset', true);
        bar.set(0.0);
        $('.start-div').css({ "opacity": 1.0, "pointer-events": "auto" });
        $('.pause-reset').addClass('d-none');

    })
})