// check to see if the user is logged in
require('dotenv').config()
module.exports =()=>{
  

const admin = require('firebase-admin')
const Admin =   admin.initializeApp({
  credential:admin.credential.applicationDefault(),
  databaseURL:process.env.DATABASE_URL
})
}
