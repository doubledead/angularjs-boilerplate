
angular.module('controllers', [

])
.controller('IndexCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.routeChange = function (route) {
    $location.path(route);
  };

  $scope.routeToIndex = function () {
    $location.path('index');
  };

  $scope.routeToAbout = function () {
    $location.path('about');
  };
}]);
