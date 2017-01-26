(
  function() {
    'use strict';
    console.log('Outside MenuAppCtrl');

    angular.module('MenuApp')
    .controller('MenuAppCtrl', MenuAppCtrl);

    function MenuAppCtrl() {
      var vm = this;
      console.log('Inside MenuAppCtrl');

    };


  })();
