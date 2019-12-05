const express = require("express");
const db = require("./templates.model");
const dbt = require("../tasks/tasks.model")
const router = express.Router();

// router.get("/", (req, res) => {
//   db.getTemplates()
//     .then(templates => {
//       res.status(200).json(templates);
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: error,
//         message: "500 server error on getting templates"
//       });
//     });
// });


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
  // const template = req.body\
  
  db.getTemplate()
  .then(template =>{
  res.status(200).json(template)})
  .catch(error =>{res.status(500).json({message:error.message})})
})
// router.post("/:id", (req, res) => {

//    const project_id = req.params.id;
//    db.getTemplates().then(response=>{
//    let template = [];
//    template.push(response.map(function(response){return {"task_name":response.task_name,"task_description":response.task_description,"project_id":project_id}}));
//      return template[0]
     
//    })
//    .then(template=>{
//      dbt.addTasks(template).then(response=>{
     
//       res.status(201).json({message:`Tasks added to project # ${project_id}`,tasks:response.message})})
//    })


//     .catch(error => {
//       res.status(500).json({
//         error: error,
//         message: "500 server error on adding templates"
//       })
//     })
    

// })

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
