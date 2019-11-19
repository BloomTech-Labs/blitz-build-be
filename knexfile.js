// Update with your config settings.
const productionConnection =
  process.env.DATABASE_URL || "postgres://localhost/postgres";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/information.db3"
    },
    useNullAsDefault: true,

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: productionConnection,

    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },

    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
