const express = require("express");
const db = require("./templates.model");
const dbt = require("../tasks/tasks.model")
const router = express.Router();


router.post("/",(req,res)=>{
  
  const user_id = req.headers.user_id
  const template ={
    template_name:req.body.template_name,
    user_id:user_id
  }
  db.addTemplate(template)
  .then(id =>{
    res.status(201).json({template_id:id[0].id})
  })
  .catch(error =>{res.status(500).json({message:`Error:${error.message}`})})
})
router.get('/',(req,res)=>{
  const id = req.headers.user_id
  db.getAll(id)
  .then(templates =>{
    res.status(200).json(templates)
  }).catch(err =>{res.status(400).json(err)})
})
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getTemplates(id,"id")
    .then(template => {
      if(template){
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

    
  //  db.getTemplates(id).then(response=>{
  // let resp = response[0].data

  //  let template = [];
   
  //  template.push(resp.map(function(response){return {"task_name":response.task_name,"task_description":response.task_description,"project_id":project_id,"user_id":user_id}}));

  //  console.log(template[0])
  //  return template
     
  //  })
  //  .then(template=>{
  
  //    dbt.addTasks(template[0]).then(response=>{
     
  //     res.status(201).json({message:`Tasks added to project # ${project_id}`,tasks:response.message})})
  //  })


  //   .catch(error => {
  //     res.status(500).json({
  //       error: error,
  //       message: "500 server error on adding templates"
  //     })
  //   })
    

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
