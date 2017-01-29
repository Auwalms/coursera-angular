(function () {
  'use strict';
  console.log('Routes Running');

  angular.module('MenuApp')
          .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');


  $stateProvider
  //Home Page Route
  .state('home', {
    url:'/',
    templateUrl:'src/menuapp/templates/home.template.html'
  })


  .state('categories',{
    url: '/categories',
    templateUrl :'src/menuapp/templates/categories-list.template.html',
    controller : 'categoriesListController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items',
    templateUrl :'src/menuapp/templates/items-list.template.html',
    controller: 'ItemListController as itemsCtrl',
    params:  {categoryShortName: null},
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }

      ]
    }
  });


  }
})();
