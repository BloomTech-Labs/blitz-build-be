exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("tasks").insert([
    {
  
			"id": 1,
			"due_date": "12/03/2019",
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{
    
			"id": 2,
			"due_date": "12/03/2019",
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{ 
    
			"id": 3,
			"due_date": "12/03/2019",
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{
  
			"id": 4,
			"due_date": "12/03/2019",
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{
    
			"id": 5,
			"due_date": "12/03/2019",
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{
    
			"id": 6,
			"due_date": "12/03/2019",
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		},
		{
   
			"id": 7,
			"due_date": "12/03/2019",
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": "11/23/2019",
			"project_id": 1
		}
  ]);
  // });
};
