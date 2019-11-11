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

/***********************************Add Projects*************************************************
                        Post request to /api/auth/:uid/projects

************************************REQUIRED******************************************************
                                   {
                                       uid: TAKEN FROM HEADERS 
                                       projectID: string,
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
       let projectID = req.body.projectID
       let body = req.body
       let uid = req.params.uid
       let tasks = [
             {"due_date":String,"task_description":String,"task_name":String}        
    
    ]
  await  dbRef.child(`/${uid}/projects/${projectID}`).set(
                    
                      {
                           uid:req.headers.uid,
                           projectID:body.projectID,
                        
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
 
                       const projectsRef = dbRef.child(`/${uid}/projects`);
  
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
module.exports = router