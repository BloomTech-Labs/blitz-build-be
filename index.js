require('dotenv').config('./env')
const server = require('./api/server')



server.get('/auth',(req,res)=>{
  res.send('<h1>I Work</h1>')
})

const port = process.env.PORT || 4500
server.listen(port,()=>{
  console.log(`\n********* I work I'm Listening on Port ${port}  *******\n `)
})

