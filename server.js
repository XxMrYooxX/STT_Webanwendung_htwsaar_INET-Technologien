const express = require('express')
const app = express()
const port = 3000

var stt = require("./api/stt")

app.use("/api", stt)



app.get('/', (req, res) => {
  res.sendFile('views/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})