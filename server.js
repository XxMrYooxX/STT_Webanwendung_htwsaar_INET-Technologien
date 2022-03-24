const express = require('express')
const app = express()
const port = 3000

var stt = require("./api/stt")

app.use("/api", stt)
app.use(express.static('./views/stt_main/assets'))



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/stt_main/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})