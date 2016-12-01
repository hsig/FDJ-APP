'use strict';

var app = angular.module('FDJ', ['ngRoute','appServices','appControllers']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/balance', {
        templateUrl: './app/views/balance/balance.html',
        controller: 'balanceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
