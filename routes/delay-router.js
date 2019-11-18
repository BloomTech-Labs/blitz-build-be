const router = require('express').Router();
const Firebaseconfig = require('../Firebaseconfig')
const dbRef = Firebaseconfig.database().ref()
const moment = require('moment')



// Get delay log

router.post('/:uid/delays',async (req,res)=>{
    let body = req.body
    let uid = req.params.uid
   let projectId = req.body.projectId
    let projectName = body.projectName
    let taskId = body.taskId
    let taskName = body.taskName
    let  reason = body.reason
    let key = Date.now()
   let  username = body.username
  if(!null){
  let delayRef = await dbRef.child(`/${uid}/delay_logs`).child(`${key}`)
 .set(
  
      {
          delay_id:key,
          uid: uid,
          projectId:projectId,
          projectName:projectName,
          taskId:taskId,
          taskName:taskName,
          reason:reason,
          timestamp:moment().format("LLL"),
          username:username
      })
  
      dbRef.child(`/${uid}/delay_logs`).once("value",delayObj =>{
  res.status(201).json(delayObj.val())
  }).catch(err =>{res.status(500).json({message:err.message})})

}})

router.get('/:uid/delay_logs',(req,res)=>{
   let uid = req.params.uid
dbRef.child(`/${uid}/delay_logs`).once("value",delayObj=>{
     if(delayObj){
    res.status(200).json(delayObj)
     }else (err)=>{
         res.status(500).json(err)
     }
})  
  
})
router.get('/:uid/delay_logs/')

router.get('/set',(req,res)=>{
    Firebaseconfig.database().ref('/iTSHTnTwLvPXtPlVdMo87AR1KXZ2').set("Mike")
    dbRef.once('value', snap=>{
        res.status(201).json(snap.val())
    })
  
})
module.exports= router