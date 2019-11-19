const router = require('express').Router()
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database()
const moment = require('moment')
const axios = require('axios')

router.get('/:uid/projects/:projectID/tasks', async (req, res,next) => {
    let uid = req.params.uid
    let projectID = req.params.projectID
    const tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks`);
    await tasksRef.on("value", tasksObj => {
       let tasks = tasksObj.val()
  try { 
       if (tasks) {
           res.status(200).json(tasks)}
        } 
        catch(err) {
            res.status(500).json({message: err.message})}})})


router.post('/:projectID/tasks',async(req,res)=>{
    let uid = req.header.uid
    let projectID = req.params.projectID
    let key = Date.now(moment().format('LT'))
    let body = {
           key:key,
        due_date:req.body.due_date,
        isComplete:false,
        projectID:req.params.projectID,
        task_description:req.body.task_description,
        task_name:req.body.task_name,
        createdAt:moment().format('LLL'),
        lastUpdated:moment().format('LLL')
        
              }
  


    if(body){
  
     Firebaseconfig.database().ref(`iTSHTnTwLvPXtPlVdMo87AR1KXZ2/projects/${projectID}`).child('tasks').child(key).set(body)
      .then(response =>{console.log(response)})
      .then(Firebaseconfig.database().ref(`iTSHTnTwLvPXtPlVdMo87AR1KXZ2/projects`).child('tasks').child(key).set(body))
     
   .then( res.status(201).json({message:body}))
    }else{res.status(400).json({message:'Please Make Sure All Fields Are Entered'})}


})

module.exports = router