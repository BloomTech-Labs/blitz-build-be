const db = require("../db.config");

module.exports = {
  //   get All tasks for a project,
  getTasksByProjectId
};





function getTasksByProjectId(name) {
  return db("templates").where("template_name", "=", name );
}
