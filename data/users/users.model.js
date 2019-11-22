const db = require("../../config/db.config");

module.exports = {
  getUsers,
  getUserById,
  addUser,
  findByEmail,
  editUser,
  deleteUser
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where("id", "=", id);
}

function addUser(newUser) {
  return db("users").insert(newUser);
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
