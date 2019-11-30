const db = require("../db.config");

module.exports = {
  getUsers,
  addUser,
  findByEmail,
  editUser,
  deleteUser
};

function getUsers() {
  return db("users");
}

function addUser(user) {   
  return  db('users')
   .insert(user,"id")
   .then(newUser => newUser )
  
}

function findByEmail(email) {
  return db("users").where(email);
}

function editUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
