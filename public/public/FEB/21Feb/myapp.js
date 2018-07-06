var app = angular.module("demoapp", []);

app.controller("sampleCntrl", function($scope){
	$scope.a = 40;
	$scope.b = 90;
	$scope.data = {
		name: 'PRasad',
		age: 50,
		gender: 'Male',
		location: "Hyd"
	};
});