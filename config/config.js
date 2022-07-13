const fs = require('fs')
require('dotenv').config();
module.exports = {
  "development": {
    "username": String(process.env.DB_USERNAME_DEV),
    "password": String(process.env.DB_PW_DEV),
    "database": String(process.env.DB_DEV),
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": String(process.env.DB_USERNAME_TEST),
    "password": String(process.env.DB_PW_TEST),
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": String(process.env.DB_USERNAME_PROD),
    "password": String(process.env.DB_USERNAME_PW_PROD),
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
