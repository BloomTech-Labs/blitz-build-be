require('dotenv').config('.env')
const router = require('express').Router()
const token = process.env.TOKEN
const TMClient = require('textmagic-rest-client');
router.post('/remind',(req,res,next)=>{
  let phone = +12532057177
var c = new TMClient('michaelharley', token);
c.Messages.send({text:'This Is Blitz Build Your Tasks Are Do Today', phones:phone}, function(err, res){
    console.log('Messages.send()', err, res);
   next()
})
});;

module.exports=router