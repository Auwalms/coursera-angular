(function() {
  "use strict";

  angular.module("MenuApp")
    .component("categories", {
      templateUrl: "js/components/categories.template.html",
      bindings: {
        items: "<"
      }
    });
})();
