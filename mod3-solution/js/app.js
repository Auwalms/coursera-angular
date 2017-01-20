(function () {
  'use strict';


  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService)
         .constant('ApiPath', "http://davids-restaurant.herokuapp.com");
         //.directive('foundItems', foundItems);


         NarrowItDownController.$inject=['MenuSearchService']
         function NarrowItDownController(MenuSearchService) {
           var narrowDownCtrl = this;



         };//End of NarrowItDownController

         MenuSearchService.$inject = ['$http','ApiPath'];
         function MenuSearchService($http,ApiPath) {
           var service = this;

           service.getMatchedMenuItems = function (searchTerm) {
             var response = $http({
               method: "GET",
               url: (ApiBasePath + "/menu_items.json"),
               params: {
                 category: searchTerm
               }
              });
             return response;
           };

         };//End of MenuSearchService

         function foundItems() {

         };//End of foundItems





})()
