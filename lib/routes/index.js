'use strict';

var express = require('express');

module.exports = function(app) {
	app.use('/js', express.static(global.root + '/public/js'));
	app.get('/', function (req, res){
		res.render('index', { title: 'Home', message: 'Home Page' });
	});
}