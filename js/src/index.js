import Cookies from 'js-cookie';
import load_theme from './theme.js';
import custom_break from './custom-break.js';
import Timer from "../lib/easytimer.js";

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
function format_time(s) {
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

$(document).ready(function() {

    if (PROD)
        window.console.log = () => {};

    $('.page-loader').hide();
    // Cookies settings
    let domain_name = COOKIE_DOMAIN_NAME;

    const fCookies = Cookies.withAttributes({ path: '/', domain: domain_name, expires: 10 });

    if (fCookies.get('cth') == undefined)
        fCookies.set('cth', 'os');

    if (fCookies.get('ccs') == undefined)
        fCookies.set('ccs', 200);

    if (fCookies.get('ift') == undefined)
        fCookies.set('ift', 200)

    $('#report_log').hide();
    $('#runner').attr('running', false);

    /*

     *** Clock Functionalites ****

        i.  Progress Bar Circle
        ii. Start/ Stop/ Pause/ Continue  Stopwatch Functionalities
     
     */
    var bar = new ProgressBar.Circle(".clockcontainer", {
        strokeWidth: 9,
        duration: 3600000,
        step: function(state, bar, attachment) {
            bar.path.setAttribute('stroke', state.color);
        },
        trailColor: '#D5E6FA',
        trailWidth: 9,
        svgStyle: null
    });


    const timer = new Timer();
    var timerConfig = { precision: 'seconds', startValues: { seconds: 0 }, countdown: false };

    $("#runner").text(timer.getTimeValues().toString());

    // adding event listeners
    timer.addEventListener('stopped', function(e) {

        if (String(fCookies.get('ccs')) == '400') {
            $(this).uiSound({
                play: "finished"
            });

            $(document).trigger('stopclockclick', ['200']);
            $('#runner').attr('running', e.detail.timer.isRunning());

        }

    });

    let event_handler = (e) => {
        $('#runner').attr('running', e.detail.timer.isRunning());
    }

    ["started", "reset", "paused"].forEach((event) => {
        timer.addEventListener(event, event_handler);
    })

    // timer on secondsUpdated
    timer.addEventListener('secondsUpdated', function(e) {
        let values = timer.getTimeValues().toString();
        $('#runner').html(values).attr('current_time', timer.getTimeValues().seconds * 1000);
        $('#runner').attr('startAt', timerConfig.startValues.seconds);

        // TODO: Adding flowtime or break time tag
        document.title = values;
    });


    // clicking start button
    $('.start-div').delegate('.start', 'click', function() {

        bar.trail.setAttribute('stroke', '#D5E6FA');
        $(this).uiSound({
            play: "beat-click"
        });

        let ccs = String(fCookies.get('ccs'));

        if (ccs == "200") {

            let cth = fCookies.get('cth'),
                from_color = '#54B4F3',
                to_color = '#418DEC';
            if (cth != 'os') {

                if (cth == 'fg') {
                    from_color = '#4a6741';
                    to_color = '#3f5a36';
                } else if (cth == 'ys') {
                    from_color = '#e1af47';
                    to_color = '#d39b22';
                }
            }

            // reset of the bar
            bar.animate(1, {
                from: { color: from_color },
                to: { color: to_color },
                duration: 3600000,
            }, function() {

                if (timer.isRunning()) {
                    bar.set(0);
                    setTimeout(function() {
                        $('.start').trigger('click');
                    }, 1000);
                }
            });

        } else {

            bar.animate(-0.0, {
                duration: timerConfig.startValues.seconds * 1000,
                from: {
                    color: '#FF5454'
                },
                to: { color: '#ff4f4f' },
                step: function(state, circle, attachment) {

                    circle.path.setAttribute('stroke', state.color);

                }
            });
        }

        timer.stopWithoutEvent();
        timer.start(timerConfig);
        $('.pause-reset').removeClass('d-none');
        $('.start-div').css({ "opacity": 0.0, "pointer-events": "none" });

        if ($(".pause-continue-img").attr("src") != "./assets/image/pause.svg") {
            $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
            $('.continue').removeClass("continue").addClass("pause");

        }

    })

    // clicking pause button
    $('.pause-reset').delegate('.pause', 'click', function() {

        $(this).uiSound({
            play: "keyup"
        });

        timer.pause();
        bar.pause();

        if (String(fCookies.get('ccs', 400)) == '400')
            $(".pause-continue-img").attr("src", "./assets/image/start-red.svg");

        else {

            let cth = fCookies.get('cth');
            let src = "./assets/image/start.svg";

            if (cth != "os")
                src = (cth == "fg") ? "./assets/image/start-green.svg" : "./assets/image/start-yellow.svg";

            $(".pause-continue-img").attr("src", src);

        }

        $('.pause').removeClass("pause").addClass("continue");

    })

    // clicking continue button
    $('.pause-reset').delegate('.continue', 'click', function() {

        $(this).uiSound({
            play: "keyup"
        });

        timer.start();
        bar.resume();

        // changing continue to pause
        $(".pause-continue-img").attr("src", "./assets/image/pause.svg");
        $('.continue').removeClass("continue").addClass("pause");

    })


    // clicking reset button
    $('.pause-reset').delegate('.reset', 'click', function() {
        // TODO: to show blur dialogue box
        timer.reset();
        timer.pause();
        $("#runner").text(timer.getTimeValues().toString());


        if (String(fCookies.get('ccs', 400)) == '400')
            bar.set(1);

        else
            bar.set(0);
        $('.start-div').css({ "opacity": 1.0, "pointer-events": "auto" });
        $('.pause-reset').addClass('d-none');

    })


    // flow-break change event
    $(document).on('flowbreakchange', function(event, countdown = null) {

        if ($('.clock-toggle-inp').is(':checked')) {
            fCookies.set('ccs', 400);

            timerConfig.countdown = true;
            timerConfig.startValues.seconds = (countdown == null) ? 300 : parseInt(countdown) / 1000;


            bar.set(1.0);
            // TODO: change runner value in formatted time
            console.log(timerConfig);
            $(document).prop('title', 'BreakTime 💔');


        } else {
            fCookies.set('ccs', 200);

            bar.set(0);

            timerConfig.countdown = false;
            timerConfig.startValues.seconds = 0;
            // TODO: change runner value in formatted time

            $(document).prop('title', 'FlowTime');

        }

        $("#runner").text(format_time(timerConfig.startValues.seconds * 1000));
        load_theme();

    });

    // toggle change
    $('.clock-toggle-inp').on('change', function() {

        $(this).uiSound({
            play: "error"
        });

        if (timer.isRunning()) {
            Swal.fire({
                customClass: {
                    popup: 'popup-text-color',
                },
                title: (String(fCookies.get('ccs')) == '200') ? "Do you wanna switch to break?" : "Do you wanna switch to flow?",
                text: 'Time will be not record. Click Stop button to record time and switch',
                icon: 'warning',
                confirmButtonText: 'switch',
                showCancelButton: true
            }).then((result) => {
                if (result.isDismissed) {
                    if (($('.clock-toggle-inp').is(':checked')))
                        $('.clock-toggle-inp').prop('checked', false);

                    else
                        $('.clock-toggle-inp').prop('checked', true);

                } else if (result.isConfirmed) {

                    if ($('.clock-toggle-inp').is(':checked')) {
                        fCookies.set('fflow', 400)
                    }
                    $('.reset').trigger('click');
                    $(document).trigger('flowbreakchange');

                }
            });
        } else {

            fCookies.set('fflow', 400);
            $(document).trigger('flowbreakchange');


        }

    })


    if (String(fCookies.get('ccs')) != '200')
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
        fCookies.set('cth', theme);

        if (String(fCookies.get('ccs')) != '200') {
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