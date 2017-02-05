(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UsersService', 'MenuService'];
  function SignUpController(UsersService, MenuService) {
    var $ctrl = this;
    $ctrl.registrationSuccess = false;
    $ctrl.favoriteDishFound = false;
    $ctrl.testValue = 42;
    $ctrl.signUp = function(event) {
      console.log("Signing up started... ");
      event.preventDefault();
      var user = {
            firstName: $ctrl.firstName,
            lastName: $ctrl.lastName,
            email: $ctrl.email,
            phoneNumber: $ctrl.phoneNumber,
            favoriteDish: $ctrl.favoriteDish
      };
      console.log("Signed up Successfully... ");

      MenuService.getMenuItem($ctrl.favoriteDish)
        .then(function(data) {
          console.log("Dish found:", data);
          user.favoriteMenuItem = data;
          UsersService.setUser(user);
          $ctrl.favoriteDishFound = true;
          $ctrl.registrationSuccess = true;
        }, function(err) {
          console.error("Ouch! Dish not found...");
          UsersService.setUser(user);
          $ctrl.favoriteDishFound = false;
          $ctrl.registrationSuccess = true;
        });
    };
  }
})();
