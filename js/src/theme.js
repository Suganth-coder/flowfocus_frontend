import Cookies from 'js-cookie';

export default function load_theme() {
    /*
        TODO:
        1. check ccs, if break load red, else load the specific themes
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