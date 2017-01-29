(function() {
  "use strict";

  angular.module("MenuApp")
    .component("items", {
      templateUrl: "js/components/items.template.html",
      bindings: {
        list: "<"
      }
    });

})();
