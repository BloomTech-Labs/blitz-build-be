const admin = require('./Firebase-admin')

const axios = require('axios')
const router = require('express').Router()


router.post('/auth/getToken',(req,res)=>{
  let refresh_token = req.headers.refresh_token
  console.log(refresh_token)
 let headers = {'Content-Type':'application/x-www-form-urlencoded'}

  const body = {grant_type:'refresh_token',refresh_token:`${refresh_token}`}

 
  axios.post('https://securetoken.googleapis.com/v1/token?key=AIzaSyBa2eSzmAvPkFNEO0zVUE0zp4IEKfFO0Kc',body,headers)

  .then(res =>{
    if(!error){
     console.log('newToken',newToken)
     
     res.status(200)
    }else{
   
    }
  })
.catch(err =>{console.log(err)})
 
})
module.exports=router
 



    

