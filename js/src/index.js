import Cookies from 'js-cookie';
$(document).ready(function() {

    let load_theme = () => {
        /*
            TODO:
            1. check ccs, if break load red, else load the specific themes
            Themes
                Cookies --> cth (current theme)
                * ocean shade (os)
                * forest green (fg)
        */

        let ccs = String(Cookies.get('ccs')),
            cth = String(Cookies.get('cth'));

        let circle_halo = '#2B3E5B',
            start_src = './assets/image/start.svg',
            stop_border = '#3F8AEA',
            btn_color = '#1D60B3';

        if (ccs != 200) {
            // break 
            circle_halo = '#5b2b39';
            start_src = './assets/image/start-red.svg';
            stop_border = '#ea3f64';
            btn_color = '#c22748';
        } else {
            // flow
        }

        $('.circle-halo').css({ "box-shadow": `0px 0px 211px 20px ${circle_halo}` });
        $('.start').attr('src', start_src);
        $('#stop-btn, #navdrop').css({ "border": `2px solid ${stop_border}` });
        $('#loginnav').css({ 'background': stop_border, "border": `2px solid ${stop_border}` });
        $('.flowfocus-title, .c-theme, .dropdown-toggle').css({ 'color': stop_border });

        $(".flow-icon svg").each(function() {
            $(this).css("fill", stop_border);
        });

        $('.add_task_btn').css({
            'background': stop_border,
            'border': `2px solid ${stop_border}`
        });

        $('.add_task_btn').mouseout(function() {
            $(this).css({ 'background': stop_border });
        });

        $('.show-report').css({ 'background': btn_color, 'border': `2px solid ${btn_color}` });

        $('.stop-clock').hover(function() {
            $(this).css({ "box-shadow": `0px 0px 20px 20px ${circle_halo}` });
        }, function() {
            $(this).css({ "box-shadow": "none" });
        });

    };
    /*

     *** Clock Functionalites ****

        i.  Progress Bar Circle
        ii. Start/ Stop/ Pause/ Continue  Stopwatch Functionalities
     
     */
    var bar = new ProgressBar.Circle("#container", {
        strokeWidth: 9,
        duration: 3600000,
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

    Cookies.set('cth', 'os');

    $('.start-div').delegate('.start', 'click', function() {
        $('#runner').runner('start');

        let ccs = String(Cookies.get('ccs'));

        if (ccs == "200") {

            bar.animate(1.0, {
                from: { color: '#54B4F3' },
                to: { color: '#418DEC' }
            });

        } else {
            bar.set(1.0);
            bar.animate(-0.0, {
                duration: 10000,
                from: {
                    color: '#FF5454'
                },
                to: { color: '#FF7878' },
            });
        }


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

    // clock toggle (flow/break)
    $('.clock-toggle-inp').on('change', function() {

        if (!($(this).is(':checked')))
            Cookies.set('ccs', 400);
        else
            Cookies.set('ccs', 200);

        load_theme();

    });




})