// Update with your config settings.
require("dotenv").config("./env");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    
      ssl: true,
    
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
    connection:process.env.DATABASE_URI,
    ssl:true,
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
