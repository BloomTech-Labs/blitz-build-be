const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const UsersRouter = require("./data/users/users-router");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const TemplateTasksRouter = require("./data/templates-tasks/templates-tasks.router");
const Weather = require("./data/weather/weather.router");
const mw = require("./data/middleware/restriced.middleware");

const server = express();

function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url}`);
  next();
}

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
server.use(logger);
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter, mw.tokenVerify);
server.use("/tasks", TasksRouter, mw.tokenVerify);
server.use("/template/tasks", TemplateTasksRouter, mw.tokenVerify);
server.use("/templates", TemplatesRouter, mw.tokenVerify);
// server.use("/weather", Weather, mw.tokenVerify);

module.exports = server;
