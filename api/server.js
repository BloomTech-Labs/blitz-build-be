const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const docCenter = require('../routes/docCenter-routes')
const projectsRouter = require('../routes/projects-routes')
const tasksRouter = require('../routes/tasks-router')
const register = require('../auth/authRouter')
const login = require('../auth/authRouter')
const weather = require('../routes/weather')

const newToken = require('../auth/validate')

const taskRouter = require('../routes/tasks-router')

const delayRouter = require('../routes/delay-router')

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
server.use('/api/auth',projectsRouter)

// server.use('/api/auth',,templateRouter)

// server.use('/api/auth',Verify,docCenter)

server.use('/api',newToken)

server.use('/api/auth',templateRouter)
server.use('/api/auth',delayRouter)
server.use('/api/auth/:uid',weather)
server.use('/api/auth/:uid/projects',taskRouter)






module.exports=server