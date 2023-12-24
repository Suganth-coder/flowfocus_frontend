import 'ydn.db';



/*
schema definition
add/update/delete methods
*/

var schema = {
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
}
export function dbPlay() {
    $(document).ready(function() {
        var db = new ydn.db.Storage('flowfocus', schema);
        db.put('tasks', { task_name: "writing program", task_description: "This is sample program" })


    })
}