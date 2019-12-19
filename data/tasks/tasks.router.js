const express = require("express");
const db = require("./tasks.model");
const templates = require('../templates/templates.model')
const router = express.Router();

//Get All Tasks for user


router.get("/:id",(req,res)=>{
  const query = req.query
  const id = req.params.id
  db.getTasksByID(id, query)
  .then(tasks =>{
    res.status(200).json({tasks:tasks})
  })
  .catch(error =>{res.status(500).json({message:error.message})})
})
//Get task by ID
router.get("/:id", (req, res) => {
  const id = req.params.id
  db.getTaskByTaskID(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting task"
      });
    });
});
//Get Tasks by Templates
router.get('/template/:id',(req,res)=>{
  let id = req.params.id
  db.getTaskByTemplateId(id)
  .then(tasks =>{
    res.status(200).json(tasks)
  }).catch(err =>{res.status(401).json(err)})
})
router.post("/", (req, res) => {
  const tasks = req.body;
  const uid  = req.headers.user_id
  tasks.user_id = uid

  db.addTasks(tasks)
    .then(taskId => {
      res.status(200).json({message:`${tasks.task_name} added`, taskId});
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on adding tasks"
      });
    });
});

//EDITS TASK
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.editTask(id, changes)
    .then(updatedTask => {
      res.status(200).json({message:`Task # ${id} updated`,updatedTask:updatedTask.text});
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: error,
        message: "500 server error on editing tasks"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteTask(id)
    .then(deletedTask => {
      res.status(204).json(deletedTask);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on deleting tasks"
      });
    });
});

//RETURNS All TASKS For Project BY PROJECT ID
router.get("/byProject/:pid", (req, res) => {
  const id = req.params.pid;
  db.getTasksByProject(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting tasks for a project ID"
      });
    });
});

router.delete("/byProject/:pid",(req,res)=>{
  const id = req.params.pid
  const template_name = req.body.template_name

 
      db.deleteTasks(id,template_name)
      .then(response =>{
        res.status(204).json(response)
      })
      .catch(error=>{
        res.status(500).json(error)
      })
    
    
  }) 



  //Get templates 


 router.get('/templates/:id',(req,res)=>{
   const tempid = req.params.id
 
   
   templates.getTemplateById(tempid)
   

   .then(templates =>{
     templates
     const template = templates[0].tasks

    db.addTasks(template)
     })
     .then(newTasksArr =>{console.log(newTasksArr)})
     
   })

module.exports = router
