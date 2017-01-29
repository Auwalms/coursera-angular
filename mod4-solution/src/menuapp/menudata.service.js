(function () {
  'use strict';
  console.log('MenuDataService Loaded');

  angular.module('Data')
    .service('MenuDataService',MenuDataService)
    .constant('ApiPath','https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject=['$http','ApiPath'];
    function MenuDataService($http,ApiPath) {
      var service = this;


      service.getAllCategories = function () {
        /**
        this method should return a promise which is a result of using the
        $http service, using the following REST API endpoint:
         https://davids-restaurant.herokuapp.com/categories.json
         **/
         return $http({
           method: 'GET',
           url: (ApiPath + '/categories.json')
         })
         .then(function (response) {
           return response.data;
         });
      };//end of getAllCategories function

      service.getItemsForCategory = function (categoryShortName) {
        /**
          this method should return a promise which is a result of using the
          $http service, using the following REST API endpoint:
          https://davids-restaurant.herokuapp.com/menu_items.json?category=,
          where, before the call to the server, your code should append whatever
          categoryShortName value was passed in as an argument into the getItemsForCategory method.
      **/
      return $http({
        method: 'GET',
        url: (ApiPath + '/menu_items.json?category=' + categoryShortName)
      })
        .then(function (response) {
          return response.data.menu_items;
        });

      };//end of getItemsForCategory function


    };//end of MenuDataService function

})();
