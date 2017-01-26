(function () {
  'use strict';
  console.log('items component loaded');

  angular.module('MenuApp')
  .component('items', {
    template: '<template Url here>',
    bindings : {
      items : '@'
    }
  });

})();
