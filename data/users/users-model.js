const db = require('../../config/db.config');

module.exports = {
   
     find,
     findBy,
     findById,
     add,
     updateEmail,
     updatePassword,
     deleteUser
};

function find() {
    return db('users')
      .then(users => users)
  }
  
  function findBy(filter) {
    // console.log('filter log',filter)
    return db('users')
      .where(filter)
  }
  
  function findById(id) {
    return db('users')
    .select('id','username','email')
      .where({ id:id})
      .first()
      .then(user => {return user})
  }
  
  function add(userData) {
    return db('users')
      .insert(userData, "id")
      .then(userIdArr => findById(userIdArr[0]))
  }


  function updateEmail(id,email) {
    return db('users')
        
        .where({ id:id })
        
        .update({'email':email})
    };
    function updatePassword(id,password) {
      return db('users')
          .where({ id })
          
          .update({'password':password})
      };
      function deleteUser(id) {
        return db('users')
            .where({ id })
            .delete()
    };