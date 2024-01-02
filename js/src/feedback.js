$(document).ready(function() {


    $.get("./assets/templates/feedback.html", function(data) {
        let getStarted = $('<div>').append($.parseHTML(data)).find('.feedback');

        let showStarted = () => {
            Swal.fire({
                customClass: {
                    popup: 'popup-text-color',
                    confirmButton: 'popup-default-confirm'
                },
                title: "<div class=\"feedback-outer-div\"></div>",
                confirmButtonText: 'Close',
                allowOutsideClick: false,
                didOpen: () => {
                    const gs_div = Swal.getPopup().querySelector(".feedback-outer-div");
                    $(gs_div).append(getStarted);
                }
            });
        }

        $(".feedback-btn").click(function() {
            showStarted();
        });


    })
});