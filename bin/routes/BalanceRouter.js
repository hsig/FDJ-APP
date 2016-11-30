// bin/routes/BalanceRouter.js
var Balance = require('../controllers/balanceCtrl');
balance = new Balance();

// expose the routes to our app with module.exports
module.exports = function(app) {

    app.route('/balance');



};
