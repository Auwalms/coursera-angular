(function() {
  "use strict";

  angular.module("common")
    .service("UsersService", UsersService);

  function UsersService() {
    var service = this;

    var user;


    service.setUser = function(newUser) {
      user = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        favoriteDish: newUser.favoriteDish,
        favoriteMenuItem: newUser.favoriteMenuItem
      };

    };


    service.getUser = function() {
      return user;
    }
  }
})();
