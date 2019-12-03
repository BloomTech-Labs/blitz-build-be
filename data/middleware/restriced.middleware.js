// const jwt = require("jsonwebtoken");
// const secrets =  process.env.SECRET;
// module.exports = (req,res,next) =>{
//     const token = req.headers.authorization;

//     if(token){
//                //Checks if token is valid
//        jwt.verify(token,secrets, (err,decodedToken) => {
//            if (err){
//                // Invalid token
//                res.status(401).json({message:"Invalid Token !!!! Please Log In"});

//            }else{
//                // Valid Token
//                req.user = decodedToken.email;
//                //Finished Moving On
//                next()
//            }
//         });
//     }else{
//         res.status(400).json({message:"Please Login"});
//     }
    
// };
