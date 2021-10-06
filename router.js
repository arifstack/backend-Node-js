'use trict';


module.exports = function(app){
    var jsonku = require('./controler');

    app.route('/')
        .get(jsonku.index);
}