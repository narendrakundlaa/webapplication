var app= angular.module("httpAjax",[]);
app.controller("httpAjaxCntrl",function($scope,$http){
	$scope.color = ["blue","white","pink","yellow"];
	$scope.showLoading = true;
	$scope.showError = false;
	$scope.ProductInfo = function(){
		$scope.showLoading = true;
		
		$http({
			url : "http://localhost:8080/angularProductDetails2",			
			dataType : "JSON",
			method : "GET"
		}).then(function(response){
			$scope.showLoading = false;
			$scope.NewBikes = response.data.bikes; //response.data predefined object
			console.log(response);
			console.log(response.data.bikes);
		},function(error){
			console.log("error");
			console.log(error);
			$scope.showError = true;
			$scope.showLoading = false;
			alert("Error Block fired");
		});
	}
})