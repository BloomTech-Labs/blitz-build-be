// check to see if theuser is logged in
require('dotenv').config()
const jwt = require('jsonwebtoken');

const secrets = process.env.SECRETS;

module.exports = (req,res,next) => {
    const token = req.headers.authorization;
   
    if (token) {
        //check if token is valid
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                //Invalid token
                res.status(401).json({message:"Invalid Token!!!!! Please Log In Again"});
            }else{
                // Valid token
                req.user = decodedToken.username ;
       
                //Finished with this middleware onto the next
                
            
                next()
            }
        });
    } else {
        res.status(400).json({message: "Please Login"});
    }
};