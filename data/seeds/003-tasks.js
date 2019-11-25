const moment = require('moment')
const date = moment().add(10,'days').calendar();
const createdAt = moment().format('LLL')
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("tasks").insert([
    {
  
			"id":1,
			"due_date": date,
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
    
			"id":2,
			"due_date": date,
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{ 
    
			"id":3,
			"due_date": date,
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
  
			"id":4,
			"due_date": date,
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
    
			"id":5,
			"due_date": date,
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
    
			"id":6,
			"due_date": date,
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
   
			"id":7,
			"due_date": date,
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 1
		},
		{
  
			"id":8,
			"due_date": date,
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
    
			"id":9,
			"due_date": date,
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{ 
    
			"id":10,
			"due_date": date,
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
  
			"id":11,
			"due_date": date,
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
    
			"id":12,
			"due_date": date,
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
    
			"id":13,
			"due_date": date,
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
   
			"id":14,
			"due_date": date,
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2
		},
		{
  
			"id":15,
			"due_date": date,
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{
    
			"id":16,
			"due_date": date,
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{ 
    
			"id":17,
			"due_date": date,
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{
  
			"id":18,
			"due_date": date,
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{
    
			"id":19,
			"due_date": date,
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{
    
			"id":20,
			"due_date": date,
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		},
		{
   
			"id":21,
			"due_date": date,
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3
		}
  ]);
  // });
};
