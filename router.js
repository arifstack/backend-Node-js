'use strict';


module.exports = function(app){
    var jsonku = require('./controler');

    app.route('/')
        .get(jsonku.index);

    app.route('/read_product')
        .get(jsonku.read_produc);
    app.route('/read_product_by_id/:id_product')
        .get(jsonku.read_product_by_id);
}