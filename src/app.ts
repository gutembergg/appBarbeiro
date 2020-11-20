import * as dotenv from 'dotenv'
import 'reflect-metadata'
import express from 'express'
import './database'
import cors from 'cors'

import routes from './routes'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const app = express()

// Middlewares ////////////////////////////////////////////////////
app.use(express.json())
app.use(cors())

app.use(routes)

/// ////////////////////////////////////////////////////////////////

export default app
