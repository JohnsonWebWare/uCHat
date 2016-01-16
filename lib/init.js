'use strict';

var app = require('express').createServer();
var io  = require('socket.io')(app);

app.listen(global.config.port || 8080);

module.exports = app;