require('dotenv').config('./env')
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const UsersRouter = require("./data/users/users-router");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const TemplateTasksRouter = require("./data/templates-tasks/templates-tasks.router");
const Weather = require("./data/weather/weather.router");
const tokenVerify  = require("./data/middleware/restriced.middleware")

const server = express();
const node_env = process.env.NODE_ENV
// function logger(req, res, next) {
//   const url = req.url;
//   const method = req.method;
//   console.log(`There was a ${method} on ${url}`);
//   next();


server.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://blitz-build-dev.netlify.com",
    "https://blitz-build-dev.netlify.com/weather"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

// Notes
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(tokenVerify);
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter);
server.use("/tasks", TasksRouter);
server.use("/template/tasks", TemplateTasksRouter);
server.use("/templates", TemplatesRouter);
server.use("/weather", Weather);

module.exports = server;
