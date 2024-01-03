import Cookies from 'js-cookie';
import load_theme from './theme.js';
import custom_break from './custom-break.js';
/*

Cookies info

1. cth (current theme)
    * ocean shade (os)
    * forest green (fg)

2. ccs (current clock state)
    * flow  --> 200
    * break --> 400

3. cst (current selected task)
    * task_id (int)

4. fflow (from flow by using stop button) --> for break checking
   * true  --> 200
   * false --> 400

*/
$(document).ready(function() {

    if (Cookies.get('cth') == undefined)
        Cookies.set('cth', 'os');

    if (Cookies.get('ccs') == undefined)
        Cookies.set('ccs', 200);

    if (Cookies.get('ift') == undefined)
        Cookies.set('ift', 200)

    $('#report_log').hide();

    /*

     *** Clock Functionalites ****

        i.  Progress Bar Circle
        ii. Start/ Stop/ Pause/ Continue  Stopwatch Functionalities
     
     */
    var bar = new ProgressBar.Circle(".clockcontainer", {
        strokeWidth: 9,
        duration: 3600000 * 5,
        step: function(state, bar, attachment) {
            bar.path.setAttribute('stroke', state.color);
            //TODO: reset when it comes to 1 as of now, bar value is set to 5.0
        },
        trailColor: '#D5E6FA',
        trailWidth: 9,
        svgStyle: null
    });

    let runner_config = {
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

    };

    $('#runner').runner(runner_config);

    $('.start-div').delegate('.start', 'click', function() {

        $(this).uiSound({
            play: "beat-click"
        });

        let ccs = String(Cookies.get('ccs'));

        if (ccs == "200") {

            bar.animate(5.0, {
                from: { color: '#54B4F3' },
                to: { color: '#418DEC' }
            });

        } else {

            bar.animate(-0.0, {
                duration: runner_config.startAt,
                from: {
                    color: '#FF5454'
                },
                to: { color: '#ff4f4f' },
                step: function(state, circle, attachment) {

                    circle.path.setAttribute('stroke', state.color);

                }
            });
        }

        $('#runner').runner('start');
        $('.pause-reset').removeClass('d-none');
        $('.start-div').css({ "opacity": 0.0, "pointer-events": "none" });

        if ($(".pause-continue-img").attr("src") != "./assets/image/pause.svg") {
            $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
            $('.continue').removeClass("continue").addClass("pause");

        }

    })

    $('.pause-reset').delegate('.continue', 'click', function() {

        $(this).uiSound({
            play: "keyup"
        });

        $('#runner').runner('start');
        bar.resume();

        // changing continue to pause
        $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
        $('.continue').removeClass("continue").addClass("pause");

    })


    $('.pause-reset').delegate('.pause', 'click', function() {

        $(this).uiSound({
            play: "keyup"
        });

        $('#runner').runner('stop');
        bar.pause();

        if (String(Cookies.get('ccs', 400)) == '400')
            $(".pause-continue-img").attr("src", "./assets/image/start-red.svg");

        else {

            let cth = Cookies.get('cth');

            if (cth != "os")
                src = (cth == "fs") ? "./assets/image/start-green.svg" : "./assets/image/start-yellow.svg";
            else
                $(".pause-continue-img").attr("src", "./assets/image/start.svg");

        }

        $('.pause').removeClass("pause").addClass("continue");

    })

    $('.pause-reset').delegate('.reset', 'click', function() {
        // TODO: to show blur dialogue box
        $('#runner').runner('reset', true);
        bar.set(0.0);
        $('.start-div').css({ "opacity": 1.0, "pointer-events": "auto" });
        $('.pause-reset').addClass('d-none');

    })

    // runner finished
    $('#runner').on('runnerFinish', function() {

        if (String(Cookies.get('ccs')) == '400') {
            $(this).uiSound({
                play: "finished"
            });

            $(document).trigger('stopclockclick', ['200']);
        }

    });

    // flow-break change event
    $(document).on('flowbreakchange', function(event, countdown = null) {

        if ($('.clock-toggle-inp').is(':checked')) {
            Cookies.set('ccs', 400);

            runner_config.countdown = true;
            runner_config.startAt = (countdown == null) ? 300000 : parseInt(countdown);
            runner_config.stopAt = 0;

            bar.set(1.0);
            $('#runner').runner(runner_config);
            $(document).prop('title', 'BreakTime 💔');


        } else {
            Cookies.set('ccs', 200);

            bar.set(0);
            runner_config.countdown = false;
            runner_config.startAt = 0;
            runner_config.stopAt = null;
            $('#runner').runner(runner_config);
            $(document).prop('title', 'FlowTime 💧');

        }


        load_theme();

    });

    // toggle change
    $('.clock-toggle-inp').on('change', function() {

        $(this).uiSound({
            play: "error"
        });

        if ($('#runner').runner('info').running == true) {
            Swal.fire({
                customClass: {
                    popup: 'popup-text-color',
                },
                title: 'Switch?',
                text: (String(Cookies.get('ccs')) == '200') ? "Do you wanna switch to break?" : "Do you wanna switch to flow?",
                icon: 'warning',
                confirmButtonText: 'okay',
                showCancelButton: true
            }).then((result) => {
                if (result.isDismissed) {
                    if (($('.clock-toggle-inp').is(':checked')))
                        $('.clock-toggle-inp').prop('checked', false);

                    else
                        $('.clock-toggle-inp').prop('checked', true);

                } else if (result.isConfirmed) {

                    if ($('.clock-toggle-inp').is(':checked')) {
                        Cookies.set('fflow', 400)
                    }
                    $('.reset').trigger('click');
                    $(document).trigger('flowbreakchange');

                }
            });
        } else {

            Cookies.set('fflow', 400);
            $(document).trigger('flowbreakchange');


        }

    })


    if (String(Cookies.get('ccs')) != '200')
        $('.clock-toggle-inp').prop('checked', true);

    else
        $('.clock-toggle-inp').prop('checked', false);

    $(document).trigger('flowbreakchange');

    // custom break logic
    custom_break();


    // theme change
    $('.theme-change').click(function() {
        /*
            change the text() of theme-value \n
        */
        let theme = $(this).attr('theme');
        Cookies.set('cth', theme);

        if (String(Cookies.get('ccs')) != '200') {
            Swal.fire({
                customClass: {
                    popup: 'popup-text-color',
                    confirmButton: 'popup-default-confirm'
                },
                title: 'Back to Flow!',
                text: "Go back to flow state to see the theme effect",
                icon: 'info',
                confirmButtonText: 'okay',
                didOpen: () => {
                    $(this).uiSound({
                        play: "warning"
                    });
                }
            });
        }
        load_theme();
    });

    // login btn
    $('.login-btn').click(function() {
        Swal.fire({
            customClass: {
                popup: 'popup-text-color',
                confirmButton: 'popup-default-confirm'
            },
            title: "Will be Soon!",
            text: "You can use our beta version without login functionality.",
            icon: "info"
        });
    });

    // notification click
    $('.notification').click(function() {
        Swal.fire({
            customClass: {
                popup: 'popup-text-color',
                confirmButton: 'popup-default-confirm'
            },
            title: "No Notification!",
            text: "We will notify if any :)",
            icon: "info"
        });
    })

    // loading 
    window.onload = function() {
        $('.page-loader').hide();
    }
});