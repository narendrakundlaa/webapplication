var app = angular.module("demoApp", []);

app.controller("demoCntrl" , function($scope){
	$scope.name = "TEST";
	$scope.appyChanges = function(){
		// document.querySelector(".block").style.background = "Green";
		// document.querySelector(".block").style['text-align'] = "center";
		//$(".block").css({'background': 'green', 'text-align': 'center'});
		angular.element(document.querySelector(".block")).css({'background': 'green', 'text-align': 'center'});
		angular.element(document.querySelector(".block")).addClass("sample")
	};
	$scope.msg = "Hello all Happy Holi...";
});

angular.bootstrap(document.querySelector("#block1"), ["demoApp"] );