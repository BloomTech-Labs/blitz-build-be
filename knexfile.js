// Update with your config settings.
require('dotenv').config('./env')
client= process.env.CLIENT
module.exports = {
    
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data.db3'
    }
  },

  staging: {
    client:  'postgres',
    connection: {
      database: '',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
