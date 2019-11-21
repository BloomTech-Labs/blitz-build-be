exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 50)
                .notNullable()
                .unique();
            tbl.string('email', 100)
                .notNullable()
                .unique();
            tbl.string('password', 100)
                .notNullable();
            
        })
        // tasks

        .createTable("tasks", tbl => {
            tbl.increments();
          tbl.boolean('isComplete').notNullable().defaultTo(false)
          tbl.timestamp('created_at')
            tbl.string("task_name")
                .notNullable();
            tbl.string("task_description", 1100);
            tbl.string("due_date");
            tbl
                .integer("project_id")
                .unsigned()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        // projects
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
            tbl.string("street_address");
            tbl.integer("zip_code").notNullable();
            tbl.enu("gpsCords",['lat','long'])
                
        })

        //   .createTable("templates", tbl => {
        //     tbl.increments();

        //     tbl.string("template_name").unique();
        // })
        //Templates_Tasks
        // .createTable("templates-tasks", tbl => {
        //     tbl.increments();

        //     tbl
        //         .integer("template_id")
        //         .unsigned()
        //         .references("id")
        //         .inTable("templates")
        //         .onDelete("CASCADE")
        //         .onUpdate("CASCADE");
        //     tbl
        //         .integer("task_id")
        //         .unsigned()
        //         .references("id")
        //         .inTable("tasks")
        //         .onDelete("CASCADE")
        //         .onUpdate("CASCADE");
        // })
        // .createTable("delay_logs", tbl => {
        //     tbl.increments();
        //     tbl.string('reason')
        //         .notNullable()
        //     tbl.string("timestamp")
        //     tbl.string('task_id')
        //         .unsigned()
        //         .references('id')
        //         .inTable('tasks')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE')
        //     tbl.string('project_id')
        //         .unsigned()
        //         .references('id')
        //         .inTable('projects')
        //         .onUpdate('CASCADE')
        //         .onDelete('CASCADE')
        //     tbl.string('uid')

        //         .unsigned()
        //         .references('id')
        //         .inTable('users')
        //         .onDelete("RESTRICT")
        //         .onUpdate('CASCADE')
        // })
}
        

exports.down = function (knex) {
    return knex.scheme
        .dropTableIfExists("projects")
        .dropTableIfExists("templates_tasks")
        .dropTableIfExists("tasks")
        .dropTableIfExists("templates")
        .dropTableIfExists("users")
        .dropTableIfExists('delay_logs');
};








