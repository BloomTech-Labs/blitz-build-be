const db = require("../db.config");

module.exports = {
  getTemplate,
  getTemplates,
  // getTemplateByName,
  // getTemplateById,
  addTemplate,
  editTemplate,
  deleteTemplate,
  getAll,
  getTasksByTempName
};

// function getTemplateByName(id) {
//   return db("templates").where("id","=",id);
// }
function getAll(id){
return db("templates")
 .select('*')
 .where("user_id","=", id)
 .orderBy("template_name")
}
function getTemplate(id){
  return db("templates").select("*").where("id","=",id)
}

function getTemplates(id) {
  return db("templates").where("id","=",id)
         
}

function addTemplate(template) {
    return db('templates')
    .insert(template,"id")
    .then(templateIdArr => getTemplates(templateIdArr[0]))
           
          
}

function editTemplate(id, changes) {
  return db("templates")
    .where({ id })
    .update({...changes});
}

function deleteTemplate(id) {
  return db("templates")
    .where("id", "=", id)
    .del();
}
function getTasksByTempName(template_name){
  return db("templates")
  .where("template_name","=",template_name)
}
