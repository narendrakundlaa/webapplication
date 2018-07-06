 var app = angular.module("multiccntrl",[]);
app.controller("myCntrl",function($scope){
});

app.controller("Dept", function($scope,$rootScope){

	$rootScope.mainBalance = 18000;
	$scope.Deposit = function(){
		/*parseInt($rootScope.mainBalance);
		parseInt($scope.DeptAmt);*/
		$rootScope.mainBalance += $scope.DeptAmt;		
		$rootScope.$broadcast("DeptAmount", $rootScope.mainBalance);
	}
	$scope.$on("WIthdrwnKey",function(event,data){

		$rootScope.mainBalance = data;
	})
});
app.controller("WIthdrwnCntrl",function($scope, $rootScope){
	$scope.withDrawnAmt = $rootScope.mainBalance;
	$scope.WIthdrwnMoney = function(){

		$scope.withDrawnAmt -= $scope.WIthdrwn;
		$rootScope.$broadcast("WIthdrwnKey", $scope.withDrawnAmt);
	}
	$scope.$on("DeptAmount",function(event,data){
		$scope.withDrawnAmt = data;
	})
});
