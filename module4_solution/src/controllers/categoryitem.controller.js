(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemController', CategoryItemController);


CategoryItemController.$inject = ['item'];
function CategoryItemController(item) {
  var categoryItem = this;
  categoryItem.item = item;
}

})();
