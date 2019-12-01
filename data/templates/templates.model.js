const db = require("../db.config");

module.exports = {
  // getTemplates,
  getTemplateByName,
  getTemplateById,
  addTemplate,
  editTemplate,
  deleteTemplate
};

function getTemplateByName(name) {
  return db("templates").where("template_name","=",name);
}

function getTemplateById(tempid) {
  return db("templates").select("tasks").where("id", "=", tempid);
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
