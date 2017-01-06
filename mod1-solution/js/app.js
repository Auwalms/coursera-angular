// This will house the app logic.
(
  function() {
    'use strict';//make sure no unforseen error is set loose

    var LunchCheck = angular.module('LunchCheck',[]);
    LunchCheck.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.foodList = ''; //gets content of the textbox.


      $scope.checkStatus = function () {
        if ($scope.foodList.length < 1 ) {
            $scope.show = true;
        }else {
          $scope.show = false;
        }

      $scope.splited = $scope.foodList.split(',');


        /**
        if(holder.length !== 0){
          console.log("Not Zero");
        }else {
          console.log("Zero!");
        }
        **/
      }

    }

})()
