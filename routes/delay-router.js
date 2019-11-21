require('dotenv').config('./env')

let uid;
const router = require('express').Router()
const Firebaseconfig = require('../Firebaseconfig')
const admin = require('../auth/Firebase-admin')
const dbRef = Firebaseconfig.database().ref(`${uid}`)
const moment = require('moment')



// Get delay log



router.get('/:uid/delay-logs',(req,res)=>{
   let uid = req.params.uid
dbRef.child(`/${uid}/delay-logs/`).once("value",delayObj=>{
     if(delayObj){
    res.status(200).json(delayObj)
     }else (err)=>{
         res.status(500).json(err)
     }
})  
  console.log(req.body)
})
router.delete('/:uid/delay_logs/:delay_id/',(req,res)=>{
     let uid = req.params.uid
     let delay_id = req.params.delay_id
    let removeTask = dbRef.child(`/${uid}/delay_logs/${delay_id}`)
    removeTask.remove()
   .then(()=>{
       res.status(200).json({message:delay_id + "deleted @" + moment().format('LLL')})
   })
   .catch(err =>{
       res.status(500).json(err.message)
   })
    
})
  
router.put('/:uid/delay_logs/:delay_id/',(req,res)=>{
   let uid = req.params.uid
   let delay_id = req.params.delay_id
   let updates = req.body
  let delayRef = dbRef.child(`/${uid}/delay-logs/`).child(`${delay_id}`)
   delayRef.update(updates)
   delayRef.update({lastUpdated:moment().format('LLL')});
    delayRef.once("value",updatedLog=>{
        res.status(200).json(updatedLog)
    })
    .catch(err =>{res.status(400).json(err.message)})
})

router.post('/delays',(req,res)=>{
    console.log(req.headers.uid)

   console.log(req)
 let body = {
     
    uid:req.headers.uid,

    projectName : req.body,
      taskId  : req.taskID,
      taskName : req.taskName,
       reason : req.reason,
      key : Date.now(),
username :  req.headers.uid
 }
 let createdAt= moment().format("LLL")

   Firebaseconfig.database().ref().child(`${uid}/delays/`).set(

   {...body,createdAt:createdAt})
   console.log('hello')
  .then(dbRef.once("value",snap=>{
     console.log(snap.val())
      res.status(200).json(snap.val())
    
   }))
.catch(err =>{res.status(500).json({message:err.message})})}

)

module.exports = router