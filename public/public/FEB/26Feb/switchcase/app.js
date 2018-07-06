var app = angular.module("switchApp", []);

app.controller("switchAppCntrl", function($scope){
	$scope.selectedTab = '';
	$scope.selectTab = function(cTab) {
		$scope.selectedTab = cTab;
	}
})	