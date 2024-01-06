// import Swal from 'sweetalert2';
import 'ydn.db';
import Cookies from 'js-cookie';
import load_theme from './theme.js';
import table_show from './table.js';

$(document).ready(function() {
    /* 
     *** Task CURD Operations ***  
        i.  Storing CURD Opearations in local storage
        ii. Adding/ Modifying/ Deletion of Div
        iii. Stop clock (Task state log)

     */

    // Cookies settings
    let domain_name = COOKIE_DOMAIN_NAME;

    const fCookies = Cookies.withAttributes({ path: '/', domain: domain_name, expires: 10 });

    let schema = {
        stores: [{
            name: "tasks",
            keyPath: "task_id",
            autoIncrement: true,
            // columns
            indexes: [{
                name: "task_name",
                keyPath: "task_name",
                multiEntry: true

            }, {
                name: "task_description",
                keyPath: "task_description",
                multiEntry: true

            }, {
                name: "flow",
                keyPath: "flow",
                multiEntry: true

            }]
        }, {
            name: "report",
            keyPath: "task_id",
            autoIncrement: false,
            // columns
            indexes: [{
                name: "task_id",
                keyPath: "task_id",
                multiEntry: true

            }, {
                name: "flow_log",
                keyPath: 'flow_log',
                multiEntry: true
            }]
        }]
    };


    let db = new ydn.db.Storage('flowfocus', schema);
    table_show(db);

    $.get("./assets/templates/task.html", function(data) {
        let taskDiv = $('<div>').append($.parseHTML(data)).find('#taskholder');

        // adding the task
        $('.add_task_btn').click(function() {
            let task_name = $('.task_name_inp').val();
            let task_length = task_name.length;
            let default_task_desp = null;

            /*
                1. checking length >0 &<=25
                2. storing the new task in the IndexDB 
                3. appending the html to task_div
            */

            if (task_length > 0 && task_length <= 30) {

                let put_data = db.put('tasks', { task_name: task_name, task_description: default_task_desp, flow: 0 });

                put_data.done(function(key) {
                    let new_div = taskDiv.clone();
                    new_div.find('.task-name').val(task_name).parent().attr('task_id', key);
                    new_div.addClass('task-id-' + key);

                    new_div.find('.task-desp').val(default_task_desp);
                    new_div.find('.task-flow-count').attr('current_flow', 0);

                    new_div.addClass('animate__fadeInDown');

                    $(".task-container").append(new_div).wait(500).after(function() {
                        new_div.find('.show-report').focus();
                    });

                    // TODO: load_theme on certain condition
                    load_theme();
                })

                put_data.fail(function(e) {
                    // TODO: change to alert
                    // console.log(e);
                });


            } else {
                Swal.fire({
                    customClass: {
                        popup: 'popup-text-color',
                        confirmButton: 'popup-default-confirm'
                    },
                    title: 'Error!',
                    text: task_length == 0 ? "Enter the Task Name" : "Task Name is too much long :(",
                    icon: 'error',
                    confirmButtonText: 'okay',
                    didOpen: () => {
                        $(this).uiSound({
                            play: "warning"
                        });
                    }
                });
            }
        });


        // displaying task div
        db.executeSql('SELECT * FROM tasks').then(function(results) {

                $.when(
                    $.each(results, function(k, v) {
                        let new_div = taskDiv.clone();
                        new_div.find('.task-name').val(v['task_name']).parent().attr('task_id', v['task_id']);
                        new_div.addClass('task-id-' + v['task_id'])
                        new_div.find('.task-desp').val(v['task_description']);
                        new_div.find('.task-flow-count').text(v['flow']).attr('current_flow', parseInt(v['flow']) + 1);

                        $(".task-container").append(new_div);

                    })).then(function() {
                    // displaying the selected div from cookies
                    $('.task-id-div').each(function(index, obj) {

                        if (String(fCookies.get('cst')) == String($(this).attr('task_id'))) {
                            $(this).css('background', 'black');
                            $('.clock-current-task-div').text($(this).find('.task-name').val());
                        }

                    });

                    load_theme();
                });

            },
            function(e) {
                // console.log("error: ", e);
            });

        // deleting the task div
        $('.task-container').delegate('.task-delete', 'click', function() {
            /*
                1. Removing the task_div 
                2. Deleting Record in IndexDB based on task_id
                TODO: 
                    * remove cst if delete_task is there
                    * if a task is deleted, remove it from report index db too
             */
            let parent = $(this).parent().parent().parent().parent()
            let task_id = parent.find('.task-id-div').attr('task_id');
            parent.addClass('animate__fadeOutDown').wait(800).after(function() {

                parent.remove();
                db.remove("tasks", parseInt(task_id)).fail(function(e) {
                    // console.log(e);
                });

                db.remove("report", parseInt(task_id)).fail(function(e) {
                    // console.log(e);
                });

                // Removing the cst cookie if selected
                if (String(task_id) == String(fCookies.get('cst')))
                    Cookies.remove('cst')

                if (String($('.clock-current-task-div').attr('task_id')) == String(task_id))
                    $('.clock-current-task-div').text('');


            });
        });


        // updating the task div
        $('.task-container').delegate('.task-name, .task-desp', 'change', function() {

            let parent = $(this).parent().parent(),
                task_id = parseInt(parent.find('.task-id-div').attr('task_id')),
                outer_this = this,
                value = $(this).val();


            db.get('tasks', task_id).always(function(record) {
                if (record != undefined) {
                    if ($(outer_this).hasClass('task-name'))
                        record['task_name'] = value;
                    else
                        record['task_description'] = value;

                    db.put({ name: 'tasks', keyPath: 'task_id' }, record).fail(function(e) {
                        // console.log(e);
                    });
                };

            });
        })


        // selecting the tasks
        $('.task-container').delegate('.task-card', 'click', function() {
            /*
                1. changing the current clock task name
                2. Storing the current task id in cookie
            */

            let task_name = $(this).find('.task-name').val(),
                task_id = $(this).find('.task-id-div').attr('task_id'),
                outer_this = this;

            $('.task-card').each(function() {
                if (this == outer_this)
                    $(this).find('.task-id-div').css('background', 'black');

                else
                    $(this).find('.task-id-div').css('background', '#1F2733');
            });

            $('.clock-current-task-div').text(task_name).attr('task_id', task_id);
            fCookies.set('cst', task_id, { sameSite: 'strict' })
        });

        // task synchornization
        $('.stop-clock').click(function() {
            let c_time = $('#runner').runner('info').time;
            $(document).trigger('stopclockclick', ['400', c_time]);
        })

        $(document).on('stopclockclick', function(event, finished = '400', c_time = null) {
            /*
                1. check cookie cst, css
                2. If cst, update the IndexDB
                3. Else show dialog box
            */

            let task_id = fCookies.get('cst');

            if (task_id != undefined) {

                task_id = parseInt(task_id);
                let val = $("#runner").text();
                if ($(".task-id-" + task_id).length != 0) {

                    let current_flow = $('.task-id-' + task_id).find('.task-flow-count').attr('current_flow'),
                        flowtime = val,
                        breaktime = "00:00:00";

                    if (String(fCookies.get('ccs')) != '200') {
                        let info = $('#runner').runner('info');
                        breaktime = info.settings.format(info.settings.startAt);
                        flowtime = "00:00:00";

                        if (String(fCookies.get('fflow')) == '200')
                            current_flow = current_flow - 1;
                    }

                    if (finished == '400') {
                        if ($('#runner').runner('info').running == false) {
                            Swal.fire({
                                customClass: {
                                    popup: 'popup-text-color',
                                },
                                title: 'Not yet Started',
                                text: (String(fCookies.get('ccs')) == '200') ? "Flowtime not yet started" : "Breaktime not yet started",
                                icon: 'warning',
                                confirmButtonText: 'okay',
                                didOpen: () => {
                                    $(this).uiSound({
                                        play: "warning"
                                    });
                                }
                            });
                            return;
                        }
                    }
                    $('.reset').trigger('click');

                    // Storing the log in report db and task db 
                    var put_data;
                    $.when(db.get('report', task_id).done(function(record) {

                        if (record != undefined) {
                            if (current_flow in record['flow_log']) {
                                if (String(fCookies.get('ccs')) != '200')
                                // breaktime
                                    record['flow_log'][current_flow]['breaktime'] = breaktime;
                                else
                                    record['flow_log'][current_flow]['flowtime'] = flowtime;
                            } else {
                                record['flow_log'][current_flow] = { 'flowtime': flowtime, breaktime: breaktime };
                            }
                            put_data = db.put({ name: 'report', keyPath: 'task_id' }, record);
                        } else
                            put_data = db.put('report', { 'task_id': task_id, 'flow_log': { 1: { "flowtime": flowtime, "breaktime": breaktime } } });

                    })).then(function() {

                        if (String(fCookies.get('ccs')) == "200") {

                            // if flow
                            put_data.done(function(key) {
                                let temp = $('.task-id-' + task_id).find('.task-flow-count');
                                temp.attr('current_flow', parseInt(current_flow) + 1);
                                temp.text(current_flow);

                                $.when(db.get('tasks', task_id).done(function(record) {

                                    if (record != undefined) {
                                        record['flow'] = current_flow;
                                        // updating task db
                                        db.put({ name: 'tasks', keyPath: 'task_id' }, record).fail(function(e) {
                                            // console.log(e);
                                        });
                                    }

                                })).done(function() {
                                    /*
                                         TODO:
                                         1. Calculate Break timings (5, 8, 10, 20) \n
                                         2. change to break
                                      */

                                    let break_time = 300000;
                                    if (c_time != null) {
                                        // TODO: calculate custom break
                                        if (c_time >= 0 && c_time <= 1500000)
                                            break_time = 300000;
                                        else if (c_time > 1500000 && c_time <= 3000000)
                                            break_time = 480000;
                                        else if (c_time > 3000000 && c_time <= 5400000)
                                            break_time = 600000;
                                        else
                                            break_time = 900000;
                                    }

                                    // Switch to break
                                    fCookies.set('fflow', 200);
                                    fCookies.set('ccs', 400);
                                    $('.clock-toggle-inp').prop('checked', true);

                                    $(document).trigger('flowbreakchange', break_time);

                                })

                            });

                            put_data.fail(function(e) {
                                // console.log(e);
                            });


                        } else {

                            fCookies.set('fflow', 400);
                            fCookies.set('ccs', 200);
                            $('.clock-toggle-inp').prop('checked', false);

                            $(document).trigger('flowbreakchange');

                        }


                    })




                } else {
                    // TODO: show alert task not found
                }

            } else {
                Swal.fire({
                    customClass: {
                        popup: 'popup-text-color',
                    },
                    title: 'Select the task :(',
                    text: "No task element is selected. Kindly, select the task",
                    icon: 'warning',
                    confirmButtonText: 'okay',
                    didOpen: () => {
                        $(this).uiSound({
                            play: "warning"
                        });
                    }
                });
            }
        });


    }, 'text');

});