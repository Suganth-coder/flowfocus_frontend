import Cookies from 'js-cookie';

export default function load_theme() {
    /*
        TODO:
        1. check ccs, if break load red, else load the specific themes
    */

    // Cookies settings
    let domain_name = 'localhost';
    const fCookies = Cookies.withAttributes({ path: '/', domain: domain_name, expires: 10 });


    let ccs = String(fCookies.get('ccs')),
        cth = String(fCookies.get('cth'));

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

        if (cth != 'os') {
            if (cth == 'fg') {
                circle_halo = '#2d5b2b';
                start_src = './assets/image/start-green.svg';
                stop_border = '#4a6741';
                btn_color = '#3f5a36';

            } else if (cth == 'ys') {
                circle_halo = '#5b592b';
                start_src = './assets/image/start-yellow.svg';
                stop_border = '#e1af47';
                btn_color = '#d39b22';
            }
        } else
            cth = "os";
    }

    $('.circle-halo').css({ "box-shadow": `0px 0px 211px 20px ${circle_halo}` });
    $('.start').attr('src', start_src);
    $('#stop-btn, #navdrop').css({ "border": `2px solid ${stop_border}` });
    $('#loginnav').css({ 'background': stop_border, "border": `2px solid ${stop_border}` });
    $('.flowfocus-title, .c-theme, .dropdown-toggle, .fb-title').css({ 'color': stop_border });

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

    $('.bg').css({ 'background-color': stop_border })
    $('.theme-value').text($(`.theme-change[theme="${cth}"]`).text());

    $('.stop-color-1-svg, .stop-color-2-svg').each(function() {
        $(this).attr('stop-color', stop_border);
    })

};