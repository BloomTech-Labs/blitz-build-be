const express = require("express");
const db = require("./templates-tasks-model");

const router = express.Router();





router.get("/:name", (req, res) => {
  const name = req.params.name;

  db.getTasksByProjectId(name)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting tasks by template id"
      });
    });
});

module.exports = router;
