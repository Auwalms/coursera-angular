(function () {
'use strict';

angular.module('MenuApp')
  .controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var catCtrl = this;

  catCtrl.items = categories.data;
  console.log('Categories data: ',catCtrl.items);
}

})();
