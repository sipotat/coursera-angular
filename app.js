(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstcontroller',function ($scope, $filter) {
    $scope.name = "Sivan";

    $scope.getNumeric = function() {
      return $scope.name.charCodeAt(1);
    };

    $scope.upper = function () {
      $scope.name = $filter('uppercase')($scope.name);
    };
  });

})();
