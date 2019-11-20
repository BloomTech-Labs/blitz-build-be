const jwt = require("jsonwebtoken");
const secret = require("../secret.config");

module.exports = {
  tokenVerify
};

function tokenVerify(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      secret.jwtSecret,
      (err,
      decodedToken => {
        if (err) {
          res.status(401).json({ message: "invalid" });
        } else {
          req.user = {
            email: decodedToken.email,
            name: decodedToken.name
          };
          next();
        }
      })
    );
  } else {
    res.status(401).json({ message: "you do not have access" });
  }
}
