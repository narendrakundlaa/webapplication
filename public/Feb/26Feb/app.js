var app = angular.module("bankApp", []);

app.controller("mainCntrl", function($scope){
});

app.controller("withDrawCntrl", function($scope, $rootScope){
	$rootScope.totalBalance = 500000;

	$scope.doWithDraw = function() {
		
			if($scope.withDrwAmt <= $scope.totalBalance && $scope.withDrwAmt >= 100)
				{
					//alert( $scope.withDrwAmt + " " + $scope.totalBalance);
					$scope.showWthDrwSucss = true;				
					$scope.totalBalance -= $scope.withDrwAmt;
					 setTimeout(function(){
					 	alert( $scope.withDrwAmt + " WithDrawn successfully Done...");
						alert("Thanks for using SBI...");
					},2000);
					
					
				}
			else if($scope.withDrwAmt <=0 || $scope.withDrwAmt == null || $scope.withDrwAmt < 100)
				{
					//alert("Please enter valid amount..");	
					$scope.showWthDrwInvalidError = true;
					}
			else {
				//console.log("Insufficient Amount");
				alert("Insufficient Amount");
				alert("Currently You are maintainig " + $scope.totalBalance);
				$scope.showWthDrwError = true;
			}	
		$rootScope.$broadcast("tbalupdate", $scope.totalBalance);	
	}
});

app.controller("FDCntrl", function($scope, $rootScope){
	$scope.totalBalance = 500000; // $scope.totalBalance from main balance
	$scope.doFd = function () {
		if(confirm($scope.fdAmt>=500))
		{			
			$scope.totalBalance += $scope.fdAmt;
			//$scope.fdAmt = 0; after enter amount it should be in Zero position
			$scope.showfdSucss = true;
			setTimeout(function(){
				alert(" Fixed Deposit Been successfully");
				alert("Thanks for using SBI");
			},2000);
		}else {
			alert("Please try to deposit $500 or More....!");
		}
	}
	$scope.$on("tbalupdate", function(event, data){
		$scope.totalBalance = data;
		//console.log(event);
		//console.log(data); //this amount is from doFd 

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