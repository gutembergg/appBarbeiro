import * as dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports =
{
    "type": process.env.APP_DATABASE_TYPE || "postgres",
    "host": process.env.APP_HOST,
    "port": process.env.APP_PORT,
    "username": process.env.APP_USER,
    "password": process.env.APP_PASSWORD,
    "database": process.env.APP_DATABASE_PATH || "appBarbeiro",
    "migrations": ["./src/database/migrations/*.ts"],
    "entities": ["./src/models/*.ts"],
    "cli": {
    "migrationsDir": "./src/database/migrations"
  }
 }