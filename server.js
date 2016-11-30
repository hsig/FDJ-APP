// server.js (final)

    // set up ======================================================================
    var express     = require('express');
    var app         = express();
    var favicon     = require ('serve-favicon');
    var port        = process.env.PORT || 9090;                 // set the port
    var bodyParser  = require('body-parser');                   // pull information from HTML POST (express4)
    var mongoose    = require('mongoose');                      // mongoose for mongodb
    //var database    = require('./config/database');             // load the database config

    // configuration ===============================================================
    //mongoose.connect(database.url);                                 // connect to mongoDB database on modulus.io
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(favicon(__dirname + '/public/favicon.ico'));

    app.all('*', function(req, res, next) {
         res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
         res.header('Access-Control-Allow-Headers', 'Content-Type');
         next();
    });


    // routes ======================================================================
    require('./bin/routes/routes.js')(app);

    // listen (start app with node server.js) ======================================
    app.listen(port);
    console.log("Test-FSDJ running on " + port);
