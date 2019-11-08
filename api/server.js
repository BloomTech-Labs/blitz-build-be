const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('../routes/users-routes')
const server = express()

// define logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} request was made to ${req.url}`)
  next();
};

// Add Middleware
server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(logger)

// Add routes

server.use('/api',userRouter);


module.exports=server