'use strict';

global.lib = __dirname + '/lib';
global.root = __dirname;
global.config = require('./config')[process.env.NODE_ENV || 'dev'];
global.util = require('util');

var app = require(global.lib + '/init');
