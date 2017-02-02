(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = () => {
    // return promise to the categories list
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
    .then((result) => {
      return result.data;
    });
  }

  service.getItemsForCategory = (categoryShortName) => {
    // return promise to the category item
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
    .then((result) => {
      return result.data;
    });
  }
}



})();
