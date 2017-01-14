( function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
// Declaring ToBuyController and injecting service.
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.availableItems = ShoppingListCheckOffService.getAvailableItems();

  toBuy.buyItem = function (itemindex) {
    ShoppingListCheckOffService.buyItem(itemindex);

  };

}

// Declaring AlreadyBoughtController and injecting service,
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
    alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;
//array containing items available in the store. -_-
  var availableItems = [{ name: "cookies", quantity: 10 },{ name: "sugaries", quantity: 5 },{ name: "chocolates", quantity: 5},{ name: "candys", quantity: 15 },{ name: "bread", quantity: 10 }];
  var boughtItems = []; //Empty array serving as basket for storing items bought

  //function for buying of item triggered by item click.
  service.buyItem = function (itemindex) {
    var items = availableItems[itemindex];
    availableItems.splice(itemindex,1);
    boughtItems.push(items);
  };

  service.getAvailableItems = function () {
    return availableItems;
  };
  //function to check show items already in the basket
  service.getBoughtItems= function () {
    return boughtItems;
  };
}

})()
