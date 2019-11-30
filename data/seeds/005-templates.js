const moment = require('moment')
const date = moment().add(10,'days').calendar();
const createdAt = moment().format('LLL')
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("templates")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("templates").insert([
    {
       "id":1,
      "template_name":"90 Day",
        "task_number":1,
        "due_date": date,
        "task_name": "Order Scrap Dumpster and Port-A-John",
        "isComplete": false,
        "createdAt": moment().format("LLL")
    
      },
      {
        "id":2,
        "template_name":"90 Day",
        "task_number":2,
        "due_date": date,
        "task_name": "Pre Construction Meeting With Buyers (Start Forming)",
        "isComplete": false,
        "createdAt":  moment().format("LLL")
  
      },
      { 
        "id":3,
        "template_name":"90 Day",
        "task_number":3,
        "due_date": date,
        "task_name": "Form Board Survey",
        "isComplete": false,
        "createdAt":  moment().format("LLL")
  
      },
      {
        "id":4,
        "template_name":"90 Day",
        "task_number":4,
        "due_date": date,
        "task_name": "Fill The Form Boards ",
        "isComplete": false,
        "createdAt":  moment().format("LLL")
   
      },
      {
        "id":5,
        "template_name":"90 Day",
        "task_number":5,
        "due_date": date,
        "task_name": "Rough Plumbing",
        "isComplete": false,
        "createdAt":  moment().format("LLL")
     
      },
      {
        "id":6,
        "template_name":"90 Day",
        "task_number":6,
        "due_date": date,
        "task_name": "Sewer Hookup / Order Windows",
        "isComplete": false,
        "createdAt":  moment().format("LLL")
       
      },
      {
        "id":7,
        "template_name":"90 Day",
        "task_number":7,
        "due_date": date,
        "task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
        "isComplete":false,
        "createdAt":  moment().format("LLL")
     
      
      }
     

    ]);
  // });
};
