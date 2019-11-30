require('dotenv').config('./env')
const db = require('../db.config')
module.exports={
    getLogs,
    addLogs,
    editLogs,
    deleteLogs
}
 
function getLogs(user_id){
    return db("delay_logs").where({user_id});
}

function addLogs(newLog){
    return db("delay_logs").insert(newLog);
}
function editLogs(id,changes){
  return db("delay_logs").where({id}).update(changes)
}
function deleteLogs(id){
    return db("delay_logs").where({id}).delete()
}