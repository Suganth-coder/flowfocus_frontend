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

            /*
                TODO: 
                1. checking length >0 &<=15\n
                2. appending the html to task_div
                3. storing the new task in the IndexDB
            */
            console.log(task_name);
        })


    }, 'text');

}