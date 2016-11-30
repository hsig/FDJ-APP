// app/routes.js

// expose the routes to our app with module.exports
module.exports = function(app) {

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('index.html', { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
    });

    require('./BalanceRouter')(app);
};
