import Cookies from 'js-cookie';

$(document).ready(function() {

    let base_url = "http://localhost:8081/";

    $.get("./assets/templates/get-started.html", function(data) {
        let getStarted = $('<div>').append($.parseHTML(data)).find('.get-started');

        let showStarted = () => {
            Swal.fire({
                customClass: {
                    popup: 'getstarted-popup',
                    confirmButton: 'popup-default-confirm'
                },
                title: "<div class=\"get-started\"></div>",
                confirmButtonText: 'Close',
                allowOutsideClick: false,
                didOpen: () => {
                    const gs_div = Swal.getPopup().querySelector(".get-started");
                    $(gs_div).append(getStarted);
                }
            }).then((result) => {

                if (result.isConfirmed) {
                    Cookies.set('ift', 400);
                }
            });;
        }

        $(".get-started").click(function() {
            showStarted();
        });

        if (String(Cookies.get('ift')) == '200') {

            showStarted();

            $.ajax({
                url: base_url + `beta/feedback/new_user`,
                data: JSON.stringify({
                    new_user: true,
                    source: "flowfocus.io"
                }),
                method: "POST",
                cache: false,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                beforeSend: function() {},
                complete: function() {}
            }).done(function(response) {

            }).fail(function(response) {

            });
        }

    })
});