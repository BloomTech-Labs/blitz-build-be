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
server.use("/users", UsersRouter);
server.use("/projects", ProjectsRouter);
server.use("/projects/tasks",TasksRouter);
server.use("/templates",TemplatesRouter);
server.use("/projects/tasks/templates",TemplateTasksRouter);
server.use("/weather", Weather);
server.use("/delay_logs",delayLogsRouter);

module.exports = server;
