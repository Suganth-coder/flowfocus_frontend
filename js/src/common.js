import DataTable from 'datatables.net-dt';

$(document).ready(function() {
    var data = [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$3,120"
        ],
        [
            "Garrett Winters",
            "Director",
            "Edinburgh",
            "8422",
            "2011/07/25",
            "$5,300"
        ]
    ];

    $(document).delegate('.show-report', 'click', function() {
        Swal.fire({
            customClass: {
                popup: 'table-show-dialogue',
            },
            title: "<div class=\"table-show\"></div>",
            icon: 'info',
            confirmButton: false,
            didOpen: () => {
                const timer = Swal.getPopup().querySelector(".table-show");
                $(timer).html($('#report_log').css('display', 'block').prop('outerHTML'));
                const report_log = Swal.getPopup().querySelector("#report_log");
                let table = new DataTable(report_log, {
                    data: data,
                    destroy: true
                });
                // console.log($(report_log).prop('outerHTML'));
            }
        })
    });

    $(document).on("showtable", function() {
        alert('testing');
    });
})