exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("templates_tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("projects_tasks").insert([
    { project_id: 1, task_id: 1 },
    {project_id:1,task_id:2},
    {project_id:1,task_id:3},
    {project_id:1,task_id:4},
    {project_id:1,task_id:5},
    {project_id:1,task_id:6},
    {project_id:1,task_id:7},
  
  ]);
  // });
};
