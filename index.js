/* globals require */
var express = require('express'),
    bodyParser = require('body-parser'),
    routerApi = require('./api/router'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//HTTP Headers Config

//Base Routes
app.use('/api', routerApi);

// app.get('*', function (req, res) {
//     res.send('Invalid Endpoint (╯°□°）╯︵ ┻━┻');
// });

app.listen(port, function () {
    console.log("API rest listening on port: " + port);
});