
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('delay_logs').del()

      // Inserts seed entries
      return knex('delay_logs').insert([
      	{
          "id": 1,
          "projects_id": 1,
          "projects_name": "Auburn",
          "createdAt": "November 29, 2019 10:30 PM",
          "reason": "inspector delay",
          "task_id": 7,
          "task_name": "Foundation and Sewer Hookup Inspection"
        },
        {
          "id": 2,
          "projects_id": 2,
          "projects_name": "Tacoma",
          "createdAt": "November 29, 2019 10:30 PM",
          "reason": "Buyers Rescheduled untill after New Years",
          "task_id": 9,
          "task_name": "Pre Construction Meeting With Buyers (Start Forming)"
        },
        {
          "id": 3,
          "projects_id": 3,
          "projects_name": "Seattle Eastside",
          "createdAt": "November 29, 2019 10:30 PM",
          "reason": "Plumber rescheduled untill Jan 4",
          "task_id": 19,
          "task_name": "Rough Plumbing"
        }
       
      ]);
    
};
