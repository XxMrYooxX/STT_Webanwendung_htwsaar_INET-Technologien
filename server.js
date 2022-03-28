/**
 * Projekt: Abgabe KIB-INET
 * Projektbeteiligte: Julian Müller (3818160) & Marcel Hesselbach (3787974)
 *
*/

//Instanziiere Express
const express = require('express')
const app = express()
const port = 3000

var stt = require("./api/stt")

app.use("/api", stt)

// Static Path für Assets
app.use(express.static('./views/stt_main/assets'))


// Path zum Overlay bei GET-Request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/stt_main/index.html')
})

// Aktivieren des Listen auf Port 3000
app.listen(port, () => {
  console.log(`KIB-INET STT listening at http://localhost:${port}`)
})