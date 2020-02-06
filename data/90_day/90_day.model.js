const db = require('../db.config')

module.exports ={
    get
}
function get(){
return db('90_day')
   .orderBy('template_name')
}