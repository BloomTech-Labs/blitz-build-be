const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

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
  algorithms: ["RS256"]
});

module.exports = checkJwt