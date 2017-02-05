(function() {
  'use strict';


  angular.module('common')
    .service('UsersService', UsersService);


    function UsersService() {
      var service = this;
      var user;


      service.setUser = function (newUserInfo) {
        console.log('User Info: ', newUserInfo);
         user = {
           firstName: newUserInfo.firstName,
           lastName: newUserInfo.lastName,
           email: newUserInfo.email,
           phoneNumber: newUserInfo.phoneNumber,
           favoriteDish: newUserInfo.favoriteDish,
           favoriteMenuItem: newUserInfo.favoriteMenuItem
         }
         console.log('Registered!');


         service.getUser = function () {
           return user;
         }


      }


    }


})();
