(function () {
'use strict';

angular.module('MenuApp')
  .controller('categoriesListController', categoriesListController);

categoriesListController.$inject = ['MenuDataService', 'categories'];
function categoriesListController(MenuDataService) {
  var catCtrl = this;

  catCtrl.categories = categories;

}

})();
