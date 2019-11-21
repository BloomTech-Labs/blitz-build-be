
const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database().ref()
const moment = require('moment')
const key = Date.now()

/* Route /api/auth/:uid/projects/:projectID/tasks  */

//Get all tasks for a project


router.put('/:uid/tasks/:taskID', async (req, res) => {
    console.log(req.body)
    let uid = req.params.uid
    let updates = req.body
    let projectID = req.body.projectID
    let taskID = req.params.taskID
    
    let taskRef =  dbRef.child(`/${uid}/tasks/${taskID}/`) 
    let projects = dbRef.child(`${uid}/projects/${projectID}/tasks/${taskID}`)

   await taskRef.update({...updates,lastUpdated:moment().format('LLL')})
    taskRef.once("value",snap=>{res.status(201).json(snap.val())})
    projects.update({...updates,lastUpdated:moment().format('LLL')})
    projects.on("value",snap=>{console.log(snap.val())})
   
   .catch(error =>{ res.status(500).json(error.message)})
})
// Get all tasks for all projects for user


router.get('/:uid/tasks', async (req, res) => {

    let uid = req.params.uid
    let projectID = req.params.projectID

    const tasksRef = dbRef.child(`/${uid}/tasks`)

     tasksRef.once("value", tasksObj => {
  
      
      res.status(200).json(tasksObj.val())})
   .catch(err =>  { res.status(500).json({message: err.message})})
})
    
         
    


router.post('/:uid/tasks', async (req, res) => {

    let body = req.body
    let uid = req.params.uid
    let taskID = req.body.taskID
    let projectsID= req.body.projectID
     let createdAt = moment().format('LLL') 
     let taskRef = dbRef.child(`${uid}/tasks/`)  
let projectsRef = dbRef.child(`${uid}/projects/${projectsID}/`)
taskRef.child(`${taskID}/`).set({...body,createdAt})
projectsRef.update({taskID})
dbRef.child(`${uid}/projects/${projectsID}/`).child('tasks/').child(`${taskID}`).set({...body,createdAt})
dbRef.once("value",snap=>{console.log(snap.val())})
taskRef.once("value",snap =>{res.status(200).json(snap.val())})

})
//Delete Tasks

router.delete('/:uid/projects/:projectID/tasks/:taskID', async (req, res) => {
    let uid = req.params.uid
    let body = req.body

    let projectID = req.params.projectID
    let taskID = req.params.taskID
    let tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks/${taskID}`)
    let taskRef = dbRef.child(`/${uid}/tasks/${taskID}`)


      
        //  let updates= {...body,lastUpdated}
    tasksRef.remove()
    taskRef.remove()
        .then(delObj => {
            res.status(200).json({ message: `${taskID} deleted ${moment().format('LLL')}`, delObj })
        })
})






module.exports = router
