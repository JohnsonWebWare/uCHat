'use strict';

var app = require('express').createServer();
var io  = require('socket.io')(app);



module.exports = app;