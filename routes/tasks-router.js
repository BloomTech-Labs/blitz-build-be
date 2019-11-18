const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database().ref()
const moment = require('moment')
const key = Date.now()

/* Route /api/auth/:uid/projects/:projectID/tasks  */

//Get all tasks for a project
router.get('/:uid/projects/:projectID/tasks', async (req, res) => {

    let uid = req.params.uid
    let projectID = req.params.projectID

    const tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks`);

    await tasksRef.on("value", tasksObj => {

        //  console.log(templateObj.val())

        let tasks = tasksObj.val()
  try { 
       if (tasks) {
           res.status(200).json(tasks)}
        } 
        catch(err) {
            res.status(500).json({message: err.message})}})})

// Get tasks by filter 
router.get('/:uid/projects/:projectID/tasks/:filter', async (req, res) => {
    let filter = req.params.filter
    let uid = req.params.uid
    let projectID = req.params.projectID

    const tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks`);

    await tasksRef.orderByChild(`/tasks/${filter}`)
        .on("value", tasksObj => {

            //  console.log(templateObj.val())

            let tasks = tasksObj.val()
            try {
                if (tasks) {
                    res.status(200).json(tasks)
                }
            } catch (err) {
                res.status(500).json({
                    message: err.message
                }
                )
            }



        })

})
router.put('/:uid/projects/:projectID/tasks/:taskID', async (req, res) => {
    let uid = req.params.uid
    let body = req.body
    let projectID = req.params.projectID
    let taskID = req.params.taskID
    let tasksRef = await dbRef.child(`/${uid}/projects/${projectID}/tasks/${taskID}/`)
    let taskRef =  dbRef.child(`/${uid}/tasks/${taskID}/`)

    tasksRef.update(body);
    tasksRef.update({lastUpdated:moment().format('LLL')});
    taskRef.update(body)
    taskRef.update({lastUpdated:moment().format('LLL')})
   taskRef.once("value",updatedTask =>{res.status(200).json(updatedTask.val())})
})
// Get all tasks for all projects for user

router.get('/:uid/tasks', async (req, res) => {

    let uid = req.params.uid


    const tasksRef = dbRef.child(`/${uid}/tasks`).orderByChild('task_name').on("value", tasksObj => {
        let tasks = tasksObj.val()
try {if (tasks) {
                res.status(200).json(tasks)     
            }
            } catch
               (err) {res.status(500).json(
                    {
                        message: err.message
                    })}})})
router.get('/:uid/projects/:projectID/tasks', async (req, res) => {

    let uid = req.params.uid
    let projectID = req.params.projectID

    const tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks`).orderByChild('/id');

    await tasksRef.once("value", tasksObj => {
        console.log(tasksObj.val())
        //  console.log(templateObj.val())

        let tasks = tasksObj.val()
        try {if (tasks) 
            { res.status(200).json(tasks)}
       } catch
    (err) {
            res.status(500).json({message: err.message})
        }



    })

})

router.post('/:uid/projects/:projectID/tasks', async (req, res) => {

    let body = req.body
    let uid = req.params.uid
    let projectID = req.params.projectID
    let task_name = body.task_name
    let due_date = req.body.due_date
    let task_description = req.body.task_description
  
     let isComplete = false
     let createdAT = moment().format("LLL")
     let lastUpdated = moment().format("LLL")
    let newDataRef = await dbRef.child(`/${uid}/projects/${projectID}`).child('/tasks/').child(`${key}`).set({
             taskID:key,
            due_date:due_date,
            projectID: projectID,
            task_description: task_description,
            task_name: task_name,
            isComplete:  isComplete,
            lastUpdated:lastUpdated,
            createdAT:createdAT
        })
    dbRef.child(`/${uid}/projects/${projectID}/tasks`).once("value", tasksObj => {

        let tasks = tasksObj.val()
        let keys = tasksObj.key
        dbRef.child(`/${uid}`).child(`${keys}`).set(tasks)
        try {
            if (tasks) {
                res.status(201).json({ message: `Task createdAT: ${moment().format('LLL')}`, tasksObj: tasksObj, })

            }


        } catch (err) { res.status(500).json({ message: err.message }) }
    })
    dbRef.child(`/${uid}/projects/${projectID}/tasks`).orderByChild(`key`)
})

//Delete Tasks

router.delete('/:uid/projects/:projectID/tasks/:taskID', async (req, res) => {
    let uid = req.params.uid
    let body = req.body

    let projectID = req.params.projectID
    let taskID = req.params.taskID
    let tasksRef = dbRef.orderByKey(`/${uid}/projects/${projectID}/tasks/${taskID}`)
    let taskRef = dbRef.child(`/${uid}/tasks/${taskID}`)
    let createdAT = body.createdAT
    let lastUpdated = moment().format("LLL")
      
         let updates= {...body,lastUpdated}
    tasksRef.remove()
    taskRef.remove()
        .then(delObj => {
            res.status(200).json({ message: `${taskID} deleted ${moment().format('LLL')}`, delObj })
        })
})

module.exports = router
