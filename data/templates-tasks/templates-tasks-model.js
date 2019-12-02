const db = require("../db.config");

module.exports = {
  //   get All tasks for a project,
  getTasksByProjectId
};





function getTasksByProjectId(template_id) {
  return db("template_tasks").where("template", "=", template_id);
}
