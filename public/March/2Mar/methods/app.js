var app = angular.module("demoApp", []);

app.controller("demoCntrl" , function($scope){
	$scope.productDetails = 
		[
		{
		name: 'laptop',
		cmpny: 'Dell',
		price: '$400'
		},
		{
		name: 'Nokia',
		cmpny: 'nokia',
		price: '$8900'
		}
		]
	
	$scope.sellerDetails = {
		sellername: 'Indian electronics',
		rating: 4
	}
	$scope.userDetails = {
		age: 40
	}
	//inheritent here for seller details
	$scope.extendDetails = function() {
		angular.extend($scope.productDetails[0], $scope.sellerDetails);
	}
	var count = 0;
	$scope.copyDetails = function() {
		count++;
		if (count ==1) {
			$scope.tempObj = {};
			//$scope.tempObj = $scope.userDetails;
			angular.copy( $scope.userDetails, $scope.tempObj );//the result is true /false for this condition
			
		}  
		/*$scope.copyDetails = function() { .
			$scope.tempObj = {};
			//$scope.tempObj = $scope.userDetails;//copied as it is when entering text but its not good way.
			
			angular.copy( $scope.userDetails, $scope.tempObj );
			
		}*/
		$scope.result = angular.equals($scope.userDetails, $scope.tempObj);
	}


	/*for (key in $scope.productDetails) {
		console.log(key);
		console.log( $scope.productDetails[key]);
	}*/
	angular.forEach($scope.productDetails, function(key, value){
		console.log(key);
		console.log(value);
	});
});