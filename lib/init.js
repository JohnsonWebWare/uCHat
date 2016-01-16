'use strict';
var app = require('express')();
var server = require('http').Server(app);
var io  = require('socket.io')(server);


server.listen(config.port || 8080, function() {
	console.info('Server listening on Port: ' + config.port || 8080);
});

module.exports = app;