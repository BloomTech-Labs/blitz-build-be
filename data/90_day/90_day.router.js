const router = require("express").Router();
const db = require('./90_day.model')



router.get('/',(req,res) =>{
   db.get()
   .then(templates =>{
       res.status(200).json(templates)
   })
   .catch(err =>{res.status(400).json(err)})
})

module.exports=router