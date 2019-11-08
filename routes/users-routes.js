const router = require('express').Router();

const Users = require('../helpers/users-helper')

router.get('/all', async (req,res) =>{
   const users = await Users.find()
  try{
        if(users){
            res.status(200).json(users)
        }else{
            res.status(400).json({message:'No User Try Again Dummy'})
        }
    }
        catch(err){ res.status(500).json({message:"I fucked up server broken", error:err.message})}
})

module.exports = router