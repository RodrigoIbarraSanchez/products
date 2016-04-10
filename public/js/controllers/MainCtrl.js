angular.module('MainCtrl', [])

.controller('MainController', ['$scope', function($scope) {

	console.log('este es el main')
    $scope.tagline = 'En unas cuantas horas vas a estar sentado junto a una fogata asando "Maliciosos Viscos"!';   

}]);