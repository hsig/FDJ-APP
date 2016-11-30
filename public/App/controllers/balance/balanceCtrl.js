'use strict';

/* Controllers */

var balanceCtrl = angular.module('balanceCtrl', []);

balanceCtrl.controller("balanceCtrl", function($scope,$route){

  var count = false;
  var poid = 0;
  var result = '';
  var numGame = 0;

  $scope.boules = [{num:0, poid:0},
                   {num:1, poid:0},
                   {num:2, poid:0},
                   {num:3, poid:0},
                   {num:4, poid:0},
                   {num:5, poid:0},
                   {num:6, poid:0},
                   {num:7, poid:0}];

  (function () {
    var x = getRandomInt(0, $scope.boules.length);
    for (var i = 0; i < $scope.boules.length; i++) {
      if (i == x)
        $scope.boules[i].poid = 7;
      else
        $scope.boules[i].poid = 5;
    }
  })();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  $scope.choose = function (x){
    $scope.num = $scope.boules[x].num;
    poid = $scope.boules[x].poid;
    $scope.go = true;
  };

  $scope.executer = function() {
    for (var i = 0; i < $scope.boules.length; i++) {
        result = "iteration num :" + i + "\n";
        if ($scope.boules[i].poid < poid){
          result += "Bingo\n";
          numGame++;
          count = true;
          if (count){
            result += "You Win";
            $scope.count = true;
            break;
          }
        }else{
          result += "Game Over";
          numGame++;
          break;
        }
    }
    $scope.go = false;
    $scope.numGame = numGame;
    alert(result);
  };

  $scope.reset = function() {
    $scope.num = '';
    $scope.go = false;
    $route.reload();
  };


});
