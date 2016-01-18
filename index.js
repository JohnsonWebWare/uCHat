'use strict';

global.lib    = __dirname + '/lib';
global.root   = __dirname;
global.config = require('./config')[process.env.NODE_ENV || 'dev'];
global.util   = require('util');

require(global.lib + '/init')
	.set('view engine', 'jade')
;
