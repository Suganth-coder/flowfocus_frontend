// import Swal from 'sweetalert2';
import 'ydn.db';
import Cookies from 'js-cookie';

$(document).ready(function() {
    /* 
     *** Task CURD Operations ***  

        i.  Storing CURD Opearations in local storage
        ii. Adding/ Modifying/ Deletion of Div
     */

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
        }]
    };


    let db = new ydn.db.Storage('flowfocus', schema);

    $.get("./assets/templates/task.html", function(data) {
        let taskDiv = $('<div>').append($.parseHTML(data)).find('#taskholder');

        // adding the task
        $('.add_task_btn').click(function() {
            let task_name = $('.task_name_inp').val();
            let task_length = task_name.length;
            let default_task_desp = "Task Description"

            /*
                1. checking length >0 &<=15
                2. storing the new task in the IndexDB 
                3. appending the html to task_div
            */

            if (task_length > 0 && task_length <= 15) {

                let put_data = db.put('tasks', { task_name: task_name, task_description: default_task_desp, flow: 0 });

                put_data.done(function(key) {
                    let new_div = taskDiv.clone();
                    new_div.find('.task-name').val(task_name).parent().attr('task_id', key);
                    new_div.find('.task-desp').val(default_task_desp);
                    new_div.addClass('animate__fadeInDown');

                    $(".task-container").append(new_div).wait(500).after(function() {
                        new_div.find('.show-report').focus();
                    });
                })

                put_data.fail(function(e) {
                    // TODO: change to alert
                    console.log(e);
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
                    confirmButtonText: 'Cool'
                });
            }
        });


        // displaying task div
        db.executeSql('SELECT * FROM tasks').then(function(results) {

                $.when(
                    $.each(results, function(k, v) {
                        let new_div = taskDiv.clone();
                        new_div.find('.task-name').val(v['task_name']).parent().attr('task_id', v['task_id']);
                        new_div.find('.task-desp').val(v['task_description']);
                        new_div.find('.task-flow-count').text(v['flow']);

                        $(".task-container").append(new_div);

                    })).then(function() {
                    // displaying the selected div from cookies
                    $('.task-id-div').each(function(index, obj) {

                        if (String(Cookies.get('cst')) == String($(this).attr('task_id'))) {
                            $(this).css('background', 'black');
                            $('.clock-current-task-div').text($(this).find('.task-name').val());
                        }

                    })
                });

            },
            function(e) {
                console.log("error: ", e);
            });

        // deleting the task div
        $('.task-container').delegate('.task-delete', 'click', function() {
            /*
                1. Removing the task_div 
                2. Deleting Record in IndexDB based on task_id
             */
            let parent = $(this).parent().parent().parent().parent()
            let task_id = parent.find('.task-id-div').attr('task_id');
            parent.addClass('animate__fadeOutDown').wait(800).after(function() {

                parent.remove();
                db.remove("tasks", parseInt(task_id)).fail(function(e) {
                    console.log(e);
                });

            });
        });


        // updating the task div
        $('.task-container').delegate('.task-name, .task-desp', 'change', function() {

            let parent = $(this).parent().parent(),
                task_id = parseInt(parent.find('.task-id-div').attr('task_id')),
                outer_this = this,
                value = $(this).val();


            db.get('tasks', task_id).always(function(record) {
                if ($(outer_this).hasClass('task-name'))
                    record['task_name'] = value;
                else
                    record['task_description'] = value;

                db.put({ name: 'tasks', keyPath: 'task_id' }, record).fail(function(e) {
                    console.log(e);
                })

            })
        })


        // selecting the tasks
        $('.task-container').delegate('.task-card', 'click', function() {
            /*
                1. changing the current clock task name
                2. Storing the current task id in cookie
            */

            let task_name = $(this).find('.task-name').val();
            let outer_this = this;

            $('.task-card').each(function() {
                if (this == outer_this)
                    $(this).find('.task-id-div').css('background', 'black');

                else
                    $(this).find('.task-id-div').css('background', '#1F2733');
            });
            $('.clock-current-task-div').text(task_name);
            Cookies.set('cst', $(this).find('.task-id-div').attr('task_id'), { sameSite: 'strict' })
        });

        $('.stop-clock').click(function() {
            /*
                TODO:
                1. Getting Jquery Runner Value and Updating (flow) in local storage with cst 
                2. Updating 
            */
        })


    }, 'text');

});