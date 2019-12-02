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
        "template_name":"90_day",
 
        "due_date": "12/03/2019",
        "task_name": "Order Scrap Dumpster and Port-A-John",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
       
        "due_date": "12/03/2019",
        "task_name": "Pre Construction Meeting With Buyers (Start Forming)",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "12/03/2019",
        "task_name": "Form Board Survey",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "12/03/2019",
        "task_name": "Fill The Form Boards ",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "12/03/2019",
        "task_name": "Rough Plumbing",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "12/03/2019",
        "task_name": "Sewer Hookup / Order Windows",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "12/03/2019",
        "task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
        "isComplete": false,
        "createdAt": "11/23/2019",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Prep Slab",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Ground Wire Tests",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Foundation and Ground Wire inspection ***** Can Not Pour Slab Until Inspection Passed ******",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Pour Foundation Start Framing",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Wall and Roof Sheathing Inspections ",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Install Meter, Tug Inspection",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Tyvek, Install Exterior Doors",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Install Windows, Load Roof",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Tape Windows",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Dry Inspection",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Shingle Roof",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Rough Install HVAC",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Topout/Finish Roof",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Rough Install Electrical",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Rough Install Security",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Inspections",
        "task_description": "HVAC Rough,Plumbing 2nd,Electrical Rough, Pre-drywall orentation, bore care (SE States Only)",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "02/28/2020",
        "task_name": "Inspect Frame , Load Drywall",
        "task_description": "***** Must be completed before moving on ******",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "02/28/2020",
        "task_name": "Insulation",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Insulation Inspection",
        "task_description": "Must Be Completed Before Drywall is hung",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Order Appliances ,Hang Drywall",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
    
      { "template_name":"90_day",
       
        "due_date": "02/28/2020",
        "task_name": "Order Blinds",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Finish Exterior",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "02/28/2020",
        "task_name": "Inspect Finish",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "02/28/2020",
        "task_name": "Finish Drywall",
        "task_description": "Tape,mud,top coat 3 days and should be finished",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Install Garage Door",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Trim",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Cut Driveway",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Rail up driveway",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Paint",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Pour Driveway",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Tile",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
       
        "due_date": "02/28/2020",
        "task_name": "Soffit",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
       
        "due_date": "02/28/2020",
        "task_name": "Grout Tile",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "Measure Shower Door",
        "task_description": "Only after tile is finished",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Cabinets",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
   
        "due_date": "02/28/2020",
        "task_name": "HVAC Trim",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Plumbing Trim",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
   
        "due_date": "02/28/2020",
        "task_name": "Electrical Trim",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Specialites(towl bars,mirror,ect)",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
       
        "due_date": "02/28/2020",
        "task_name": "Electrical Meter",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Hot Check, Irrigation",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
      
        "due_date": "02/28/2020",
        "task_name": "AC Start up , Landscaping",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
        
        "due_date": "02/28/2020",
        "task_name": "Drywall Bump",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Rough Clean",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
     
        "due_date": "02/28/2020",
        "task_name": "Pre Carpet Paint, Final Grade Survey",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
       
        "due_date": "02/28/2020",
        "task_name": "Lay Carpet, Paint,Final Clean",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      },
      { "template_name":"90_day",
    
        "due_date": "02/28/2020",
        "task_name": "Final Inspection, Screen Out",
        "task_description": "",
        "isComplete": false,
        "createdAt": "Nov 30, 2019 3:12 AM",
        "project_id": 1
      }
      
    
  ]);
  // });
};
