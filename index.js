require('dotenv').config('./env')
const server = require('./server')
require('./Firebaseconfig')
require('./auth/Firebase-admin')




server.get('/',(req,res)=>{
  res.send('<title>Blitz Build</title><h1>Welcome To Blitz Build</h1>')
})

const port = process.env.PORT || 4500
server.listen(port,()=>{
  console.log(`\n********* I work I'm Listening on Port ${port}  *******\n `)
})

