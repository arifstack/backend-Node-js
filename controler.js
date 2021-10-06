'use strict';
var response = require('./res');
var connction = require('./connection');

exports.index = function(req, res){
    response.ok("Aplikasi Rest APi Running")
};