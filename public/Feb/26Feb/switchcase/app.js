var app = angular.module("switchApp", []);

app.controller("switchAppCntrl", function($scope){
	//$scope.selectedTab = '';
	$scope.selectTab = function(currentTab) {
		$scope.selectedTab = currentTab;
	}
})