// Update with your config settings.
require("dotenv").config("./env");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      ssl: true
    },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: "./data/migrations",
        tableName: "knex_migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
  },


  production: {
    client: "pg",
    connection:process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
