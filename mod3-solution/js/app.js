(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiPath', "http://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.removeItem=function (itemPosition) {
    list.found.splice(itemPosition, 1);
  };

  list.check=function () {
      var promise = MenuSearchService.getMatchedMenuItems();
      promise.then(function (response) {
        var message = response.data.menu_items;
        console.log(response.data);
        list.found=[];
        for (var i = 0; i < message.length; i++) {
          if(message[i].description.indexOf(list.Val)!=-1)
            list.found.push(message[i]);
        }

       })
       .catch(function (error) {
         console.error(error);
       })
      };

}


MenuSearchService.$inject = ['$http','ApiPath'];
function MenuSearchService($http,ApiPath) {
  var service = this;
  service.getMatchedMenuItems = function() {
    return $http({
        method:"GET",
        url: (ApiPath +"/menu_items.json")
    });
  };
}

function FoundItemsDirective() {
  var dir = {
  templateUrl: 'foundItems.html',
  scope: {
    found:'<',
    onRemove: '&'
  },
  controller: FoundItemsDirectiveController,
  controllerAs: 'FIDCtrl',
  bindToController: true

  };
  return dir;
  }

function FoundItemsDirectiveController() {
  var FIDCtrl = this;

  FIDCtrl.checkList = function () {
    if(FIDCtrl.found===undefined || FIDCtrl.found.length===0)
      return true;
  };
}


})();
