import Swal from 'sweetalert2';
import 'ydn.db';

export function taskMain() {

    /* 
     *** Task CURD Operations ***  

        i.  Storing CURD Opearations in local storage
        ii. Adding/ Modifying/ Deletion of Div
     */

    $.get("./assets/templates/task.html", function(data) {
        let taskDiv = $('<div>').append($.parseHTML(data)).find('#taskholder');

        // adding the task
        $('.add_task_btn').click(function() {
            let task_name = $('.task_name_inp').val();
            let task_length = task_name.length;

            /*
                TODO: 
                1. checking length >0 &<=15\n
                2. appending the html to task_div
                3. storing the new task in the IndexDB
            */

            if (task_length > 0 && task_length <= 15) {
                let new_div = taskDiv.clone()
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
        })
    }, 'text');

}