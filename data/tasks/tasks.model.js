const db = require("../db.config");

module.exports = {

  addTasks,
  editTask,
  deleteTask,
  getTasksByProject,
  getTaskByTaskID
};

function getTaskByTaskID(id) {
  return db("tasks").where({id});
}

function addTasks([tasks]) {
  db("tasks").insert(tasks)
  .then(newTasksArr =>{return newTasksArr})
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



function getTasksByProject(id) {
  return db("tasks")
 
    .where("project_id", "=", id);
}
