const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef =  Firebaseconfig.database().ref()
const moment = require('moment') 


                            /* Route /api/auth/:uid/projects/:project_id/tasks   */
                             
                                     //Get All Tasks
                            router.get('templates',async (req,res) =>{
                                let uid = req.headers.uid
                                let projectID = req.headers.project_id
                                
                                      dbRef.child(`/${uid}/templates`)
                                      
                                      .on('value',snap =>{
                                 
                                        let data = snap.val()
                                 
                                        console.log(data)
                            try{ 
                                if(data){
                                 res.status(200).json(data)
                                    }
                                else{
                                    res.status(404)
                                    .json(
                                        {
                                            message:'Sorry No Tasks Where Returned From Search. Please Check Your Request And Verify All Information Is Entered Correctly'
                                        })
                                }
                                }
                            catch(err)
                                {res.status(500).json({message:err.message})}
                                 })
                            })
                            

                            router.post('/:uid/templates',  async (req,res)=>{
                                let templateID = req.body.templateID
                                let body = req.body
                                let uid = req.params.uid
                         
                           await  dbRef.child(`/${uid}/templates/${templateID}`).set(
                                             
                                               {
                                                    uid:uid,
                                                    templateID:templateID,
                                                    task_name:body.task_name,
                                                    due_date:body.due_date,
                                                    task_description:body.task_description
                                            
                         
                         
                                                })
                          
                                                const templatesRef = dbRef.child(`/${uid}/templates`);
                           
                                                templatesRef.on("value",templateObj =>{
                           
                                                 console.log(templateObj.val())
                                   
                                                 let templates = templateObj.val()
                                
                             
                         
                         
                                                 try{
                         
                                                     if(templates){
                         
                                                         res.status(201)
                                                         .json({message:`Template ${body.templateID} createdAT: ${moment().format('LLL')}`,templateObj:templates})
                         
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
