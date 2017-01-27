(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.foundList = [];

  ctrl.searchItems = () => {
    MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
    .then((matchedItems) => {
      ctrl.foundList = matchedItems;
    });
  }

  ctrl.removeItem = (index) => {
    ctrl.foundList.splice(index,1);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = (searchTerm) => {
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
    .then((result) => {
      var itemsList = result.data.menu_items;
      var filteredList = [];

      itemsList.forEach((item) => {
        if (item.description.search(searchTerm)!=-1) {
          filteredList.push(item)
        }
      })
      return filteredList;
    });
  }
}

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

})();
