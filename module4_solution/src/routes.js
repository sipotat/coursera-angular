(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/views/main/home.template.html'
  })

  // Categories List
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/views/categories/categorieslist.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
    }
  })

  // Category Items
  .state('categoryDetail', {
    url: '/category-detail/{categoryId}',
    templateUrl: 'src/views/category/category-detail.template.html',
    controller: 'CategoryItemController as categoryItem',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryId);
            }]
    }
  });
}

})();
