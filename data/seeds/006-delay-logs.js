
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('delay_logs').del()

      // Inserts seed entries
      return knex('delay_logs').insert([
      	{
          "id": 1,
          "projects_id": 1,
          "project_name": "Auburn",
         
          "reason": "inspector delay",
          "task_id": 7,
          "task_name": "Foundation and Sewer Hookup Inspection"
        },
        {
          "id": 2,
          "projects_id": 2,
          "project_name": "Tacoma",
     
          "reason": "Buyers Rescheduled untill after New Years",
          "task_id": 9,
          "task_name": "Pre Construction Meeting With Buyers (Start Forming)"
        },
        {
          "id": 3,
          "projects_id": 3,
          "project_name": "Seattle Eastside",
       
          "reason": "Plumber rescheduled untill Jan 4",
          "task_id": 19,
          "task_name": "Rough Plumbing"
        }
       
      ]);
    
};
