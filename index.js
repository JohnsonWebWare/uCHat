'use strict';

global.lib = __dirname + '/lib';
global.config = require('./config')[process.env.NODE_ENV || 'dev'];

var app = require(global.lib + '/init');
