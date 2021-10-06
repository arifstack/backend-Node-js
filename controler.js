'use strict';
var response = require('./res');
var connection = require('./connection');

exports.index = function(req, res){
    response.ok("Aplikasi Rest APi Running",res)
};

//menampilkan data
exports.read_produc = function(req,res){
    connection.query('SELECT * from product', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    })
}