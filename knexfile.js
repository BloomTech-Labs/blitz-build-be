// Update with your config settings.
require('dotenv').config('./env')
const newLocal = 'sqlite3'


module.exports = {

  // development: {
  //   client: newLocal,
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: './data/information.db3'
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //     tableName: 'knex_migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // },

  production: {
    client: 'pg',
    connection:{
      host:process.env.HOST,
      database:process.env.DATABASE,
      user:process.env.USER,
      password:process.env.PASSWORD,
      ssl:true
    },
    pool:{
      min:2,
      max:10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    }
  }

};

