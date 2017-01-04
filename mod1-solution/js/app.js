// This will house the app logic.


(
  function() {
    'use strict';//make sure no unforseen error is set loose

    var LunchCheck = angular.module('LunchCheck',[]);
    LunchCheck.controller('LunchCheckCtrl', LunchCheckCtrl);

    LunchCheckCtrl.$inject = ['$scope'];
    function LunchCheckCtrl($scope) {
      $scope.message = 'Hello World';
    }




})();
