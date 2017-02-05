(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;
    $ctrl.signUp = false;
    $ctrl.favoriteMenuItem;

    if(user) {
      $ctrl.signedUp = true;
      $ctrl.firstName = user.firstName;
      $ctrl.lastName = user.lastName;
      $ctrl.email = user.email;
      $ctrl.phoneNumber = user.phoneNumber;
      $ctrl.favoriteDish = user.favoriteDish;
      $ctrl.favoriteMenuItem = user.favoriteMenuItem;
    }
    else {
      $ctrl.signUp = false;
    }
  }

})();
