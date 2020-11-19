import 'reflect-metadata'
import express from 'express'
import './database'
import cors from 'cors'

import routes from './routes'

const app = express()
const PORT = 3232

// Middlewares ////////////////////////////////////////////////////
app.use(express.json())
app.use(cors())

app.use(routes)

/// ////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`connected at PORT ${PORT}`)
})
