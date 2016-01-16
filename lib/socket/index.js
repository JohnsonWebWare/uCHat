'use strict';

module.exports = function(io) {
	io.on('connection', function (socket) {
		socket.emit('logon', { data: 'logon' });
		socket.on('ping', function (data) {
			console.log(data);
		});
	});
}