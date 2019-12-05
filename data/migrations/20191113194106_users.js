const moment = require('moment')
// const date = moment().add(90,'days').calendar("l")
const createdAt = moment().calendar()
exports.up = function(knex) {
  return (
    knex.schema
    //PROJECTS
      // .createTable("projects", tbl => {
      //   tbl.increments();

      //   tbl
      //     .string("project_name")
      //     .notNullable();
      //   tbl.float("baths");
      //   tbl.float("beds");
      //   tbl.string("city");
      //   tbl.string("imageURL");
      //   tbl.integer("square_ft");
      //   tbl.string("state");
      //   tbl.string("status");
      //   tbl.string("street_address");
      //   tbl.integer("zip_code").notNullable();
      //   tbl.float("longitude")
      //   tbl.float("latitude")
      //   tbl.string("due_date").defaultsTo(date)
      //   tbl.string('user_id').notNullable();
      // })
     

     

      //TASKS
      // .createTable("tasks", tbl => {
      //   tbl.increments();
      //   tbl.string("user_id").notNullable();
      //   tbl.string("task_name").notNullable();
      //   tbl.string("task_description", 1000);
      //   tbl.string("due_date")
      //   tbl.date("createdAt").defaultsTo(createdAt)
      //   tbl.boolean("isComplete").defaultsTo(false)
      //   tbl
      //     .integer("project_id", [])

      // })
        //TEMPLATES
      .createTable("templates", tbl => {
      tbl.increments();
    
      tbl.specificType("template",'json ARRAY')
 
  
      })
      // MANY-TO-MANY TABLE WITH PROJECTS AND TASKS
      // .createTable("projects_tasks", tbl => {
      //   tbl.increments();

      //   tbl
      //     .integer("project_id")
      //     .unsigned()
      //     .references("id")
      //     .inTable("projects")
      //     .onDelete("CASCADE")
      //     .onUpdate("CASCADE");
      //   tbl
      //     .integer("task_id")
      //     .unsigned()
      //     .references("id")
      //     .inTable("tasks")
      //     .onDelete("CASCADE")
      //     .onUpdate("CASCADE")

  
      // })
      // .createTable("delay_logs",tbl =>{
      //   tbl.increments()
      //   tbl.integer("projects_id")
      //      .unsigned()
      //      .references("id")
      //      .inTable("projects")
      //      .onDelete("CASCADE")
      //      .onUpdate("CASCADE")
      //   tbl.string("project_name").notNullable()
      //   tbl.string("createdAt").defaultsTo(moment().calendar("l"))
      //   tbl.string("reason").notNullable()
      //   tbl.integer("task_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("tasks")
      //   .onDelete("CASCADE")
      //   .onUpdate("CASCADE")
      //   tbl.string("task_name").notNullable()
      //   tbl.string("updatedAt").defaultsTo(moment().format("l"))
          
      // })

  
  );
};

exports.down = function(knex) {
  return knex.schema
  // .dropTableIfExists("delay_logs")
  .dropTableIfExists("templates")
  // .dropTableIfExists("projects_tasks")
  // .dropTableIfExists("tasks")
  // .dropTableIfExists("projects")
 
  // .dropTableIfExists("users")


  


 
    .dropTableIfExists("templates")
  
  

  


     

};
