(function () {
  'use strict';
  console.log('categories component loaded');

  angular.module('MenuApp')
  .component('categories',{
    template: '<div>Testing Templates</div>',
    bindings: {
      items: '<'
    }
  });

})();
