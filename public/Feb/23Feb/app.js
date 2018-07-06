var app = angular.module("httpapp", []);

app.controller("httpappCntrl", function($scope, $http){
	$scope.showLoading = true;
	$scope.showErr = false;
	$scope.colors = ['red', 'blue', 'purple', 'green'];	
	//$scope.productData = []; // storing productData in empty array
	$scope.getData = function() {
		$scope.showLoading = true;
		$http({
			url: 'http://localhost:8080/angularProductDetails',// local path http://localhost:8080/23Feb/data/productsData.json
			dataType: 'JSON',
			method: 'GET'
		}).then(function(response){
			$scope.showLoading = false;
			$scope.productData = response.data.Durgaprasad;
			console.log(response);
			console.log($scope.productData);// just for know data
		}, function(err){
			console.log('Error');
			console.log(err);
			$scope.showErr = true;
			$scope.showLoading = false;
		});
	}
});

