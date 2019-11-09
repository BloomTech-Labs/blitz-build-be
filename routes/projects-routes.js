const router = require('express').Router();
const Firebase = require('../Firebase')
const dbRef =  Firebase.database().ref()

const projectsRef = dbRef.child('projects');
const projects = require('../projects.json');
// Route /api

router.post('/projects/0',  async (req,res)=>{
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