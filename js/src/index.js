$(document).ready(function() {


    /*

     *** Clock Functionalites ****

        i.  Progress Bar Circle
        ii. Start/ Stop/ Pause/ Continue  Stopwatch Functionalities
     
     */
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 9,
        duration: 10000,
        from: { color: '#54B4F3' },
        to: { color: '#418DEC' },
        step: function(state, bar, attachment) {
            bar.path.setAttribute('stroke', state.color);
            //TODO: reset when it comes to 1
        },
        trailColor: '#D5E6FA',
        trailWidth: 9,
        svgStyle: null
    });

    $('#runner').runner({
        milliseconds: false,
        format: function(s, so) {
            var t = parseInt(s);
            var hour = Math.floor(t / 3600000);
            t = t - hour * 3600000;
            var min = Math.floor(t / 60000);
            t = t - min * 60000;
            var sec = Math.floor(t / 1000);
            t = t - sec * 1000;


            if (hour < 10) {
                hour = "0" + hour;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (t < 10) {
                t = "00" + t;
            } else if (t < 100) {
                t = "0" + t;
            }

            return hour + ":" + min + ":" + sec;

        }

    });

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

    $('.stop-div').delegate('.stop', 'click', function() {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    })


})