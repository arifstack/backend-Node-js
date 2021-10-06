var mysql = require('mysql');

//buat konksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password :'',
    database:'myshop'
});

conn.connect((err)=>{
    if(err)throw err;
    console.log('Mysql Conncet');
});

module.exports = conn;

