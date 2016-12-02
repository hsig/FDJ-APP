'use strict';

var app = angular.module('FDJ', ['ngRoute','appServices','appControllers']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/balance', {
        templateUrl: './App/views/balance/balance.html',
        controller: 'balanceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
