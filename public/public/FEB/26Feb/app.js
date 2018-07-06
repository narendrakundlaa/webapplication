var app = angular.module("bankApp", []);

app.controller("mainCntrl", function($scope){
});

app.controller("withDrawCntrl", function($scope, $rootScope){
	$scope.totalBalance = 500000;
	$scope.doWithDraw = function() {
		$scope.totalBalance -= $scope.withDrwAmt;
		$scope.withDrwAmt = 0;
		$scope.showWthDrwSucss = true;
		$rootScope.$broadcast("tbalupdate", $scope.totalBalance);
	}
});

app.controller("FDCntrl", function($scope, $rootScope){
	$scope.totalBalance = 500000;
	$scope.doFd = function () {
		$scope.totalBalance -= $scope.fdAmt;
		$scope.fdAmt = 0;
		$scope.showfdSucss = true;
	}
	$scope.$on("tbalupdate", function(event, data){
		$scope.totalBalance = data;
	});
});

app.controller("RDCntrl", function($scope, $rootScope){
	$scope.totalBalance = 500000;
	$scope.doRd = function() {
		$scope.totalBalance -= $scope.rdAmt;
		$scope.rdAmt = 0;
		$scope.showrdwSucss = true;
	}
	$scope.$on("tbalupdate", function(event, data){
		$scope.totalBalance = data;
	});
});

app.controller("insurenceBlck", function($scope, $rootScope){
	$scope.totalBalance = 500000;
	$scope.msg = "Please take the insurence.";
});