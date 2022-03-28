/**
 * Projekt: Abgabe KIB-INET
 * Projektbeteiligte: Julian Müller (3818160) & Marcel Hesselbach (3787974)
 *
*/

//Instanziiere Express als Webserver und Multer als Balancer
const express = require('express')
const multer = require('multer')
var path = require('path')

const upload = multer()

const appRouter = express.Router()

var deepspeech = require("deepspeech")

// Laden des Deepspeech Models https://github.com/AASHISHAG/deepspeech-german
var model = new deepspeech.Model("./models/deepspeech/model_de.pb")


// Verfügbarkeit STT Endpoint
appRouter.post('/stt', upload.single("sttfile"), (req, res) => {
    console.log("[STT SERVICE]: Service starting...");
    let outputText = model.stt(req.file.buffer)
    console.log(`[STT SERVICE]: STT Output: ${outputText}`);
    if(outputText){
        res.send({
            success: true,
            text: outputText
        });
    } else {
        res.send({
            success: false,
            text: "SST failed, try again!"
        });
    }
})
module.exports = appRouter;