var app = angular.module("httpAjaxMobiles",[]);
app.controller("httpAjaxMobilesCntrl",function($scope,$http){
	$scope.loadingImage=true;
	$scope.errorMsg = false;
	$scope.mobileData = function(){
		$scope.loadingImage=true;
		$http({
			url : "http://localhost:8080/angularProductDetailsMobiles",
			method : "GET",
			dataType : "JSON"
		}).then(function(response){
			$scope.loadingImage=false;
			$scope.MobilesData = response.data.Mobile;
			console.log(response);
			console.log($scope.MobilesData);
		},function(error){
			console.log(error);
			console.log("Error happen While comuunication with server");
			$scope.errorMsg=true;
			$scope.loadingImage=false;
		});
	}
})