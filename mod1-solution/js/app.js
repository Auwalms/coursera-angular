// This will house the app logic.


(
  function() {
    'use strict';//make sure no unforseen error is set loose

    var LunchCheck = angular.module('LunchCheck',[]);
    LunchCheck.controller('LunchCheckCtrl', LunchCheckCtrl);

    LunchCheckCtrl.$inject = ['$scope'];
    function LunchCheckCtrl($scope) {
      var holder = []; //holds strings after the are split
      $scope.foodList = ''; //gets content of the textbox.
      holder.push($scope.foodList);


      $scope.checkStatus = function () {
        if(holder.length !== 0){
          console.log("Not Zero");
        }else {
          console.log("Zero!");
        }
      }

    }

})()
