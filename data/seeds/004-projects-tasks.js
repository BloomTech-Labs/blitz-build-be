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
    {project_id:2,task_id:8},
    {project_id:2,task_id:9},
    {project_id:2,task_id:10},
    {project_id:2,task_id:11},
    {project_id:2,task_id:12},
    {project_id:2,task_id:13},
    {project_id:2,task_id:14},
    {project_id:3,task_id:15},
    {project_id:3,task_id:16},
    {project_id:3,task_id:17},
    {project_id:3,task_id:18},
    {project_id:3,task_id:19},
    {project_id:3,task_id:20},
    {project_id:3,task_id:21},
  
  ]);
  // });
};
