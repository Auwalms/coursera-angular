( function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        ;



function ToBuyController() {
  var toBuy = this;
 toBuy.text = 'ToBuyController Up and Ready!';
};

function AlreadyBoughtController() {
  var alreadyBought = this;
    alreadyBought.text = 'AlreadyBoughtController Up and Ready!';

}
}

)()
