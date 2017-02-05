(function () {
  'use strict';


  angular.module('public')
    .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['user'];
    function myInfoController(user){
        var $ctrl = this;

        $ctrl.signUp = false;
        $ctrl.favoriteMenuItem;

        if(user){
          $ctrl.signUp = true;
          $ctrl.firstName = user.firstName;
          $ctrl.lastName = user.lastName;
          $ctrl.email = user.email;
          $ctrl.phoneNumber = user.phoneNumber;
          $ctrl.favoriteDish = user.favoriteDish;
          $ctrl.favoriteMenuItem = user.favoriteMenuItem;
        }
        else{
          $ctrl.signUp = false;
        }

    }


})();
