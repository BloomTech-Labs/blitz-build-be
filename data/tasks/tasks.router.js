const express = require("express");
const db = require("./tasks.model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting tasks"
      });
    });
});

router.post("/", (req, res) => {
  const task = req.body;

  db.addTask(task)
    .then(newTask => {
      res.status(200).json(newTask);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on adding tasks"
      });
    });
});

//EDITS TASK
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.editTask(id, changes)
    .then(updatedTask => {
      res.status(200).json(updatedTask);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on editing tasks"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteTask(id)
    .then(deletedTask => {
      res.status(204).json(deletedTask);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on deleting tasks"
      });
    });
});

//RETURNS TASKS BY PROJECT ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getTasksByProject(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting tasks for a project ID"
      });
    });
});

module.exports = router;
