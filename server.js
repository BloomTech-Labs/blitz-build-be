const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const UsersRouter = require("./data/users/users.router");
const ProjectsRouter = require("./data/projects/projects.router");
const TasksRouter = require("./data/tasks/tasks.router");
const TemplatesRouter = require("./data/templates/templates.router");
const TemplateTasksRouter = require("./data/templates-tasks/templates-tasks-router");
const Weather = require("./data/weather/weather.router");
// const Auth = require("./data/middleware/restriced.middleware")
const delayLogsRouter = require("./data/delay-logs/delay_logs.router");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

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

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://gannondarcy2.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: "OzMg1e7JDNF7DogxPEPvGzpG7fvvDHNe",
  issuer: `https://gannondarcy2.auth0.com/`,
  algorithms: ["RS256"]
});

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter, checkJwt);
server.use("/projects/tasks", TasksRouter, checkJwt);
server.use("/templates", TemplatesRouter, checkJwt);
server.use("/projects/tasks/templates", TemplateTasksRouter, checkJwt);
server.use("/weather", Weather, checkJwt);
server.use("/delay_logs", delayLogsRouter, checkJwt);

module.exports = server;
