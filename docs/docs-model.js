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
       .where("user_id",'=',id)
}

function deleteUrl(file_name){
    return db("docs_url")
    .where("file_name","=",file_name)

    .del()
}