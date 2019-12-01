const router = require("express").Router();
const db = require("./projects.model");
const zipcodes = require("zipcodes");
let moment = require('moment')



router.get("/", (req, res) => {
  const id = req.headers.id
  // Get all projects will check if user id == user_id in the DB before it returns the list to the client
  db.getProjects(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting projects"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const uid = req.headers.id
  // Get project from DB
  db.getProjectById(id)

    .then(project => {
      // Check if Project belongs to user
      if(project[0].user_id == req.headers.id){
        // If so return project to client
      res.status(200).json(project)
      }else{
        // If not return error message to client
        res.status(401).json({message:`Project # ${id} doesn't belong to user # ${uid}`})
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting project id"
      });
    });
});


router.post("/", (req, res) => {
  const newProject = req.body;

  db.addProject(newProject)
    .then( newProject=>{
    
     res.status(201).json({message:`Project added @ ${moment().format("LLL")}`,newProject:newProject.message})
   
    })
    .catch(error =>{
      res.status(409).json({message:"A Project with that name already exists",error:error.key});
    });
});

// Update Project
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const uid = req.headers.id
  // Get project 1st
 db.getProjectById(id)
 
 .then(project => {
   //Check to see if project belongs to user
   if(project[0].user_id == req.headers.id)
    //If so update project and send status 200 back to client
    {db.editProject(id, changes)
    .then(updatedProject => {
      res.status(200).json({message:`Project # ${id} updated`,updatedProject})
    })
   //If not send error message back to client
  }else{
    res.status(401).json({message:`Project # ${id} doesn't belong to user # ${uid}`})}
  
  })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on updating project"
      });
    });
});
 
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const uid = req.headers.id
  db.getProjectById(id)
  .then(project =>{
    if(project[0].user_id == req.headers.id){
  
  db.deleteProject(id)
    .then(deletedProject => {
      res.status(204).json(deletedProject);
    })}else{
      res.status(401).json({message:`Project # ${id} doesn't belong to user # ${uid}`})
    }
  })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "server error on deleting project"
      });
    });
});

module.exports = router;
