import 'ydn.db';


export default function table_show(db) {
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

            let task_id = parseInt($(this).parent().find('.task-name').parent().attr('task_id'));

            Swal.fire({
                customClass: {
                    popup: 'table-show-dialogue',
                },
                title: "<div class=\"table-show\"></div>",
                icon: 'info',
                didOpen: () => {

                    const timer = Swal.getPopup().querySelector(".table-show");
                    $(timer).html($('#report_log').clone().css('display', 'block').prop('outerHTML'));
                    const report_log = Swal.getPopup().querySelector("#report_log");

                    $.when(db.get('report', task_id).done(function(record) {


                        if (record == undefined)
                            data = [
                                ["--", "--", "--", "--"]
                            ];
                        else {
                            let temp = [];
                            let s_no = 1;
                            $.each(record['flow_log'], function(k, v) {
                                temp.push([s_no, k, v['flowtime'], v['breaktime']]);
                                s_no += 1;
                            });
                            data = temp;

                        }
                    })).then(function() {
                        let table = new DataTable(report_log, {
                            data: data,
                            destroy: true
                        });

                    });

                }
            })
        });

    });
};