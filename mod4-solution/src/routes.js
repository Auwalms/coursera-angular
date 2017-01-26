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
    templateUrl :'src/menuapp/templates/categories.template.html'

  })

  .state('items', {
    url: '/items',
    templateUrl :'src/menuapp/templates/items.template.html'
  });


  }
})();
