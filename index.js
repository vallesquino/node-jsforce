/* globals require */
var express = require('express'),
    bodyParser = require('body-parser'),
    router = require('./router'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//HTTP Headers Config

//Base Routes
app.use('/api', router);

app.listen(port, function () {
    console.log("API rest listening on http://localhost:" + port);
});