'use strict';

// AngularJS main app initialization
angular.module('boilerplateApp', [
  'ngRoute',
  'ngAnimate',
  'templates',
  'controllers',
  'service'
])
.run(['$rootScope', '$route', function ($rootScope, $route) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/index', {
      title: 'BaseApp - Index',
      templateUrl: 'main.html',
      controller: 'IndexCtrl'
    })
    .when('/about', {
      title: 'App - About',
      templateUrl: 'about.html',
      controller: 'IndexCtrl'
    })
    .otherwise({redirectTo: '/index'});

  //$locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
}]);
