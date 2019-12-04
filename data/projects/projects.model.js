const db = require("../db.config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  editProject,
  deleteProject
};

function getProjects(user_id) {
  return db("projects").where("user_id","=", user_id).orderBy("id")
}

function getProjectById(id) {
  return db("projects").where("id", "=", id).orderBy("id")
}

function addProject(newProject) {
  return db("projects")
  .insert(newProject, "id")
}

function editProject(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes).orderBy("id")
}

function deleteProject(id) {
  return db("projects")
    .where("id", "=", id)
    .truncate()
    .delete()
}
