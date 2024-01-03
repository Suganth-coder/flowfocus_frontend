$(document).ready(function() {


    $.get("./assets/templates/feedback.html", function(data) {

        let getStarted = $('<div>').append($.parseHTML(data)).find('.feedback');
        getStarted.find('.fb-loading').hide();

        let base_url = "http://localhost:8081/"

        let showStarted = () => {
            Swal.fire({
                customClass: {
                    popup: 'feedback-popup',
                    confirmButton: 'popup-default-confirm'
                },
                title: "<div class=\"feedback-outer-div\"></div>",
                showCancelButton: true,
                cancelButtonColor: '#ea3f64',
                confirmButtonText: 'submit',
                preConfirm: () => {
                    let hightlight = (ele, req = true) => {

                        let hl = 400,
                            value = ele.val();

                        if (value.length != 0)
                            value = value.trim();

                        if (ele.attr('id') == "email" && value != "") {
                            if (!(value.includes("@")))
                                hl = 200;
                            // TODO: show email invalid type

                        }
                        if (req)
                            if (value == "") hl = 200;

                        if (hl == 200) {
                            ele.css({ 'border': '2px solid #ea3f64' });
                            return 400;
                        } else
                            ele.css({ 'border': '1px solid white' });

                        return 200;
                    }

                    let final_result = 200;
                    $('#fb-email, #fb-name, #fb-experience, #fb-query').each(function() {
                        res = hightlight($(this));
                        if (res == 400) final_result = 400;
                    })

                    return (final_result == 400) ? false : true;


                },
                allowOutsideClick: false,
                didOpen: () => {
                    const gs_div = Swal.getPopup().querySelector(".feedback-outer-div");
                    $(gs_div).append(getStarted);
                    $('.fb-loading').hide();
                }
            }).then(function(result) {

                if (result.isConfirmed) {
                    $.ajax({
                        url: base_url + `beta/feedback`,
                        data: JSON.stringify({
                            name: $('#fb-name').val(),
                            email: $('#fb-email').val(),
                            flowfocus_experience: $('#fb-experience').val(),
                            issue_faced: $('#fb-query').val()
                        }),
                        method: "POST",
                        cache: false,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'

                        },
                        beforeSend: function() {
                            $('.fb-loading').show();
                        },
                        complete: function() {
                            $('.fb-loading').hide();
                        }
                    }).done(function(response) {
                        // data = response.data;
                        Swal.fire({
                            customClass: {
                                popup: 'popup-text-color',
                                confirmButton: 'popup-default-confirm'
                            },
                            title: "Thanks for your time!",
                            text: "Feedback has been successfully submitted",
                            icon: "success"
                        });

                    }).fail(function(response) {
                        let r_status = response.status;

                        Swal.fire({
                            customClass: {
                                popup: 'popup-text-color',
                                confirmButton: 'popup-default-confirm'
                            },
                            title: (r_status == 429) ? "Too many Feedbacks :(" : "Failed to Submit :(",
                            text: (r_status == 429) ? "" : "Try again after sometime. Thankyou",
                            icon: "error"
                        });

                    });
                }


            });


        }

        $(".feedback-btn").click(function() {
            showStarted();
        });


    })
});