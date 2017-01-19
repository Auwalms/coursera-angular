(function () {
  'use strict';


  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService)
         //.directive('foundItems', foundItems);


         NarrowItDownController.$inject=['MenuSearchService']
         function NarrowItDownController(MenuSearchService) {
           var narrowDownCtrl = this;

           

         };//End of NarrowItDownController

         function MenuSearchService() {
           var service = this;

            function getMatchedMenuItems(param) {

            };

         };//End of MenuSearchService

         function foundItems() {

         };//End of foundItems





})()
