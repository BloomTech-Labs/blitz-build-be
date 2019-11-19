exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("projects")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("projects").insert([
    {
      project_name: "testing1",
      baths: 0,
      beds: 0,
      city: "chicago",
      imageURL: "",
      square_ft: 0,
      state: "IL",
      status: "on time",
      street_address: "random",
      zip_code: 442
    },
    {
      project_name: "testing2",
      baths: 0,
      beds: 0,
      city: "chicago",
      imageURL: "",
      square_ft: 0,
      state: "IL",
      status: "on time",
      street_address: "random",
      zip_code: 442
    },
    {
      project_name: "testing3",
      baths: 0,
      beds: 0,
      city: "chicago",
      imageURL: "",
      square_ft: 0,
      state: "IL",
      status: "on time",
      street_address: "random",
      zip_code: 442
    }
  ]);
  // });
};
