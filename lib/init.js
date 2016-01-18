'use strict';

var app     = require('express')();
var server  = require('http').Server(app);

require('./socket')(require('socket.io')(server));
require('./routes')(app);

server.listen(config.port || 8080, function() {
	console.info('Server listening on Port: ' + config.port || 8080);
});

module.exports = app;