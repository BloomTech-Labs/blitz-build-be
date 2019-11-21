const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const docCenter = require('../routes/docCenter-routes')
const projectsRouter = require('../routes/projects-routes')
const tasksRouter = require('../routes/tasks-router')
const register = require('../auth/authRouter')
const login = require('../auth/authRouter')
const weather = require('../routes/weather')
const validate = require('../auth/validate')
const newToken = require('../auth/validate')

const server = require('express')

const delay = require('../routes/delay-router')



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
server.use('/auth/:uid/projects',projectsRouter)
server.use('/',login,register,newToken)
server.use('/auth/:uid/delay',delay)
// Add auth to routes
server.use('/auth',tasksRouter)


// server.use('/api/auth',,templateRouter)

// server.use('/api/auth',Verify,docCenter)











module.exports=server