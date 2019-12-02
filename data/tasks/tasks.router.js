const express = require("express");
const db = require("./tasks.model");
const templates = require('../templates/templates.model')
const router = express.Router();
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

router.post("/", (req, res) => {
  const tasks = req.body;

  db.addTasks(tasks)
    .then(newTask => {
      res.status(200).json({message:`${tasks.task_name} added`,"newTask":newTask.text});
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
/*TODO*/
//projects/tasks


 router.post('/templates/:tid',(req,res)=>{
   const tempid = req.params.tid
 
   
   templates.getTemplateById(tempid)
   

   .then(templates =>{
     templates
     const template = templates[0].tasks
    console.log(template)
    db.addTasks(template)
     }).then(newTasksArr =>{console.log(newTasksArr)})
     
   })

module.exports = router
