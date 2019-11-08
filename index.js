const server = require('./api/server')
const port = process.env.PORT || 4500
server.listen(port,()=>{
  console.log(`\n********* I work I'm Listening on Port ${port}  *******\n `)
})

