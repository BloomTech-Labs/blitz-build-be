exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("tasks").insert([
    {
      task_name: "example",
      task_description: "example",
      due_date: "example"
      // project_id: 1
    },
    {
      task_name: "example2",
      task_description: "example",
      due_date: "example"
      // project_id: 2
    },
    {
      task_name: "example3",
      task_description: "example",
      due_date: "example"
      // project_id: 1
    }
  ]);
  // });
};
