// This will house the app logic.
(
  function() {
    'use strict';//make sure no unforseen error is set loose

    var LunchCheck = angular.module('LunchCheck',[]);
    LunchCheck.controller('LunchCheckCtrl', LunchCheckCtrl);

    LunchCheckCtrl.$inject = ['$scope'];
    function LunchCheckCtrl($scope) {
      $scope.foodList = ''; //gets content of the textbox.


      $scope.checkStatus = function () {
        if ($scope.show == $scope.show.length) {
            $scope.show = $scope.foodList;
            console.log('The length of foodList is'+ $scope.show.length);
        }

      $scope.splited = $scope.foodList.split(',');
      console.log($scope.splited.length);
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
