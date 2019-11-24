const router = require("express").Router();
const db = require("./projects.model");
const zipcodes = require("zipcodes");
let moment = require('moment')



router.get("/", (req, res) => {
  const id = req.headers.id
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

  db.getProjectById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting project id"
      });
    });
});
// TODO finish return message !!!!!!!!!!!!!!!!!!!!!!
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


router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.editProject(id, changes)
    .then(updatedProject => {
      res.status(200).json(updatedProject);
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

  db.deleteProject(id)
    .then(deletedProject => {
      res.status(204).json(deletedProject);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "server error on deleting project"
      });
    });
});

module.exports = router;
