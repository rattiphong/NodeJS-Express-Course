const express = require('express')
const app = express()
const port = 3000
const debug = require('debug')

app.get("/", (req, res) => { res.send('Node Hello Word!!') })

app.listen(port, () => { console.log("Listening on port " + port) })