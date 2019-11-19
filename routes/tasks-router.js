const router = require('express').Router()
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database()
const moment = require('moment')
  

// api/auth/:uid/projects

router.get('/tasks', async (req, res,next) => {
    let uid = req.params.uid
    let projectID = req.params.projectID
    const tasksRef = dbRef.ref(`${uid}/projects/`).child(`/${projectID}/tasks/`);
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
  
     Firebaseconfig.database().ref(`${uid}/projects/${projectID}`).child('tasks').child(key).set(body)
      .then(response =>{console.log(response)})
      .then(Firebaseconfig.database().ref(`${uid}/projects`).child('tasks').child(key).set(body))
     
   .then( res.status(201).json({message:body}))
    }else{res.status(400).json({message:'Please Make Sure All Fields Are Entered'})}


})
router.put('/:projectID/tasks/:taskID', async (req, res) => {

    let uid = req.params.uid
    let updates = req.body  
    let projectID = req.params.projectID
    let taskID = req.params.taskID
    let tasksRef =  dbRef.child(`/${uid}/projects/${projectID}`).child('/tasks/').child(`${taskID}`)
    let taskRef =  dbRef.child(`/${uid}/tasks/${taskID}/`)

    tasksRef.update(updates);
    tasksRef.update({lastUpdated:moment().format('LLL')});

     taskRef.update(updates);
     taskRef.update({lastUpdated:moment().format('LLL')});
   taskRef.once("value",updatedTasks =>{return updatedTasks})
   .then(tasksRef.once("value",updateTasks=>{res.status(200).json(updateTasks.val())}))
   .catch(error =>{ res.status(500).json(error.message)})
})
router.delete('/:projectID/tasks/:taskID', async (req, res) => {
    let uid = req.params.uid
  

    let projectID = req.params.projectID
    let taskID = req.params.taskID
    let tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks/${taskID}`)
    let taskRef = dbRef.child(`/${uid}/tasks/${taskID}`)


      
      
    tasksRef.remove()
    taskRef.remove()
        .then(delObj => {
            res.status(200).json({ message: `${taskID} deleted ${moment().format('LLL')}`, delObj })
        })
})

module.exports = router