'use strict';

var util = require('util');

var users = {};
var rooms = {};
var sockets = [];
var chatHistory = {};

module.exports = function (io) {
	io.sockets.on('connection', function (socket) {
		socket.on('joinserver', function (name, device) {
			function () {
				for(var user in users) {
					if(users.user.name.toLowerCase() === name.toLowerCase()) {
						return true;
					}
				}
				return false;
			}
		});
	});


	io.on('connection', function (socket) {
		console.info(util.inspect(io.sockets));
		socket.emit('logon', { data: 'logon' });
		socket.on('ping', function (data) {
			console.log(data);
		});
	});
}