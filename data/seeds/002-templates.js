exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("templates")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("templates").insert([
    { template_name: "90_day" },
    { template_name: "60_day" },
    { template_name: "30_day" }
  ]);
  // });
};
