var app = angular.module("demoApp", []);

app.controller("demoCntrl" , function($scope){
	$scope.productDetails = {
		name: 'laptop',
		cmpny: 'Dell',
		price: '$400'
	};
	$scope.sellerDetails = {
		sellername: 'Indian electronics',
		rating: 4
	}
	$scope.userDetails = {
		age: 40
	}
	var count = 0;
	$scope.copyDetails = function() {
		count++;
		if (count ==1) {
			$scope.tempObj = {};
			//$scope.tempObj = $scope.userDetails;
			angular.copy( $scope.userDetails, $scope.tempObj );
			
		}
		$scope.result = angular.equals($scope.userDetails, $scope.tempObj);
	}
	$scope.extendDetails = function() {
		angular.extend($scope.productDetails, $scope.sellerDetails);
	}

	/*for (key in $scope.productDetails) {
		console.log(key);
		console.log( $scope.productDetails[key]);
	}*/
	angular.forEach($scope.productDetails, function(key, value){
		console.log(key);
		console.log(value);
	});
	angular.isFunction($scope.extendDetails);
});