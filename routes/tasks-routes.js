const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef =  Firebaseconfig.database().ref()
const moment = require('moment') 


                            /* Route /api/auth/:uid/projects/:project_id/tasks   */
                             
                                     //Get All Tasks
                                     router.get('/:project_id/tasks',  async (req,res)=>{
                          try{      let projectID = req.params.project_id
                                    
                                        let uid = req.headers.uid
                                      
                                    await  dbRef.child(`/${uid}/projects/${projectID}/tasks`).on('value',snap=>{
                                                            let data = snap.val()
                                                        
                                   
                                    
                                                     
                                     
                                    
                                    
                                                  
                                    
                                                             if(data){
                                    
                                                                 res.status(200)
                                                                 .json(data)                                    
                                                             }
                                                             else{
                                                                 res.status(404).json({message:'Sorry No Tasks Where Returned From Search. Please Check Your URL'})
                                                             }})
                                    
                                                         }
                                    
                                                         catch
                                                         
                                                         (err)
                                                         {
                                                             res.status(500)
                                                             
                                                             .json(
                                                                 {
                                                                     message:err.message
                                                                 }
                                                                 )
                                                         }
                                    
                                    
                                    
                                    })
                                    
                                    


router.post('/:project_id/tasks',  async (req,res)=>{
    let projectID = req.params.project_id
    let body = req.body
    let uid = req.headers.uid
    let taskID = req.body.task_id
await  dbRef.child(`/${uid}/projects/${projectID}/tasks/${taskID}`).set(
                 
                   {
                        uid:uid,
                        project_id:projectID,
                        task_id:taskID,
                        task_name:body.task_name,
                        due_date:body.due_date,
                        task_description:body.task_description
                       


                    })

                    const tasksRef = dbRef.child(`/${uid}/projects/${projectID}/tasks`);

                    tasksRef.on("value",tasksObj =>{

                     console.log(tasksObj.val())
       
                     let data = tasksObj.val()
    
 


                     try{

                         if(data){

                             res.status(201)
                             .json({message:`Task ${body.task_name} createdAT: ${moment().format('LLL')}`,tasksObj:data})

                         }

                     }

                     catch
                     
                     (err)
                     {
                         res.status(500)
                         
                         .json(
                             {
                                 message:err.message
                             }
                             )
                     }



})

})
module.exports = router