const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");



module.exports =(req,res,next) =>{
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://gannondarcy2.auth0.com/.well-known/jwks.json`
     
  }),

  // Validate the audience and the issuer.
  audience: "OzMg1e7JDNF7DogxPEPvGzpG7fvvDHNe",
  issuer: `https://gannondarcy2.auth0.com/`,
  algorithms: ["RS256"],

});

    const id_token = req.headers.id_token
   if(id_token){
    checkJwt,
  
    next()

}else{
    res.status(401).json({message:"Please Login"})
}
}