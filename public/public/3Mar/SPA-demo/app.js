var app = angular.module("spaApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/forgotPwdPage", {
		templateUrl : "templates/forgotPwd.htm"
	}).when("/regPage", {
		templateUrl: "templates/registrationPage.htm"
	}).when("/prodDetails", {
		template: "<b>About to show prod details.</b>"
	}).otherwise({
		templateUrl: 'templates/login.htm'
	});

})

app.controller("spaCntrl", function($scope, $location){
	/*console.log("1st cntrller");
	console.log($location.absUrl());
	console.log($location.port());
	console.log($location.protocol());

	$location.url("/testpage");*/

	$scope.openPage = function(type) {
		switch(type) {
			case 'signup':
				$location.url("/regPage");
				break;
			case 'frgtpwd':
				$location.url("/forgotPwdPage");
				break;
		}
	}
});
