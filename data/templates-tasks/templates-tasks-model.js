const db = require("../db.config");

module.exports = {
  //   getAllTasksAndTemplates,
  getTasksByTemplateId
};

//NEED A PRIMARY KEY TO RETURN ALL TEMPLATE AND TASK COMBOS

// function getAllTasksAndTemplates() {
//   return db("templates_tasks");
// }

function getTasksByTemplateId(template_id) {
  return db("templates_tasks").where("template_id", "=", template_id);
}
