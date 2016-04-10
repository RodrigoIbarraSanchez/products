angular.module('ProductsService', [])
.service('Products', ['$http', function($http) {

    // llamada para obtener todos los productos
    
    this.get = function(callback) {
            $http.get('/api/products')
            .then(function (response) {
                callback(response.data)
            })
        }    

    //llamada para hacer POST y crear nuevos productos
    this.create = function(productData) {
        return $http.post('/api/products', productData);
    };

    //llamada para hacer DELETE a un producto
    this.delete = function(id) {
        return $http.delete('/api/products/' + id);
    }; 

}]);