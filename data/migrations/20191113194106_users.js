//boolean for completed and making user.id on projects and tasks
<<<<<<< HEAD

exports.up = function(knex) {
    return (
      knex.schema
  
        //USERS
        .createTable("users", tbl => {
          //USERS TABLE
          tbl.increments();
  
          tbl
            .string("email")
            .unique()
            .notNullable();
          tbl.string("name").notNullable();
          tbl.string("password").notNullable();
          tbl.string("phone_number").notNullable();
        })
  
        //TEMPLATES
        .createTable("templates", tbl => {
          tbl.increments();
  
          tbl.string("template_name").unique();
        })
  
        //TASKS
        .createTable("tasks", tbl => {
          tbl.increments();
  
          tbl.string("task_name").notNullable();
          tbl.string("task_description", 1000);
          tbl.string("due_date");
          tbl
            .integer("project_id")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNullable();
        })
  
        //MANY-TO-MANY TABLE WITH TEMPLATES AND TASKS
        .createTable("templates_tasks", tbl => {
          tbl.increments();
  
          tbl
            .integer("template_id")
            .unsigned()
            .references("id")
            .inTable("templates")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
          tbl
            .integer("task_id")
            .unsigned()
            .references("id")
            .inTable("tasks")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        })
  
        //PROJECTS
        .createTable("projects", tbl => {
          tbl.increments();
  
          tbl
            .string("project_name")
            .unique()
            .notNullable();
          tbl.integer("baths");
          tbl.integer("beds");
          tbl.string("city");
          tbl.string("imageURL");
          tbl.integer("square_ft");
          tbl.string("state");
          tbl.string("status");
          //boolean for completed
          tbl.string("street_address");
          tbl.integer("zip_code").notNullable();
          tbl.integer("latitude");
          tbl.integer("longitude");
        })
    );
  };
  
  exports.down = function(knex) {
    return knex.scheme
      .dropTableIfExists("projects")
      .dropTableIfExists("templates_tasks")
      .dropTableIfExists("tasks")
      .dropTableIfExists("templates")
      .dropTableIfExists("users");
  };
=======

exports.up = function(knex) {
  return (
    knex.schema

      //USERS
      .createTable("users", tbl => {
        //USERS TABLE
        tbl.increments();

        tbl
          .string("email")
          .unique()
          .notNullable();
        tbl.string("name").notNullable();
        tbl.string("password").notNullable();
        tbl.string("phone_number").notNullable();
      })

      //TEMPLATES
      .createTable("templates", tbl => {
        tbl.increments();

        tbl.string("template_name").unique();
      })

      //TASKS
      .createTable("tasks", tbl => {
        tbl.increments();

        tbl.string("task_name").notNullable();
        tbl.string("task_description", 1000);
        tbl.string("due_date");
        tbl
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNullable();
      })

      //MANY-TO-MANY TABLE WITH TEMPLATES AND TASKS
      .createTable("templates_tasks", tbl => {
        tbl.increments();

        tbl
          .integer("template_id")
          .unsigned()
          .references("id")
          .inTable("templates")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl
          .integer("task_id")
          .unsigned()
          .references("id")
          .inTable("tasks")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      //PROJECTS
      .createTable("projects", tbl => {
        tbl.increments();

        tbl
          .string("project_name")
          .unique()
          .notNullable();
        tbl.integer("baths");
        tbl.integer("beds");
        tbl.string("city");
        tbl.string("imageURL");
        tbl.integer("square_ft");
        tbl.string("state");
        tbl.string("status");
        //boolean for completed
        tbl.string("street_address");
        tbl.integer("zip_code").notNullable();
        tbl.integer("latitude");
        tbl.integer("longitude");
      })
  );
};

exports.down = function(knex) {
  return knex.scheme
    .dropTableIfExists("projects")
    .dropTableIfExists("templates_tasks")
    .dropTableIfExists("tasks")
    .dropTableIfExists("templates")
    .dropTableIfExists("users");
};
>>>>>>> 108202589a8b71836ebdc9bba69d16aa4d81d236
