'use strict'
const express = require('express')
const Slapp = require('slapp')
const BeepBoopConvoStore = require('slapp-convo-beepboop')
const BeepBoopContext = require('slapp-context-beepboop')
var bodyParser = require("body-parser");
var debug = require('debug')('http') // use DEBUG=* node server.js

// if (!process.env.PORT) {
//     throw Error("Port is missing")
// }

var slapp = Slapp({
    convo_store: BeepBoopConvoStore(),
    context: BeepBoopContext()
});

var app = slapp.attachToExpress(express());

app.get('/', function(req, res) {
    res.send('Hello')
});

app.listen(3000, function() {
    console.log('Listening on port-: ' + 3000)
})