const db = require("../db.config");

module.exports = {
  getTemplates,
  getTemplateById,
  addTemplate,
  editTemplate,
  deleteTemplate
};

function getTemplates() {
  return db("templates");
}

function getTemplateById(id) {
  return db("templates").where("id", "=", id);
}

function addTemplate(newTemplate) {
  return db("templates").insert(newTemplate);
}

function editTemplate(id, changes) {
  return db("templates")
    .where({ id })
    .update(changes);
}

function deleteTemplate(id) {
  return db("templates")
    .where("id", "=", id)
    .del();
}
