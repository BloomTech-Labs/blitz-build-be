const express = require("express");
const db = require("./templates.model");
const dbt = require("../tasks/tasks.model")
const router = express.Router();
const moment = require('moment')

router.post("/", (req, res) => {

  const user_id = req.headers.user_id
  const template = {
    template_name: req.body.template_name,
    user_id: user_id
  }
  db.addTemplate(template)
    .then(id => {
      res.status(201).json({ template_id: id[0].id })
    })
    .catch(error => { res.status(500).json({ message: `Error:${error.message}` }) })
})
router.get('/', (req, res) => {
  const id = req.headers.user_id
  db.getAll(id)
    .then(templates => {
      res.status(200).json(templates)
    }).catch(err => { res.status(400).json(err) })
})
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getTemplates(id, "id")
    .then(template => {
      if (template) {
        res.status(200).json(template)
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting templates ID"
      });
    });
});


// router.get("/",(req,res) =>{
//    const user_id = req.headers.user_id
//   console.log(req.headers)
//   db.getTemplate()

//   .then(template =>{

//   res.status(200).json(template)})

//   .catch(error =>{res.status(500).json({message:error.message})})

// })

router.post('/addTasks/:id', (req, res) => {
       
  let id = req.body.template_id
  let template_name = req.body.template_name
  let project_id = req.params.id
  let user_id = req.headers.user_id
  let tasks = []





  dbt.getTaskByTemplateId(id)
    .then(data => {

      tasks.push(data.map(function (response) { return { "task_name": response.task_name, createdAt: moment().format('L'), 'due_date': "", 'isComplete': false, "task_description": response.task_description, "project_id": project_id, 'user_id': user_id ,template_name:template_name} }))

try {     

          tasks.forEach(task => {
            dbt.addTasks(task)
              .then(resp => {
                if (resp) {
                  res.status(200).json({ "Added": moment().format('L'), tasksArr: resp })
                } else {
                  res.status(403).json({ message: err.message })
                }
              })
          })}

       catch(err){ res.status(500).json(err) }

    })
  })



  router.post('/addTasks/byTempName/:id', (req, res) => {
     
    let template_name = req.body.template_name
    let project_id = req.params.id
    let user_id = req.headers.user_id

    let tasks = []
  
  
  
  
  
    db.getTasksByTempName(template_name)
      .then(data => {
  
        tasks.push(data.map(function (response) { return { "task_name": response.task_name, createdAt: moment().format('L'), 'due_date': "", 'isComplete': false, "task_description": response.task_description, "project_id": project_id, 'user_id': user_id ,template_name:response.template_name} }))
  
  try {     
  
            tasks.forEach(task => {
              dbt.addTasks(task)
                .then(resp => {
                  if (resp) {
                    res.status(200).json({ "Added": moment().format('L'), tasksArr: resp })
                  } else {
                    res.status(403).json({ message: err.message })
                  }
                })
            })}
  
         catch(err){ res.status(500).json(err) }
  
      })
    })





  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.editTemplate(id, changes)
      .then(updatedTemplate => {
        res.status(200).json(updatedTemplate);
      })
      .catch(error => {
        res.status(500).json({
          error: error,
          message: "500 server error on editing templates"
        });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;

    db.deleteTemplate(id)
      .then(deletedTemplate => {
        res.status(200).json(deletedTemplate);
      })
      .catch(error => {
        res.status(500).json({
          error: error,
          message: "500 server error on editing templates"
        });
      });
  });



  module.exports = router;
