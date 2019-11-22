const router = require("express").Router();
const db = require("./users-model");
const connorDB = require("./users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../../config/secret.config");

// for endpoints beginning with /users
<<<<<<< HEAD
router.post('/register', (req, res) => {
  let user = req.body
   console.log(req.user)
  const hash = bcrypt.hashSync(user.password,10); // 2 ^ n
 user.password = hash

=======
router.post("/register", (req, res) => {
  let user = req.body;
  // console.log(user)
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
>>>>>>> 191902a68ed8e7aa45ccc7cb6c7f2285dc3888b4

  db.add(user)
    .then(saved => {
      if (saved) {
        res.status(201).json({ message: `${saved.email} added` });
      } else {
        res.status(404).json({ message: "Please check username and email" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "cannot add the user", error });
    });
});
<<<<<<< HEAD
router.put('/:id', (req, res) => {
  const username = req.params.username;
  const changes = req.body;


  if(changes) {
       (username, changes)
          .then(count => {
              if(count){ 
              res.status(202).json(count);
               }else{ res.status(404).json({ error: "Please enter a valid password" })
          }})
          .catch(err => res.status(500).json({ error: err }));
=======
router.put("/username/update", (req, res) => {
  const username = req.params.username;
  const changes = req.body;

  if (changes) {
    Receipts.updateReceipt(username, changes)
      .then(count => {
        if (count) {
          res.status(202).json(count);
        } else {
          res.status(404).json({ error: "Please enter a valid password" });
        }
      })
      .catch(err => res.status(500).json({ error: err }));
>>>>>>> 191902a68ed8e7aa45ccc7cb6c7f2285dc3888b4
  } else {
    res.status(400).json({ error: "Please provide all required fields." });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
<<<<<<< HEAD


    if(!username){
    res.status(403).json({message:'Please enter login information'}) 
    }
  db.findBy({ username })
    .first()
    .then(user => {
  
       if (user(password, user.password)) {
        // produce token
        // const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
            res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
// router.get("/logout",(req,res) =>{
//   if(req.session){
//     req.session.destroy(err =>{
//       res
//         .status(200)
//         .json({
//           message:
//           'Logout successfull'
//         })
//     })
//   }else {
//     res.status(200).json({message:'Not logged in'})
//   }
// })
=======

  // if(!username || !password){

  //   res.status(403).json({message:'Please enter login information'})
  // }
  if ({ username, password }) {
    db.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          // produce token
          const token = generateToken(user);

          // add token to response
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(404).json({ message: "User does not exist" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(401).json({ message: "invalid credentials" });
  }
});
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      res.status(200).json({
        message: "Logout successfull"
      });
    });
  } else {
    res.status(200).json({ message: "Not logged in" });
  }
});
>>>>>>> 191902a68ed8e7aa45ccc7cb6c7f2285dc3888b4
// users/
router.put("/:id", async (req, res) => {
  const id = req.params.id;

  const email = req.body.email;
  const password = req.body.password;
  const user = await db.findById(id);

  try {
    if (user) {
      if (email && password) {
        const updatedEmail = await db.updateEmail(id, email);
        const newUser = await db.findById(id);
        const updateEmail = await db.findBy({ email });
        console.log(updateEmail);
        const hash = bcrypt.hashSync(password, 10); // 2 ^ n
        user.password = hash;
        await db.updatePassword(id, hash);
        res.status(200).json({
          updates: newUser,
          message: `Password and email updated for user id # ${updatedEmail}`
        });
      } else if (email) {
        const updatedEmail = await db.updateEmail(id, email);
        const updateEmail = await db.findBy({ email }).select("id", "email");
        res.status(200).json({
          updates: updateEmail,
          message: `Email updated for user id # ${updatedEmail}`
        });
      } else if (password) {
        const hash = bcrypt.hashSync(password, 10); // 2 ^ n
        user.password = hash;
        await db.updatePassword(id, hash);
        res.status(200).json({ message: "Password updated" });
      } else {
        res
          .status(400)
          .json({ message: "Please enter email or password to update" });
      }
    } else {
      res.status(404).json({ message: "Please enter a valid password" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Uh Oh server error", errorMessage: err.message });
  }
});
// users/
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.deleteUser(id)
    .then(count => {
      if (count) {
        res
          .status(200)
          .json({ transactionID: count, message: `User # ${id} deleted` });
      } else {
        res.status(404).json({ error: "A User with that id does not exist." });
      }
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  connorDB
    .getUserById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    role: user.role
  };
  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
