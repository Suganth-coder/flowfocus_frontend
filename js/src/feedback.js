$(document).ready(function() {


    $.get("./assets/templates/feedback.html", function(data) {
        let getStarted = $('<div>').append($.parseHTML(data)).find('.feedback');

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

                        if ($(this).attr('id') == "email" && value != "") {
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
                    $('#email, #name, #experience, #query').each(function() {
                        res = hightlight($(this));
                        if (res == 400) final_result = 400;
                    })

                    return (final_result == 400) ? false : true;


                },
                allowOutsideClick: false,
                didOpen: () => {
                    const gs_div = Swal.getPopup().querySelector(".feedback-outer-div");
                    $(gs_div).append(getStarted);
                }
            }).then(function() {
                // TODO: make the ajax call
            });
        }

        $(".feedback-btn").click(function() {
            showStarted();
        });


    })
});