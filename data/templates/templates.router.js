const express = require("express");
const db = require("./templates.model");
const dbt = require("../tasks/tasks.model")
const router = express.Router();


router.post("/",(req,res)=>{
  const template = req.body
  db.addTemplate(template)
  .then(id =>{
    res.status(201).json({template_id:id[0].id})
  })
  .catch(error =>{res.status(500).json({message:`Error:${error.message}`})})
})

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getTemplates(id,"id")
    .then(template => {
      if(template){
      res.status(200).send(template)
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting templates ID"
      });
    });
});


router.get("/",(req,res) =>{


  db.getTemplate()

  .then(template =>{

  res.status(200).json(template)})

  .catch(error =>{res.status(500).json({message:error.message})})

})
router.post("/:pid", (req, res) => {

   const project_id = req.params.pid;
   const id= req.body.id
   const user_id = req.headers.user_id
   db.getTemplates(id).then(response=>{
  let resp = response[0].data

   let template = [];
   
   template.push(resp.map(function(response){return {"task_name":response.task_name,"task_description":response.task_description,"project_id":project_id,"user_id":user_id}}));

  //  console.log(template[0])
   return template
     
   })
   .then(template=>{
  
     dbt.addTasks(template[0]).then(response=>{
     
      res.status(201).json({message:`Tasks added to project # ${project_id}`,tasks:response.message})})
   })


    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on adding templates"
      })
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
