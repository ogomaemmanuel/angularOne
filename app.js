let app = angular.module("appModule", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

        when('/products', {
            templateUrl: 'products.html',
            controller: 'ProductsController'
        }).

        when('/about', {
            templateUrl: 'about.html',
            controller: "AboutController"
        }).
        otherwise({
            redirectTo: '/products'
        });

}]);


app.controller("ProductsController", function ($scope) {
    $scope.product = {};
    $scope.search = null;

    $scope.productDetail = {};
    $scope.products = [
        //     {
        //     name: "IPod Nano - 8GB",
        //     price: 199.00,
        //     quantity: 30,
        //     description: "LEGO Star Wars: The Complete Saga - Xbox 360"

        // },
    ]
    $scope.addProduct = function () {
        $scope.products.push($scope.product);
        console.log($scope.product);
        $scope.product = {};
    }
    $scope.viewProductDetail = function (product) {
        $scope.productDetail = product;
        console.log(productDetail);
    }
});

app.filter("productLegth", function () {
    return function (productList) {
        if (productList.length > 0) {
            return "You have added" + productList.length;
        }
        else {
            return "No product Added"
        }
    }
})
app.filter("productFilter", function () {
    return function (productList, search_term) {
        
       
           return productList.filter(product => product.name.toLowerCase().indexOf(search_term.toLowerCase()) !== -1)
           
           
        }
    }
)
app.controller("AboutController", function ($scope) {
    $scope.companyDetails = {
        name: "Cytonn Investemnts"

    }
})
// app.controller("TrendingController",function($scope){
//     $scope.manufactures=[{

//     }]

// })