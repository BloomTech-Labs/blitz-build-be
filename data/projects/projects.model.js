const db = require("../db.config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  editProject,
  deleteProject
};

function getProjects(id) {
  return db("projects").where("user_id","=", id);
}

function getProjectById(id) {
  return db("projects").where("id", "=", id);
}

function addProject(newProject) {
  return db("projects").insert(newProject);
}

function editProject(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function deleteProject(id) {
  return db("projects")
    .where("id", "=", id)
    .truncate()
    .delete()
}
