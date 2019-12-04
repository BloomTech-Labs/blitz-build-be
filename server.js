const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const TemplateTasksRouter = require("./data/templates-tasks/templates-tasks-router");
const Weather = require("./data/weather/weather.router");
// const Auth = require("./data/middleware/restriced.middleware")
const delayLogsRouter = require("./data/delay-logs/delay_logs.router");
const checkJwt = require('./auth/validation')




const server = express();




function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url}`);
  next();
}





server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(logger);
// server.use('/auth',authRouter)
server.use("/projects",checkJwt, ProjectsRouter);
server.use("/projects/tasks",checkJwt,TasksRouter);
server.use("/templates",TemplatesRouter);
server.use("/projects/tasks/templates",TemplateTasksRouter);
server.use("/weather", Weather);
server.use("/delay_logs",checkJwt,delayLogsRouter);

module.exports = server;
