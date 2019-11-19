exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("templates_tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("templates_tasks").insert([
    { template_id: 1, task_id: 1 },
    { template_id: 1, task_id: 2 },
    { template_id: 1, task_id: 3 }
  ]);
  // });
};
