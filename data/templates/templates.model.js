const db = require("../db.config");

module.exports = {
  getTemplate,
  getTemplates,
  // getTemplateByName,
  // getTemplateById,
  addTemplate,
  editTemplate,
  deleteTemplate
};

// function getTemplateByName(id) {
//   return db("templates").where("id","=",id);
// }
function getTemplate(){
  return db("templates").select("*")
}
function getTemplates(id) {
  return db("templates").where("id","=",id)
         
}

function addTemplate(template) {
  return db("templates").insert(template);
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
