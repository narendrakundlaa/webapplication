var app = angular.module("httpapp", []);

app.controller("httpappCntrl", function($scope){
	$scope.colors = ['red', 'blue', 'purple', 'green'];
	
	$scope.productData = [
		{
			name: 'laptop',
			price: '$300',
			manu: 'SAMSUNG',
			seller: 'Indian Electronics',
			image: 'images/laptop.png',
			//bgClr: 'red',
			locationsAvailable: ['Hyd', 'Delhi', "Pune", 'India']

		},
		{
			name: 'Tablet',
			price: '$300',
			manu: 'SAMSUNG',
			seller: 'Indian Electronics',
			image: 'images/laptop.png',
			//bgClr: 'green',
			locationsAvailable: ['Hyd', 'Delhi', "Pune", 'India']
		},
		{
			name: 'mobile',
			price: '$300',
			manu: 'SAMSUNG',
			seller: 'Indian Electronics',
			image: 'images/laptop.png',
			locationsAvailable: ['Hyd', 'Delhi', "Pune", 'India']
		},
		{
			name: 'laptop',
			price: '$300',
			manu: 'SAMSUNG',
			seller: 'Indian Electronics',
			image: 'images/laptop.png',
			locationsAvailable: ['Hyd', 'Delhi', "Pune", 'India']
		}
	]
});

function sellerInfo()
{
	document.querySelector('.showSellerInfo').style.display = "block";
}