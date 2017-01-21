(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes="";

    $scope.checkLunch = function() {
      if ($scope.dishes=="") {
        $scope.the_message = "Please enter data first";
      }
      else {
        var d = $scope.dishes.split(",");
        if (d.length<4) {
          $scope.the_message = "Enjoy!";
        }
        else {
          $scope.the_message = "Too Much!";
        }
      }
    }
  }
})();
