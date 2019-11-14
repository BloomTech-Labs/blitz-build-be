const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const docCenter = require('../routes/docCenter-routes')
const projectsRouter = require('../routes/projects-routes')
const tasksRouter = require('../routes/tasks-router')
const register = require('../auth/authRouter')
const login = require('../auth/authRouter')
const weather = require('../routes/weather')
const Verify = require('../auth/validate')
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

// Sign in / Register 
server.use('/api',login,register)

// Add auth to routes
server.use('/api/auth',Verify,projectsRouter)
// server.use('/api/auth',Verify,templateRouter)
server.use('/api/auth',Verify,tasksRouter)
// server.use('/api/auth',Verify,docCenter)
server.use('/api/auth/:uid',Verify,weather)





module.exports=server