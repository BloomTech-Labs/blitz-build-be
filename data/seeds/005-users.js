exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("users")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("users").insert([
    {
			"id": 1,
			"password": "oMioR1poyYYvqKR",
			"name": "John  Kunze",
      "email": "JKunze@gmail.com",
      "phone_number":+15915087256, 
			"project_id": 1
		},
		{
			"id": 2,
			"password": "tmTd9RtNsGL4QkJ",
			"name": "Noemie  DuBuque",
      "email": "NoemieDuBuque@yahoo.com",
      "phone_number": +17247353642,
			"project_id": 2
		},
		{
			"id": 3,
			"password": "sK1M9U1js3VOksR",
			"name": "Francis  Simonis",
      "email": "FS45@hotmail.com",
      "phone_number": +14387802027,
			"project_id": 3
		},

  ]);
  // });
};
