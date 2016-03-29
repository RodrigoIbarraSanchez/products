angular.module('appRoutes', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
        url: '/',
        templateUrl: "views/home.html",
        controller: 'MainController'
    });

    $stateProvider.state("products", {
        url: '/products',
        templateUrl: "views/products.html",
        controller: 'ProductsController'
    });

}]);