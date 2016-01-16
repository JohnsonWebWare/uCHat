var socket = io.connect('/');

socket.on('logon', function(data) {
	console.log(data);
});