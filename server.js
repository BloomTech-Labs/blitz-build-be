const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const NinetyDayRouter = require('./data/90_day/90_day.router')
const Weather = require("./data/weather/weather.router");
// const Auth = require("./data/middleware/restriced.middleware")
const delayLogsRouter = require("./data/delay-logs/delay_logs.router");
const authenticate = require('./auth/authenticate')
const documentRouter = require('./docs/documents-router')

const server = express();




function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url} @${Date.now()}`);
  next();
}




server.use(logger);

server.use(cors());
server.use(helmet());
server.use(express.json());
// server.use('/auth',authRouter)

server.use("/projects", authenticate,ProjectsRouter);
server.use("/projects/tasks",authenticate,TasksRouter);
server.use("/templates",TemplatesRouter);

server.use("/weather", Weather);
server.use("/delay_logs",authenticate,delayLogsRouter);
// server.use('/s3',documentRouter)
server.use('/90_day',NinetyDayRouter)
server.use('/docs',documentRouter)
module.exports = server;
