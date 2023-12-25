import Swal from 'sweetalert2';
import 'ydn.db';

export function taskMain() {

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

                    db.put('tasks', { task_name: task_name, task_description: default_task_desp });

                    let new_div = taskDiv.clone();
                    new_div.find('.task-name').val(task_name)

                    $(".task-container").append(new_div)

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

                $.each(results, function(k, v) {
                    let new_div = taskDiv.clone();
                    new_div.find('.task-name').val(v['task_name']).parent().attr('task_id', v['task_id'])
                    new_div.find('.task-desp').val(v['task_description'])

                    $(".task-container").append(new_div);

                })


            }, function(e) {
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

        }, 'text');

    });


}