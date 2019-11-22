require('dotenv').config('./env')
const knex = require('knex')('production')



const knexConfig = require("../knexfile");

CLIENT=postgres
module.exports = knex(knexConfig.production);
