exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("templates")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("templates").insert([
    { template_name: "template 1" },
    { template_name: "template 2" },
    { template_name: "template 3" }
  ]);
  // });
};
