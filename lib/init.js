'use strict';
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);

require('./socket')(require('socket.io')(server));

app.set('view engine', 'jade');
app.use('/js', express.static(global.root + '/public/js'));

app.get('/', function (req, res){
	res.render('index', { title: 'Home', message: 'Home Page' });
});

server.listen(config.port || 8080, function() {
	console.info('Server listening on Port: ' + config.port || 8080);
});

module.exports = app;