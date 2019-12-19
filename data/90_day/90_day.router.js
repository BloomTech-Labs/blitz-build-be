const router = require("express").Router();
const db = require('./90_day.model')
const taskDB = require('../tasks/tasks.model')
const moment = require('moment')



/** A @GET to @URL/90_day
 * @returns the 90_day template
 */
router.get('/', (req, res) => {
    db.get()
        .then(templates => {
            res.status(200).json(templates)
        })
        .catch(err => { res.status(400).json(err) })
})
/**  @POST 
 *   @URL/90_day
 * @required 
 * @body = project_id 
 * It will adds a list of tasks to the @tasks_table
 * using the @project_id as A @FK  
 * 
 */
router.post('/', (req, res) => {
    console.log(req.headers)
    const project_id = req.body.project_id
    let tasks = []
    let user_id = req.headers.user_id

    db.get()

        .then(data => {
            
            console.log(tasks.push(data.map(function (response) { return { "task_name": response.task_name,createdAt:moment().format('L') ,'due_date': "", 'isComplete': false, "task_description": response.task_description, "project_id": project_id, 'user_id': user_id,template_name:"90_day" } })))
        })
        .then(() => {
            // taskDB.addTasks(tasks)
            tasks.forEach(task => {
                taskDB.addTasks(task)
                    .then(resp => {
                        if (resp) {
                            res.status(200).json({ "Added": moment().format('L'), tasksArr: resp })
                        } else {
                            res.status(403).json({ message: err.message })
                        }
                    })
            })

        }).catch(err => { res.status(500).json(err) })

})
module.exports = router