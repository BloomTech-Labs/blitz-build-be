require('dotenv').config('./env')
const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database().ref()
const admin = require('../auth/Firebase-admin')
const moment = require('moment')
const zipcodes = require('zipcodes')



/* **************************************Projects***************************************

                                       Route /api/auth
*/


/* Get request to /api/auth/:uid/projects will return all projects for that uid */

router.get('/:uid/projects', (req, res) => {
    let uid = req.params.uid
    const projectsRef = dbRef.child(`${uid}/projects/`)

   projectsRef
        .once('value', snap => {

            let data = snap.val()


            try {
                if (data) {
                    res.status(200).json(data)
                }
                else {
                    res.status(404)
                        .json(
                            {
                                message: 'Sorry No Projects Where Returned From Search. Please Check Your Request And Verify All Information Is Entered Correctly'
                            })
                }
            }
            catch (err) { res.status(500).json({ message: err.message }) }
        })
})
/* Return single project */

router.get('/:uid/projects/:projectID', (req, res) => {
    let uid = req.params.uid
    const projectsRef = dbRef.child(`${uid}/projects/`)


        projectsRef.once('value', snap => {

            let data = snap.val()

            try {
                if (data) {
                    res.status(200).json(data)
                }
                else {
                    res.status(404)
                        .json(
                            {
                                message: 'Sorry No Projects Where Returned From Search. Please Check Your Request And Verify All Information Is Entered Correctly'
                            })
                }
            }
            catch (err) { res.status(500).json({ message: err.message }) }
        })
})
/***********************************Add Projects*************************************************
                        Post request to /api/auth/:uid/projects

************************************REQUIRED******************************************************
                                   {
                                       uid: TAKEN FROM HEADERS 
                                       templateID: 90 Day , 60 Day , 30 Day 
                                       project_name: string,
                                       baths: num,
                                       beds: num,
                                       imageURL: URL,
                                       square_ft: INT,
                                       status: string ***** 3 options****** onTime,Delayed,Completed,

                                   }
********************************************************************************************************
 */
router.post('/', (req, res) => {
   
    let body = req.body
     let zipcode = req.body.zip_code
    let uid  = req.params.uid
    let gpsCords = zipcodes.lookup(zipcode)
     let projectID = req.body.project_name
      
     console.log(projectID)
     const projectsRef = dbRef.child(`${uid}/projects/`)
 
     projectsRef.child(`${projectID}`).set({...body,uid,projectID,gpsCords})
     projectsRef.once("value",snap=>{res.status(200).json(snap.val())})

    //  dbRef.once("value",projectObj   => {
      
// console.log(projectObj.val())
//        return res.status(201).json(`${projectObj.val()}`)
    })
   


    
       
  
    
// Updates a project 
router.put(`/:uid/projects/:projectID`, (req, res) => {
    console.log(req.body)
    let uid = req.params.uid
    let projectID = req.params.projectID
    let lastUpdated = moment().format("LLL")
    const projectsRef = dbRef.child(`/${uid}/projects/${projectID}/`)
    let body = req.body
    projectsRef.update({...body});
    projectsRef.update({lastUpdated});
    projectsRef.once("value", snap => {
        let newProjectObj = snap.val()
        if (newProjectObj) {
            res.status(201).json({ message: `${projectID} updated @ ${moment().format('LLL')}`, newProjectObj })
        } else {
            res.status(403).json({ message: "Please check the request body" })
        }
    })

  
})
  
//Removes a project 
router.delete('/:uid/projects/:projectID', (req, res) => {
    let uid = req.params.uid
    let projectID = req.params.projectID
    // let projectID = req.params.projectID
    let projectsRef = dbRef.child(`/${uid}/projects/${projectID}`)
    projectsRef.remove(() => {
        res.status(200).json({ message: "Project removed" })
    })
})


    module.exports = router
