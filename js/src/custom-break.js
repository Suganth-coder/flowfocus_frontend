import Cookies from 'js-cookie';
export default function custom_break() {
    $(document).ready(function() {
        $.get("./assets/templates/custom-break.html", function(data) {
            let breakDiv = $('<div>').append($.parseHTML(data)).find('.custom-break');


            $(".clock-container").delegate('#runner', 'click', function() {
                if (String(Cookies.get('ccs')) == '400') {
                    Swal.fire({
                        customClass: {
                            popup: 'popup-text-color',
                            confirmButton: 'popup-default-confirm'
                        },
                        title: "<div class=\"custom-break\"></div>",
                        didOpen: () => {
                            const cb_div = Swal.getPopup().querySelector(".custom-break");
                            $(cb_div).append(breakDiv);
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            /*
                                TODO: 
                                1. check the range, convert it into milli second \n
                                2. change the value of runner + trigger reset event \n
                            */
                        }
                    });
                }
            });

        })
    });
}