const express = require('express')
const multer = require('multer')
var path = require('path')

const appRouter = express.Router()
const multer = multer();

var deepspeech = require("deepspeech")


var model = new deepspeech.Model("../models/model_de.pb")


appRouter.post('/stt', multer.single("sttfile"), (req, res) => {
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