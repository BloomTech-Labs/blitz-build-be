const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef =  Firebaseconfig.database().ref()
const moment = require('moment')
const zipcodes = require('zipcodes')



/* **************************************Projects***************************************

                                       Route /api/auth
*/


/* Get request to /api/auth/:uid/projects with return all projects for that uid */

router.get('/:uid/projects',async (req,res) =>{
    let uid = req.params.uid

 
          dbRef.child(`${uid}`)
          
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
                message:'Sorry No Projects Where Returned From Search. Please Check Your Request And Verify All Information Is Entered Correctly'
            })
    }
    }
catch(err)
    {res.status(500).json({message:err.message})}
     })
})
router.get('/:uid/projects/:projectID',(req,res)=>{
let uid = req.params.uid
let projectID = req.params.projectID
dbRef.child(`${uid}/projects/${projectID}`)
          
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
      message:'Sorry No Projects Where Returned From Search. Please Check Your Request And Verify All Information Is Entered Correctly'
  })
}
}
catch(err)
{res.status(500).json({message:err.message})}
})
})
/***********************************Add Projects*************************************************
                        Post request to /api/auth/:uid/projects

************************************REQUIRED******************************************************
                                   {
                                       uid: TAKEN FROM HEADERS 
                                       templateID: 90 Day , 60 Day , 30 Day 
                                       project_name: string,
                                       baths: INT,
                                       beds: INT,
                                       imageURL: URL,
                                       square_ft: INT,
                                       status: string ***** 3 options****** onTime,Delayed,Completed,

                                   }
********************************************************************************************************
 */
router.post('/:uid/projects',  async (req,res)=>{
       let projectID = req.body.project_name
       let body = req.body
       let uid = req.params.uid
      let taskObj=[]
      let templateID = req.body.templateID
      let tasks = Firebaseconfig.database().ref(`${uid}/templates/${templateID}`)
      let task = tasks.on("value",snap=>{return taskObj.push(snap.val())})

  await  dbRef.child(`/${uid}/projects/${projectID}`).set(
                    
                      {
                           uid:req.headers.uid,
                           projectID:projectID,
                          
                           baths:body.baths,
                           beds:body.beds,
                           imageURL:body.imageURL,
                           project_name:body.project_name,
                           square_ft:body.square_ft,
                           street_address:body.street_address,
                           city:body.city,
                           state:body.state,
                           zip_code:body.zip_code,
                           status:body.status,
                           gps_cords:zipcodes.lookup(body.zip_code)


                       })
                    
                       const projectsRef = dbRef.child(`/${uid}/projects/${projectID}`);
                       projectsRef.update({tasks:taskObj})
                       projectsRef.on("value",projectsObj =>{
  
                        console.log(projectsObj.val())
          
                        let data = projectsObj.val()
       
    


                        try{

                            if(data){

                                res.status(201)
                                .json({message:`Project ${body.project_name} createdAT: ${moment().format('LLL')}`,projectObj:data})

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
router.put(`/:uid/projects/:projectID`,(req,res)=>{
    let uid = req.params.uid
    let projectID = req.params.projectID
const projectsRef = dbRef.child(`/${uid}/projects/${projectID}`)
let body = req.body
projectsRef.update(body)
projectsRef.on("value",snap=>{
     let newProjectObj = snap.val()
   if(newProjectObj){
       res.status(201).json({message:`${projectID} updated @ ${moment().format('LLL')}`,newProjectObj})
   }else{
       res.status(403).json({message:"Please check the request body"})
   }
})


})
module.exports = router