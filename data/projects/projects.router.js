const express = require("express");
const db = require("./projects.model");
const zipcodes = require("zipcodes");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
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

router.post("/", (req, res) => {
  const newProject = req.body;

  db.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
      zipcodes.lookup(req.body.zip_code);
      project.latitude = cords.latitude;
      project.longitude = cords.longitude;
      console.log(project);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on adding a project"
      });
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
