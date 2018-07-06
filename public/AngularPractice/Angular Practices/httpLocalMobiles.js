var app = angular.module("http",[]);

app.controller("httpCntrl",function($scope){
	$scope.sellerDetails = [
	{
		name : "FlIPKART",
		location : "Banglore"
		
	},
	{
		name : "AMAZON",
		location : "Hyderabad"
		
	},
	{
		name : "SNAPDEAL",
		location : "Chennai"
		
	},
	{
		name : "EBAY",
		location : "Anantapur"
		
	},
	{
		name : "BLUEDART",
		location : "Kadiri"
		
	},
	{
		name : "AMAZON",
		location : "Hyderabad"
		
	}
	]
	$scope.color=["Yellow","pink","lightblue","orange","purple"];
	$scope.MobileDetails = [{
		name : "Nokia",
		price : "6059",
		color : "black",
		image : "mobiles/mobile1.jpg"
	},
	{
		name : "Samsung",
		price : "6059",
		color : "black",
		image : "mobiles/mobile4.jpg"
	},
	{
		name : "Iphone",
		price : "6059",
		color : "black",
		image : "mobiles/mobile3.jpg"
	},
	{
		name : "Iball",
		price : "6059",
		color : "black",
		image : "mobiles/mobile4.jpg"
	},{
		name : "Iphone",
		price : "6059",
		color : "black",
		image : "mobiles/mobile3.jpg"
	},
	{
		name : "Iball",
		price : "6059",
		color : "black",
		image : "mobiles/mobile4.jpg"
	}]

	$scope.GetSellelInfo = function(){
	$scope.seller = true;
	setTimeout(function(){
		alert("Thanks for choosen uor site");
	},5000)
}

})
