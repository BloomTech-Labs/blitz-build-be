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
  return db("tasks").where("user_id","=",id).orderBy("id")
}

function getTaskByTaskID(id) {
  return db("tasks").where({id}).orderBy("id")
}

function addTasks(tasks) {
  return db("tasks").insert(tasks)
  
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
