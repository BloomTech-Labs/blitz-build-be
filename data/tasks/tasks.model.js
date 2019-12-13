const db = require("../db.config");

module.exports = {
  addTasks,
  editTask,
  deleteTask,
  getTasksByProject,
  getTaskByTaskID,
  getTasksByID,
  getTaskByTemplateId
};
function getTasksByID(id, query){

  if(Object.entries(query).length === 0){
    return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select("projects.project_name", "tasks.*")
    .where("tasks.user_id","=",id)
    .orderBy("tasks.id")
  }
  else if(query.sortby && query.sortdir && !query.sortcondition) {
    return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select("projects.project_name", "tasks.*")
    .where("tasks.user_id","=",id)
    .orderBy(query.sortby, query.sortdir)
  }

  else if (query.sortby && query.sortdir && query.sortcondition) {
    return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select("projects.project_name", "tasks.*")
    .where("tasks.user_id","=",id)
    .where(query.sortby,"=", query.sortcondition)
    .orderBy(query.sortby, query.sortdir)
  }
}
function getTaskByTemplateId(id){
  return db("tasks")
   .where("template_id","=",id)
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
