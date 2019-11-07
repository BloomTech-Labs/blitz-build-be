const express = require('express');

const cors = require('cors')
const helmet = require('helmet')
const server = express(helmet(cors))







server.get('/',(req,res)=>{
    res.status(200).send({messesage:'I Work'})

} )

server.listen(5000,()=>{
    console.log('Server running on 5000')
})


module.exports =  server