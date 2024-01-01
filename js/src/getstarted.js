$(document).ready(function() {


    $.get("./assets/templates/get-started.html", function(data) {
        let getStarted = $('<div>').append($.parseHTML(data)).find('.get-started');
        console.log(getStarted.prop('outerHTML'));

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
            });
        }

        $(".get-started").click(function() {
            showStarted();
        });

        //TODO: automatically show if they visit the flowfocus for the first time

    })
});