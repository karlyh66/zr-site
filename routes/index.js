// import everything
var express = require('express');
var router = express.Router();
var mongodb =require('mongodb');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var formidable = require('formidable')
var credentials = require('./credentials.js');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var fs = require('fs')
var session = require('express-session');
var parseurl = require('parseurl');
//stop stupid middleman attacks
router.use(require('body-parser').urlencoded({extended:true}));
router.use(require('cookie-parser')(credentials.cookieSecret));
router.use(express.static(__dirname + '/public'))
//put node.js code here
