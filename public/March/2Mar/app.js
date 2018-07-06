var app = angular.module("demoApp", []);

app.controller("demoCntrl" , function($scope){
	$scope.name = "TEST";
	$scope.appyChanges = function(){
		//using DOM elements
		// document.querySelector(".block").style.background = "Green";//find the class which having block and apply css properties
		// document.querySelector(".block").style['text-align'] = "center";
		//using Jquery 
		//$(".block").css({'background': 'green', 'text-align': 'center'});
		//using angular jqlite
		angular.element(document.querySelector(".block")).css({'background': 'green', 'text-align': 'center'});
		angular.element(document.querySelector(".block")).addClass("sample")
	};
	$scope.msg = "Hello all Happy Holi...";
});
// boostrap start here... find the id which is block1 and apply angular to them
angular.bootstrap(document.querySelector("#block1"), ["demoApp"] );