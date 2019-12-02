const router = require("express").Router();
const db = require("./projects.model");
const zipcodes = require("zipcodes");
let moment = require('moment')



router.get("/", (req, res) => {
  const user_id = req.headers.user_id
  // Get all projects will check if user user_id == user_id in the DB before it returns the list to the client
  db.getProjects(user_id)
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
  const user_id = req.headers.user_id
  // Get project from DB
  db.getProjectById(id)

    .then(project => {
      // Check if Project belongs to user
      if(project[0].user_id == user_id){
        // If so return project to client
      res.status(200).json(project)
      }else{
        // If not return error message to client
        res.status(401).json({message:`Project # ${id} doesn't belong to user # ${user_id}`})
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting project id"
      });
    });
});


router.post("/",  (req, res) => {

  let zipcode = req.body.zip_code
  const cords = zipcodes.lookup(zipcode)
  let latitude = cords.latitude
  let longitude = cords.longitude
 
  const newProject = req.body;
   db.addProject(newProject)
  
  .then(()=>{
    const id = req.headers.user_id
    db.getProjects(id).then(projects => {
      let project = projects.slice(-1)
  
      let id = project[0].id
   
      let changes = {
        "latitude":latitude,
        "longitude":longitude
      
      }
    res.status(201).json({message:`Project added @ ${moment().format("LLL")}`,project_id:project[0].id})
     return db.editProject(id,changes)
  
    })
  })

  

    
  

  
    .catch(error =>{
      res.status(409).json({message:"A Project with that name already exists",error:error.message});
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
   if(project[0].user_id == req.headers.user_id)
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
  const uid = req.headers.user_id
  db.getProjectById(id)
  .then(project =>{
    if(project[0].user_id == uid){
  
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
