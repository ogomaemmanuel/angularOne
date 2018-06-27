let app = angular.module("appModule", ['ngRoute']);

// app.config(['$routeProvider',function($routeProvider) {
//     $routeProvider.when('/products', {
//        templateUrl: 'index.html',
//     }).
//     $routeProvider.when('/trending', {
//         templateUrl: 'trending.html',
//      }).
//     when('/manafucturers', {
//        templateUrl: 'manafucturers.html',
//     }).otherwise({
//        redirectTo: '/manafucturers'
//     });
     
//  }]);


app.controller("ProductsController", function ($scope) {
    $scope.product={}
    $scope.productDetail = {};
    $scope.products = [{
        name: "IPod Nano - 8GB",
        price: 199.00,
        quantity: 30,
        description: "LEGO Star Wars: The Complete Saga - Xbox 360"

    },
    ]
    $scope.addProduct = function(){
        $scope.products.push($scope.product);
        console.log($scope.product);
        $scope.product={};
    }
    $scope.viewProductDetail = function (product) {
        $scope.productDetail =product;


       

        console.log(productDetail);

        // $('#productDetailModal').foundation('open');
    }
});

// app.controller("ManafucturersController",function($scope){
//     $scope.manufactures=[{

//     }]

// })
// app.controller("TrendingController",function($scope){
//     $scope.manufactures=[{
        
//     }]

// })