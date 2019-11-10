const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef =  Firebaseconfig.database().ref()

const projectsRef = dbRef.child('projects');
const projects = require('../projects.json');
// Route /api/auth

router.get('/projects',async (req,res) =>{
    let uid = req.headers.uid
    let body = req.body
  Firebaseconfig.database().ref(uid)
  projectsRef.on('value',snap =>{
      let data = snap.val()
      console.log(data)
  })
})


router.post('/projects',  async (req,res)=>{
       let body = req.body
    dbRef.child('/projects/').update(body);
   projectsRef.on('value',snap =>{
    let data = snap.val()
try{
    if(data){
        res.status(201).json(data)
    }else{
        res.status(500).json({message:error.message})
    }
}
catch(err){res.status(500).json({message:err.message})}



   })
})

module.exports = router