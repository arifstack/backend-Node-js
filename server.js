const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse apilcation/sjon
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//memangil routes
var routes = require('./router');
routes(app)
app.listen(3000, () => {
    console.log(`Server started on port`);
});


