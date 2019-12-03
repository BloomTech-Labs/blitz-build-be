function login(email, password, callback) {
  
  
    const bcrypt = require('bcrypt');
    const postgres = require('pg');
  
    const conString = 'postgres://waurbskunhkkex:3151ce60815eb11dacb61c3b3c6d89e2253a5cd5a600a465b8442eb9b4002a6a@ec2-54-225-173-42.compute-1.amazonaws.com:5432/dastdjvomujtcc?ssl=true';
    postgres.connect(conString, function (err, client, done) {
      if (err) return callback(err);
  
      const query = 'SELECT * FROM users WHERE email = $1';
      client.query(query, [email], function (err, result) {
        // NOTE: always call `done()` here to close
        // the connection to the database
        done();
  
        if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));
  
        const user = result.rows[0];
  
        bcrypt.compare(password, user.password, function (err, isValid) {
          if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
  
          return callback(null, {
            user_id: user.id,
            nickname: user.nickname,
            email: user.email
          });
        });
      });
    });
  }
  