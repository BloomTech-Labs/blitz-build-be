const admin = require('./Firebase-admin')

async function verify(req,res,next){
    const token = req.headers.token


        const decodedToken = await admin.auth().verifyIdToken(token);

        if(decodedToken) {
            // req.body.uid = decodedToken.uid
      
     
            return next()
        }else{
        
            
 const Refresh = req.headers.RefreshToken

 const newToken =()=>{
 axios({method: 'post',url: 'https://securetoken.googleapis.com/v1/token?key=AIzaSyBa2eSzmAvPkFNEO0zVUE0zp4IEKfFO0Kc',headers:'Content-Type: application/x-www-form-urlencoded',data:    'grant_type=refresh_token&refresh_token=AEu4IL1d4eGjjVi8qhceXB6kMBCrkUxtlGN0mUiRC5DPFwW4CqA_VJaLgmjE05jn4UHPMhdIMWTk0JKw7t2S5pTzLerGEMLQsuV1EmZtvdjplDcbuwQOrQz3ZcZagYzpX92lq2JwOai5UNIYRhWcXzM-fyVBuZLYLqVMsR4A06T8MqVMK3Y2pz-q25Sp4ZljykD73DtU7R6Eja6eoQJ4wtilxyWstsZDj3B5Td0iH3XkdwJQXT30Lavz21-t9H9rTqsd66ymA35bJhYqUb4QUJJzsGCdri2a1Q'},data=>{
   upDatedToken = data
   console.log(upDatedToken,data)
   return upDatedToken
 })  .then((newToken(Refresh),()=>{
        return newToken(Refresh) 
 }))
 .catch(err =>{console.log(err.message)})
}
        }
    }


 



    

module.exports = verify