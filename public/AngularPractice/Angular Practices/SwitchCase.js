var app = angular.module("mainSwitch" , []);
app.controller("switchCntrl",function($scope){
	$scope.selectTab=function(ctab){
		$scope.selectedTab = ctab;
	}
});