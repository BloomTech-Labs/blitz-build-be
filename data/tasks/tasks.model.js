const db = require("../db.config");

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  editTask,
  deleteTask,
  getTasksByProject
};

function getTasks() {
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select("projects.project_name", "tasks.*");
}

function getTaskById(id) {
  return db("tasks").where("id", "=", id);
}

function addTask(newTask) {
  return db("tasks").insert(newTask);
}

function editTask(id, changes) {
  return db("tasks")
    .where({ id })
    .update(changes);
}

function deleteTask(id) {
  return db("tasks")
    .where("id", "=", id)
    .del();
}

// function getTasksByProject(project_id) {
//   return db("tasks").where("project_id", "=", project_id);
// }

function getTasksByProject(project_id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select("projects.*", "tasks.*")
    .where("tasks.project_id", "=", project_id);
}
