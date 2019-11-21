// check to see if user is logged in
const admin = require('firebase-admin');;

module.exports = (req,res,next) => {
    const token = req.headers.token;
   
    if (token) {
        //check if token is valid
        admin.auth().verifyIdToken(token,(err, decodedToken) => {
            console.log(token)
            if (err) {
                //Invalid token
                res.status(401).json({message:"Invalid Token!!!!! Please Log In Again"});
            }
            next()
            }
          );
                //Finish with this middleware onto the next
              
            
         
            
  

      
    }else{  res.status(400).json({message: "Please Login"});}
};