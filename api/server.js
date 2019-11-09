const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('../routes/users-routes')
const projectsRouter = require('../routes/projects-routes')
const authRouter = require('../auth/authorized')
const register = require('../auth/authRouter')
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

// Add auth route for testing
server.use('/auth',authRouter)
server.use('/api',register)

// Add routes

server.use('/api/users',authRouter,userRouter);
server.use('/api/projects',authRouter,projectsRouter);


module.exports=server