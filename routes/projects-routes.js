const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database().ref()
const moment = require('moment')
const zipcodes = require('zipcodes')



/* **************************************Projects***************************************

                                       Route /api/auth
*/


/* Get request to /api/auth/:uid/projects will return all projects for that uid */

router.get('/:uid/projects', async (req, res) => {
    let uid = req.params.uid


    dbRef.child(`/${uid}/projects`)

        .on('value', snap => {

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
    let projectID = req.params.projectID


    dbRef.child(`${uid}/projects/${projectID}`)

        .on('value', snap => {

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
router.post('/:uid/projects',  (req, res) => {
    let body = req.body
    let projectID = req.body.project_name
   let  baths = body.baths
    let  beds = body.beds
    let uid  = req.params.uid
    let street_address = body.street_address
    let project_name = body.project_name
   let square_ft = body.square_ft
    let  city = body.city
     let state = body.state
   let  zip_code = body.zip_code
   
    // let taskObj = []
    //   let templateID = "90 Day Build"

    // Pulls the tasks stored in templates and adds them to the project
//     let tasks = Firebaseconfig.database().ref(`${uid}/templates/${templateID}`)
//    tasks.on("value",snap=>{return taskObj.push(snap.val())})

     dbRef.child(`/${uid}/projects/${projectID}`).set(

        {
            uid: uid,
            projectID: projectID,
            createdAt: moment().format('LLL'),
            lastUpdated:moment().format("LLL"),
            baths: baths,
            beds:  beds,
            status: "onTime",
            // imageURL: imageURL,
            project_name: project_name,
            square_ft: square_ft,
            street_address: street_address,
            city: city,
            state: state,
            zip_code: zip_code,
          
            gps_cords: zipcodes.lookup(zip_code)


        })
        .then("value",projetObj =>{
            let data = projetObj.val();
            res.status(201).json(data)
        })
        .catch(err =>{res.status(500).json(err)})
    })
    
// Updates a project 
router.put(`/:uid/projects/:projectID`, (req, res) => {
    let uid = req.params.uid
    let projectID = req.params.projectID
    let lastUpdated = moment().format("LLL")
    const projectsRef = dbRef.child(`/${uid}/projects/${projectID}`)
    let body = req.body
    projectsRef.update(body,lastUpdated)
    projectsRef.on("value", snap => {
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
    // let projectID = req.params.projectID
    let projectsRef = dbRef.child(`/${uid}/projects/${projectID}`)
    projectsRef.remove(() => {
        res.status(200).json({ message: "Project removed" })
    })
})


    module.exports = router