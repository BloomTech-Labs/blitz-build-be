const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('../routes/users-routes')
const projectsRouter = require('../routes/projects-routes')
const authRouter = require('../auth/authorized')
const register = require('../auth/authRouter')
const login = require('../auth/authRouter')
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





module.exports=server