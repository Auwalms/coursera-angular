(function () {
  'use strict';
  console.log('items component loaded');

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'itemsComponentController',
    bindings : {
      items : '<'
    }
  });

function itemsComponentController() {

}

})();
