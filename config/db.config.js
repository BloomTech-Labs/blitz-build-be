require('dotenv').config('./env')
const client = require('pg')
const knex = require('knex')('production')



const knexConfig = require("../knexfile");


module.exports = knex(knexConfig.production);
