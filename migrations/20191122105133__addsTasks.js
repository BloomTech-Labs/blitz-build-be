
exports.up = function(knex) {
    return knex('tasks')
    .createTable("tasks", tbl => {
        tbl.increments();

        tbl
            .string("task_name")
         
        tbl.date('due_date');

       bool
        tbl.boolean().defaultsTo(false);
       
    
  
})}

