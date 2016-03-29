angular.module('ProductsCtrl', ['ProductsService'])

.controller('ProductsController', ['$scope', 'Products', function($scope, Products) {

	Products.get(function(products){

		$scope.products = products.products;
	})

}]);