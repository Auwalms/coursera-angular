(function () {
  'use strict';
  console.log('categories component loaded');

  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: CategoriesComponentController
    bindings: {
      items: '<'
    }
  });
  
  function CategoriesComponentController() {

  }

})();
