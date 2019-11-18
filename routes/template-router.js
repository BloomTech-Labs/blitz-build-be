const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef =  Firebaseconfig.database().ref()
const moment = require('moment') 


                            /* Route /api/auth/:uid/templates  */
                             
                                     //Get all tasks/templates hard coded 
                                     router.get('/:uid/templates',  async (req,res)=>{
                                   
                                        let uid = req.params.uid
                                 
                                  
                                                        const templatesRef = dbRef.child(`/${uid}/templates`);
                                   
                                                   await     templatesRef.on("value",templateObj =>{
                                   
                                                        //  console.log(templateObj.val())
                                           
                                                         let templates = templateObj.val()
                                        
                                     
                                 
                                 
                                                         try{
                                 
                                                             if(templates){
                                 
                                                                 res.status(200)
                                                                 .json(templates)
                                 
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
               
                                

                            router.post('/:uid/templates',  async (req,res)=>{
                                let templateID = req.body.templateID
                                let body = req.body
                                let uid = req.params.uid
                                let task_name = body.task_name
                                
                           await  dbRef.child(`/${uid}/templates/${templateID}/${task_name}`).set(
                                             
                                               
                                                
                                                     
                                              { due_date:body.due_date, task_description:body.task_description,task_name:task_name}
                                            
                         
                         
                                                 )
                          
                                                const templatesRef = dbRef.child(`/${uid}/templates`);
                           
                                                templatesRef.on("value",templateObj =>{
                           
                                                //  console.log(templateObj.val())
                                   
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
