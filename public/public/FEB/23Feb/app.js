var app = angular.module("httpapp", []);

app.controller("httpappCntrl", function($scope, $http){
	$scope.showLoading = false;
	$scope.showErr = false;
	$scope.colors = ['red', 'blue', 'purple', 'green'];	
	$scope.productData = [];
	$scope.getData = function(event) {
		$scope.showLoading = true;
		$http({
			url: 'http://localhost:8080/data/productDetails',
			dataType: 'JSON',
			method: 'GET'
		}).then(function(response){
			$scope.showLoading = false;
			$scope.productData = response.data.products;
		}, function(err){
			console.log('Error');
			console.log(err);
			$scope.showErr = true;
			$scope.showLoading = false;
		});
	}
});

