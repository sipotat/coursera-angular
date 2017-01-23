(function () {
  'use strict';

  angular.module('ShoppingApp', [])

  .controller('ToBuyController',ToBuyController)
  .controller('BoughtController',BoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.list = ShoppingListCheckOffService.getToBuyList();

    toBuyList.buyItem = function(itemIndex) {
      console.log("buy");
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.list = ShoppingListCheckOffService.getBoughtList();
  }


  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyList = [
      {name: "cookies", quantity: 10},
      {name: "chips", quantity: 10},
      {name: "wine bottles", quantity: 10},
      {name: "cheese", quantity: 10},
      {name: "coffee", quantity: 10}
    ];

    var boughtList = [];

    service.buyItem = function (itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex,1);
    };

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };
  }
})();
