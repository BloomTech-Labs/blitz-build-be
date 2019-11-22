exports.up = function (knex) {
    return knex.schema
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
        tbl.integer("zipcode").notNullable();
        tbl.enu("gpsCords",[])
            
    })
    
    //     })
        // tasks

      

        // // projects
   
    }
    
        

exports.down = function (knex) {
    return knex.scheme = ()=>{     
        knex
        .dropTableIfExists("projects")
        .dropTableIfExists("templates_tasks")
        .dropTableIfExists("tasks")
        .dropTableIfExists("templates")
        .dropTableIfExists("users")
}}








