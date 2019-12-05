
const moment = require('moment')
const createdAt = moment().format("LLL")
const updatedAt = moment().format("LLL")
const db = require('../db.config')
module.exports = {
  getLogsByUserId,
  getLogsByLogId,
  addLogs,
  editLogs,
  deleteLogs
};

function getLogsByUserId(user_id) {
    return db("delay_logs")
      .join("projects", "delay_logs.project_id", "=", "projects.id")
      .join("tasks", "delay_logs.task_id", "=", "tasks.id")
      .select("projects.project_name", "tasks.task_name", "delay_logs.*")
      .where("delay_logs.user_id", "=", user_id)
      .orderBy("delay_logs.id");
}

function getLogsByLogId(id) {
  return db("delay_logs")
    .where({id})
    .orderBy("id");
}

function addLogs(newLog) {
  return db("delay_logs").insert(newLog, "id");
}
function editLogs(id, changes) {
  return db("delay_logs")
    .where({ id })
    .update(changes);
}
function deleteLogs(id) {
  return db("delay_logs")
    .where({ id })
    .del();
}
