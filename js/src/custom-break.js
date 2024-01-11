import Cookies from 'js-cookie';

export default function custom_break() {
    $(document).ready(function() {

        // Cookies settings
        let domain_name = COOKIE_DOMAIN_NAME;

        const fCookies = Cookies.withAttributes({ path: '/', domain: domain_name, expires: 10 });


        $.get("./assets/templates/custom-break.html", function(data) {
            let breakDiv = $('<div>').append($.parseHTML(data)).find('.custom-break');


            $(".clock-container").delegate('#runner', 'click', function() {
                if (String(fCookies.get('ccs')) == '400') {
                    Swal.fire({
                        customClass: {
                            popup: 'popup-text-color',
                            confirmButton: 'popup-default-confirm'
                        },
                        title: "<div class=\"custom-break\"></div>",
                        confirmButtonText: 'Change',
                        allowOutsideClick: false,
                        showCancelButton: true,
                        cancelButtonColor: '#ea3f64',
                        preConfirm: () => {

                            let hrs_inp = Swal.getPopup().querySelector(".hrs_input"),
                                mins_inp = Swal.getPopup().querySelector(".mins_input"),
                                sec_inp = Swal.getPopup().querySelector(".sec_input");

                            let hrs_inp_val = $(hrs_inp).val(),
                                mins_inp_val = $(mins_inp).val(),
                                sec_inp_val = $(sec_inp).val();

                            let validate_selector = (val, selc, typ) => {

                                let highlight = 400,
                                    max_num = 60,
                                    min_num = 0;

                                // TODO: check max and min range
                                if (!((hrs_inp_val == "" && mins_inp_val == "" && sec_inp_val == ""))) {
                                    max_num = (typ == "hrs") ? 23 : 59;

                                    if (val == "")
                                        $(selc).val(0);
                                    else {
                                        if (!(parseInt(val) >= min_num && parseInt(val) <= max_num))
                                            highlight = 200;
                                    }

                                }

                                if ((hrs_inp_val == "" && mins_inp_val == "" && sec_inp_val == "") || highlight == 200) {
                                    $(selc).css('border', '2px solid #ea3f64');
                                    return 400;
                                } else
                                    $(selc).css('border', '1px solid white');

                                return 200
                            }

                            let hr = validate_selector(hrs_inp_val, hrs_inp, 'hrs'),
                                mr = validate_selector(mins_inp_val, mins_inp, 'mins'),
                                sr = validate_selector(sec_inp_val, sec_inp, 'secs');

                            return (hr == 400 || mr == 400 || sr == 400) ? false : true;
                        },
                        didOpen: () => {
                            const cb_div = Swal.getPopup().querySelector(".custom-break");
                            $(cb_div).append(breakDiv);
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            /*
                                TODO: 
                                1. convert it into milli second \n
                                2. change the value of runner + trigger reset event \n
                            */
                            let hrs_inp = Swal.getPopup().querySelector(".hrs_input"),
                                mins_inp = Swal.getPopup().querySelector(".mins_input"),
                                sec_inp = Swal.getPopup().querySelector(".sec_input");

                            let hrs_inp_val = parseInt($(hrs_inp).val()),
                                mins_inp_val = parseInt($(mins_inp).val()),
                                sec_inp_val = parseInt($(sec_inp).val());

                            let total_seconds = hrs_inp_val * 60 * 60 + mins_inp_val * 60 + sec_inp_val;
                            let milli_seconds = total_seconds * 1000;

                            // TODO: call flowbreakchange with custom milli second
                            $('.reset').trigger('click');
                            $(document).trigger("flowbreakchange", [milli_seconds]);
                        }
                    });
                }
            });

        })
    });
}