const router = require("express").Router();
const db = require("./projects.model");
let moment = require('moment')



router.get("/", (req, res) => {
  const user_id = req.headers.user_id


  /** Get all projects will check if user user_id == user_id in the DB before it returns the list to the client */
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
  /**  Get project from DB */
  db.getProjectById(id)

    .then(project => {
      /** Check if Project belongs to user */
      if (project[0].user_id == user_id) {
        /** If so return project to client */
        res.status(200).json(project)
      } else {
        /** If not return error message to client */
        res.status(401).json({ message: `Project # ${id} doesn't belong to user # ${user_id}` })
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


  const project_name = req.body.project_name
  const newProject = req.body;
  const user_id = req.headers.user_id
  newProject.user_id = user_id
  newProject.createdAt = moment().format("L");
  /** Check name function 
   * Takes in an Array of projects
   * @async
   * @method
   * @param {Array} list 
   */
  const checkName = (list) => {
    let sameName = false;
  /**
   *  Apply forEach on the list
   * checking if item.project_name == project_name
   */
    list.forEach(item => {
    /**
     * If it does set sameName = true 
     * return sameName 
     */
      if (item.project_name == project_name) {
        sameName = true;
    
      }
    })
    return sameName
  }
  /**
   * Query the Db passing in the user_id
   * This Db returns an Array of projects
   * We use the @checkName() to see if a 
   * project with that name already exists.
   */
  db.checkProjectName(user_id)
  .then(projects=>{
   console.log(checkName(projects))
  /** If it does we @return and 409 */
     if(checkName(projects) == true){
      res.status(409).json({message:`A project with the name ${project_name} already exists!!!!!!` })
     }
     /** If it doesn't we add the newProject to the Db 
      * and return a 201
      */
     else{
        db.addProject(newProject)
  
        .then(projectId => {
      db.getProjectById(projectId[0])
        .then(project => {
          res.status(201).json({ message: `Project added @ ${moment().format("LLL")}`, project })
          //  return db.editProject(id,changes)
        })

     })
    
  
    .catch(error => {
      res.status(500).json(error.message)
    });
  }})
  
})

/** Update A Project */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const uid = req.headers.id
  // Get project 1st
  db.getProjectById(id)

    .then(project => {
      //Check to see if project belongs to user
      if (project[0].user_id == req.headers.user_id)
      //If so update project and send status 200 back to client
      {
        db.editProject(id, changes)
        .then(() => {
          db.getProjectById(id)
            .then(updatedProject => {
              res.status(200).json({ message: `Project # ${id} updated`, updatedProject })
            })
        })
        //If not send error message back to client
      } else {
        res.status(401).json({ message: `Project # ${id} doesn't belong to user # ${uid}` })
      }

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
    .then(project => {
      if (project[0].user_id == uid) {

        db.deleteProject(id)
          .then(deletedProject => {
            res.status(204).json(deletedProject);
          })
      } else {
        res.status(401).json({ message: `Project # ${id} doesn't belong to user # ${uid}` })
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
