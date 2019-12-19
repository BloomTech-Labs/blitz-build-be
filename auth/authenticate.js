
require('dotenv').config('./env')
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");


/** This is the only auth we handle on the BE
 *  We check if the user has an @id_token
 *  And that it is valid
*/
module.exports =(req,res,next) =>{
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:process.env.JWKSURI
     
  }),

  /** Validate the audience and the issuer.
   * With @auth0
   * */
  audience: process.env.AUDIENCE,
  issuer: `https://gannondarcy2.auth0.com/`,
  algorithms: ["RS256"],

});
  /**If the token is present we call checkJwt. 
   * If the token is valid well call next and allow the user 
   * to contiue */
    const id_token = req.headers.id_token
   if(id_token){
    checkJwt,
  
    next()

}else{
    res.status(401).json({message:"Please Login"})
}
}