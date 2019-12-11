const db = require('../data/db.config')
const createdAt = Date.now()
module.exports = {
    addURL,
    getURL,
    deleteUrl
}

function addURL(url){
    return db("docs_url")
    .insert(url,"id")
    .then(data => data)
    
}

function getURL(id){
    return db("docs_url")
        .select('*')
       .join('projects','projects.id','docs_url.project_id')
       .select('project.name')
       .where('id','=','docs_url.project_id')
     
      .orderBy("project_name")
}

function deleteUrl(id){
    return db("docs_url")
    .where("id","=",id)
    .truncate()
    .delete()
}