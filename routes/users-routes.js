
const router = require('express').Router();
const Firebase = require('../Firebase')
const dbRef =  Firebase.database().ref()
 const usersRef =  dbRef.child('users')

// route /api

// GET ALL 
router.get('/all', async (req,res) =>{
  dbRef.on('value',snap =>{
     let data = snap.val()
      
  try{
        if(data){
      
            res.status(200).json({data})
        }else{
            res.status(400).json({message:'No User Try Again Dummy'})
        }
    }
        catch(err){ res.status(500).json({message:"I fucked up server broken", error:err.message})}
})})

module.exports = router