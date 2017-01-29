(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService',MenuDataService);
    // .constant('ApiPath','https://davids-restaurant.herokuapp.com/categories.json');

    MenuDataService.$inject=['$http','ApiPath'];
    function MenuDataService($http,ApiPath) {
      var service = this;

      service.getAllCategories = function () {
        console.log('getAllCategories service method');
        /**
        this method should return a promise which is a result of using the
        $http service, using the following REST API endpoint:
         https://davids-restaurant.herokuapp.com/categories.json
         **/
         return $http({
           method: 'GET',
           url: 'https://davids-restaurant.herokuapp.com/categories.json'
         });
      };//end of getAllCategories function

      service.getItemsForCategory = function (categoryShortName) {
        console.log('getItemsForCategory by: ', categoryShortName);
        /**
          this method should return a promise which is a result of using the
          $http service, using the following REST API endpoint:
          https://davids-restaurant.herokuapp.com/menu_items.json?category=,
          where, before the call to the server, your code should append whatever
          categoryShortName value was passed in as an argument into the getItemsForCategory method.
      **/
      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      });

      };//end of getItemsForCategory function
    };//end of MenuDataService function

})();
