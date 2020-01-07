const express = require('express')
const router = express.Router();
const moment = require('moment')
const db = require("./templates.model");

/**
 * @swagger
 * /:
 *   post:
 *     description: Adds A template of tasks
 *        responses: 
 *              201:
 *                description: Returns template_id,template_name
 *           
 */
router.post("/", (req, res) => {

  const user_id = req.headers.user_id
  const template = {
    template_name: req.body.template_name,
    user_id: user_id
  }
  db.addTemplate(template)
    .then(id => {
      res.status(201).json({ template_id: id[0].id ,template_name:id.template_name})
    })
    .catch(error => { res.status(500).json({ message: `Error:${error.message}` }) })
})

/**
 * @swagger
 * /:
 *   get:
 *      description:  Get All Templates For a User
 *        responses:
 *             200:
 *                description: Returns All Templates For That User
 *                                  
 */
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

/**
 * @swagger
 * /:
 *   post:
 *      description: Get A Template By template_name
 *          requires: @body = template_name
 *         responses:
 *                200:
 *                   description:  Returns A template
 */
router.post('/byName',(req,res)=>{
    const template_name = req.body.template_name
    console.log(template_name)
    db.getTemplatesByName(template_name)
    .then(template =>{
        console.log(template)
      return  res.status(200).json(template)
      
    })
    .catch(error =>{
      res.status(500).json({
        error:error,
        message:"Sever Error on getting Template By Name"
      })
    })
})

router.post('/addTasks/:id', (req, res) => {
       
  let id = req.body.template_id
  let template_name = req.body.template_name
  let project_id = req.params.id
  let user_id = req.headers.user_id
  let tasks = []




  dbt.getTaskByTemplateId({...id,template_name:template_name,})
    .then(data => {
        console.log(data)
      tasks.push(data.map(function (response) { return { "task_name": response.task_name, createdAt: moment().format('L'), 'due_date': "", 'isComplete': false, "task_description": response.task_description, "project_id": project_id, 'user_id': user_id ,template_name:template_name} }))

try {     

          tasks.forEach(task => {
            console.log(tasks)
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

 
  /**
   * Adds Tasks By Template Name
   * @swagger
   * /:
   *    post: 
   *       requires: @body = template_name @params = project_id
   *         responses:  
   *              200:
   *                description: Returns createdAt message , template_id
   *        
   */
  router.post('/addTasks/byTempName/:id', (req, res) => {
     
    let template_name = req.body.template_name
    let project_id = req.params.id
    let user_id = req.headers.user_id

    let tasks = []
  
  
  
  
  
    dbt.getTasksByTempName(template_name)
      .then(data => {
         console.log(data)
        tasks.push(data.map(function (response) { return { "task_name": response.task_name, createdAt: moment().format('L'), 'due_date': "", 'isComplete': false, "task_description": response.task_description, "project_id": project_id, 'user_id': user_id ,template_name:response.template_name} }))
  
  try {     
           console.log(tasks)
            tasks.forEach(task => {
              dbt.addTasks(task)
                .then(resp => {
                  if (resp) {
                    res.status(200).json({ "Added": moment().format('L'), tasksArr: resp })
                  } else {
                    res.status(403).json({ message: err.message })
                  }
                })
            })
  }
  
         catch(err){ res.status(500).json(err) }
  
      })
    })



   /** Update */

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
/**    Delete */
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
