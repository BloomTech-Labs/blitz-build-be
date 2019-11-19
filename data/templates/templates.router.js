const express = require("express");
const db = require("./templates.model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getTemplates()
    .then(templates => {
      res.status(200).json(templates);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting templates"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getTemplateById(id)
    .then(template => {
      res.status(200).json(template);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on getting templates ID"
      });
    });
});

router.post("/", (req, res) => {
  const template = req.body;

  db.addTemplate(template)
    .then(newTemplate => {
      res.status(200).json(newTemplate);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 server error on adding templates"
      });
    });
});

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
