require('dotenv').config('./env')
module.exports = {
    jwtSecret:process.env.SECRET || "keep it on the dl" ,

}