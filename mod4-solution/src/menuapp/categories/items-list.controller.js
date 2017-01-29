(function () {
'use strict';

angular.module('MenuApp')
        .controller('ItemListController', ItemListController)

ItemListController.$inject = ['$stateParams','items'];
function ItemListController($stateParams, items) {
  var itemsCtrl = this;

  itemsCtrl.items = items;
}
})();
