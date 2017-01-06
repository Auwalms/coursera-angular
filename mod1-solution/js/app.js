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
        console.log($scope.foodList.length);
        if ($scope.foodList.length < 1 ) {
            $scope.show = true;
            console.log('The length of foodList is'+ $scope.foodList);
        }else {
          $scope.show = false;
        }

      $scope.splited = $scope.foodList.split(',');
      console.log($scope.splited);

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
