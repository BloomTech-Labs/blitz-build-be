const db = require("../db.config");

module.exports = {
  addTasks,
  editTask,
  deleteTask,
  getTasksByProject,
  getTaskByTaskID,
  getTasksByID,
};
function getTasksByID(id){
  return db("tasks")
  .join("projects", "tasks.project_id", "=", "projects.id")
  .select("projects.project_name", "tasks.*")
  .where("tasks.user_id","=",id)
  .orderBy("tasks.id")
}

function getTaskByTaskID(id) {
  return db("tasks").where({id}).orderBy("id")
}

function addTasks(tasks) {
  return db("tasks").insert(tasks, "id")
  
}

function editTask(id, changes) {
  return db("tasks")
    .where({ id })
    .update(changes).orderBy("id")
}

function deleteTask(id) {
  return db("tasks")
    .where("id", "=", id)
    .del();
}



function getTasksByProject(id) {
  return db("tasks")
 
    .where("project_id", "=", id).orderBy("id")
}
