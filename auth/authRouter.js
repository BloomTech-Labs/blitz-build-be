require('dotenv').config()
const router = require('express').Router();
const moment = require('moment')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Firebaseconfig = require('../Firebaseconfig')
const admin = require('firebase-admin')

const secrets = process.env.SECRETS;
admin.initializeApp({
  credential:admin.credential.applicationDefault(),
  databaseURL:process.env.DATABASE_URL
})
// for endpoints beginning with /api
router.post('/register',(req,res) =>{
  let user = req.body

  admin.auth().createUser({
    email:user.email,
    emailVerified:false,
    phoneNumber:user.phoneNumber,
    password:user.password,
    displayName:user.displayName,
  
    disabled:false
  })
  .then(userRecord =>{
    res.status(201).json({message:`Sucessfully created new users: ${userRecord.displayName} @ ${moment().format('LLL')}`,
                             userObj:userRecord})

  })
  .catch(error =>{
     res.status(401).json({message:`Error creating new user:${error}`})
  })
})
// Update User 
router.put('/:uid/updateuser',(req,res) =>{
 let uid = req.params.uid
 console.log('IAM THE BODY LOG',req.body.photoURL)
admin.auth().updateUser(uid,{
  email: req.body.email,
  phoneNumber: req.body.phoneNumber,
  emailVerified: req.body.emailVerified,
  password: req.body.password,
  displayName: req.body.displayName,
  photoURL: req.body.photoURL,
  disabled: req.body.disabled
})
.then(updatedUserObj =>{
 res.status(200).json({message:`Sucessfully updated user @ ${moment().format('LLL')}`,updatedUserObj:updatedUserObj})
})
.catch(error =>{
  console.log('Error updating user',error)
})
})
// Login 
router.post('/login', (req, res) => {
    let { email, password } = req.body;

    // Make sure email and password are entered
   
    if(!email || !password){
      
      res.status(403).json(
          {message:'Please enter login information'}
          ) 
    }
    // Call to firebase to auth the login info
 
    Firebaseconfig.auth()
    .signInWithEmailAndPassword(email,password)
    
    .then(userObj =>{
    
        // Firebase will return a refresh  token 
    
        //pass it to the client so they can display it in the headers
    
        res.status(200)
        .json(
            {message:`${userObj.user.email} signed in @ ${moment().format('LLL')}`
            ,token:userObj.user.refreshToken})
  
  })
})






//     db.findBy({ username })
//       .first()
//       .then(user => {
    
//          if (user && bcrypt.compareSync(password, user.password)) {
//           // produce token
//           const token = generateToken(user);
  
//           // add token to response
//           res.status(200).json({
//             message: `Welcome ${user.username}!`,
//             token,
//           });
//         } else {
//           res.status(404).json({ message: 'User does not exist' });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });
router.put('/username/update', (req, res) => {
  const username = req.params.username;
  const changes = req.body;


  if(changes) {
      Receipts.updateReceipt(username, changes)
          .then(count => {
              if(count){ 
              res.status(202).json(count);
               }else{ res.status(404).json({ error: "Please enter a valid password" })
          }})
          .catch(err => res.status(500).json({ error: err }));
  } else {
      res.status(400).json({ error: "Please provide all required fields." });
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  
  if(!username || !password){
    
    res.status(403).json({message:'Please enter login information'}) 
  }
  db.findBy({ username })
    .first()
    .then(user => {
  
       if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(404).json({ message: 'User does not exist' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.get("/logout",(req,res) =>{
  if(req.session){
    req.session.destroy(err =>{
      res
        .status(200)
        .json({
          message:
          'Logout successfull'
        })
    })
  }else {
    res.status(200).json({message:'Not logged in'})
  }
})


function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    role: user.role,
  };
  const options = {
    expiresIn: '8h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;