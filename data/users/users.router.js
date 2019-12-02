const router = require('express').Router()
const db = require("./users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET


router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "there was a 500 server error on getting users"
      });
    });
});
router.post('/register', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
 user.password = hash


  
    db.addUser(user)
    .then(saved => {
         if (saved) {
        res.status(201).json({ message: `${saved} added`,id:saved.id });
      } else {
        res.status(404).json({ message: "Please check username and email" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "cannot add the user",error:error.message});
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.findByEmail({ email })
    .first()
    .then(user => {
      if (user && bcrypt.hashSync(password, user.password)) {
        const token = generateToken(user);
        const id  = user.id
        res.status(200).json({
          id,
          token,
          message: "you are now logged in!"
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.editUser(id, changes)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "there was a 500 server error on editing user"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteUser(id)
    .then(deletedUser => {
      res.status(204).json(deletedUser);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "there was a 500 server error on deleting user"
      });
    });
});

function generateToken(user) {
  payload = {
    sub: user.id,
    email: user.email,
    name: user.name
  };
  options = {
    expiresIn: "8h"
  };

  secrets = jwtSecret

  return jwt.sign(payload, secrets, options);
}

module.exports = router;
