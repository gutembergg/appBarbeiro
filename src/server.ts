import express from 'express'

const app = express()
const PORT = 3232

app.listen(PORT, () => {
    console.log(`connected in PORT ${PORT}`)
})