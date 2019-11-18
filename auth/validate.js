const admin = require('./Firebase-admin')
const axios = require('axios')
let reFresh;
const WithAuth = axios.create({ headers: { 
  'Content-Type': 'application/x-www-form-urlencoded',
  'data': `grant_type=refresh_token&refresh_token=${reFresh}`
}});

async function verify(req,res,next){
 
    let token = req.headers.token
    let reFresh= req.headers.refreshToken

        const decodedToken = await admin.auth().verifyIdToken(token);
      
        if(decodedToken) {
            // req.body.uid = decodedToken.uid
      
     
            return next()
       }else{
         res.status(401).json({message:'Please Login'})
       
        
            
//  const Refresh = req.headers.RefreshToken

 const newToken =()=>{
   WithAuth().post('https://securetoken.googleapis.com/v1/token?key=AIzaSyBa2eSzmAvPkFNEO0zVUE0zp4IEKfFO0Kc',reFresh)
   .then(data =>{
   upDatedToken = data
   console.log(upDatedToken,data)
   if(data){
   return newToken
   }else(error)
    return res.status(500).json(error)
   
 })  
 .catch(err =>{console.log(err.message)})
}
         
 } }
module.exports= verify

 



    

